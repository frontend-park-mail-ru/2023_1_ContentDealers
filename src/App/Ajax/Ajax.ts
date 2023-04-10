import { REQUEST_METHODS, IApi, config } from '../Config/Config';

interface IRequestParams {
    url: string;
    method: string;
    headers: {};
}

export interface IResponse {
    status: number;
    responseBody: Object;
}

class Ajax {
    public async ajax(params: IRequestParams, body?: string | FormData) {
        const headers = new Headers(params.headers);

        // if (params.method !== REQUEST_METHODS.GET) {
        //     const csrfResponse = await fetch(`${config.host}${config.api.csrf.url}`, {
        //         method: config.api.csrf.method,
        //         headers: new Headers(config.api.csrf.headers),
        //         credentials: 'include',
        //     });
        //
        //     const csrfToken = csrfResponse.headers.get('X-CSRF-Token');
        //     if (csrfToken !== null) {
        //         headers.append('X-CSRF-Token', csrfToken);
        //     }
        // }

        const response = await fetch(`${config.host}${params.url}`, {
            method: params.method,
            headers,
            body,
            credentials: 'include',
        });

        let responseBody;
        try {
            responseBody = await response.json();
        } catch (error) {
            responseBody = {};
        }

        return {
            status: response.status,
            responseBody
        };
    };

    public async checkResponseStatus(response: IResponse, conf: IApi) {
        if (response.status.toString() in conf.statuses.success) {
            return Promise.resolve();
        }

        if (response.status.toString() in conf.statuses.failure) {
            const keyStatus = response.status.toString() as keyof typeof conf.statuses.failure;
            return Promise.reject({
                msg: config.api.signin.statuses.failure[keyStatus],
            });
        }

        return Promise.reject({
            msg: 'Неожиданная ошибка',
        });
    };
}

export default new Ajax();
