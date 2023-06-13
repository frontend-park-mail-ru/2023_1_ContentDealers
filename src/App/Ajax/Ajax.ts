import { REQUEST_METHODS, config, customFailures } from '../Config/Config';
import type { IApi } from '../Config/Config';

interface IRequestParams {
    url: string;
    method: string;
    headers: NonNullable<unknown>;
}

export interface IResponse {
    status: number;
    responseBody: any;
}

class Ajax {
    private csrfToken?: string;

    public async ajax(params: IRequestParams, body?: string | FormData) {
        const headers = new Headers(params.headers);

        if (!config.isAuthUrl(params.url)) {
            if (params.method !== REQUEST_METHODS.GET) {
                if (!this.csrfToken) {
                    await this.getCsrfTokenFromServer();
                }
                headers.append('CSRF-Token', this.csrfToken!);
            }
        }

        const response = await fetch(`${config.host}${params.url}`, {
            method: params.method,
            headers,
            body,
            credentials: 'include',
        });

        let responseBody;
        try {
            responseBody = await response.json();

            if (response.status === 400) {
                const status = responseBody.status.toString();
                if (status === '10' || status === '11') {
                    this.csrfToken = undefined;

                    const newRequest: any = await this.ajax(params, body);

                    return {
                        status: newRequest.status,
                        responseBody: newRequest.responseBody,
                    };
                }

                const customStatus = status as keyof typeof customFailures;
                responseBody.message = customFailures[customStatus];
            }
        } catch (error) {
            responseBody = {};
        }

        return {
            status: response.status,
            responseBody,
        };
    }

    private setCsrfToken(csrfToken: string): void {
        this.csrfToken = csrfToken;
    }

    public async getCsrfTokenFromServer() {
        const csrfResponse = await fetch(`${config.host}${config.api.csrf.url}`, {
            method: config.api.csrf.method,
            headers: new Headers(config.api.csrf.headers),
            credentials: 'include',
        });

        const csrfToken = await csrfResponse.json();

        this.setCsrfToken(csrfToken.body['csrf-token']);

        return csrfToken;
    }

    public async checkResponseStatus(response: IResponse, conf: IApi) {
        if (response.status.toString() in conf.statuses.success) {
            return Promise.resolve();
        }

        if (response.status.toString() in conf.statuses.failure) {
            const keyStatus = response.status.toString() as keyof typeof conf.statuses.failure;

            if (keyStatus === '400') {
                const customStatus =
                    response.responseBody.status.toString() as keyof typeof customFailures;

                return Promise.reject({
                    msg: customFailures[customStatus],
                });
            }

            return Promise.reject({
                msg: config.api.signin.statuses.failure[keyStatus],
            });
        }

        return Promise.reject({
            msg: 'Неожиданная ошибка',
        });
    }
}

export default new Ajax();
