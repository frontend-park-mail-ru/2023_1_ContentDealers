import IModel from '../IModel/IModel';

import IUser from '../../Interfaces/User/IUser';
import IUserSignIn from '../../Interfaces/User/IUserSignIn';
import IUserSignUp from '../../Interfaces/User/IUserSignUp';

import Ajax from '../../Ajax/Ajax';

import {config, customFailures} from '../../Config/Config';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class UserModel extends IModel {
    private currentUser: IUser | null;

    constructor() {
        super();
        this.currentUser = null;
    };

    private parseUser(json: any): IUser {
        return {
            email: json.email,
            birthDate: json.date_birth,
            avatar: json.avatar_url,
        };
    };

    public getCurrentUser(): IUser | null {
        return this.currentUser;
    };

    public async signInUser(signData: IUserSignIn) {
        const signInResponse = await Ajax.ajax(config.api.signIn, JSON.stringify(signData));

        try {
            await Ajax.checkResponseStatus(signInResponse, config.api.signIn);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
        }

        EventDispatcher.emit('user-changed', this.currentUser);

        if (this.currentUser === null)
            return Promise.reject(signInResponse.responseBody.message);
    };

    public async signUpUser(signData: IUserSignUp) {
        const signUpResponse = await Ajax.ajax(config.api.signUp, JSON.stringify(signData));

        try {
            await Ajax.checkResponseStatus(signUpResponse, config.api.signUp);

            const signInResponse = await Ajax.ajax(config.api.signIn, JSON.stringify(signData));
            await Ajax.checkResponseStatus(signInResponse, config.api.signIn);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
        }
        EventDispatcher.emit('user-changed', this.currentUser);

        if (this.currentUser === null) {
            return Promise.reject(signUpResponse.responseBody.message);
        }
    };

    public async logoutUser() {
        const response = await Ajax.ajax(config.api.logout);
        await Ajax.checkResponseStatus(response, config.api.logout);

        this.currentUser = null;

        EventDispatcher.emit('user-changed', this.currentUser);
    };

    public async updateUser(user: any) {
        const response = await Ajax.ajax(config.api.update, JSON.stringify(user));

        try {
            await Ajax.checkResponseStatus(response, config.api.update);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            if (response.status === 400) {
                const customStatus = response.responseBody.status.toString() as keyof typeof customFailures;
                return Promise.reject({
                    msg: customFailures[customStatus],
                });
            }
            return Promise.reject();
        }

        EventDispatcher.emit('user-changed', this.currentUser);
    };

    public async avatarUpdate(formData: any) {
        // const response = await Ajax.ajax(config.api.avatarUpdate, JSON.stringify(formData));
        // console.log(response)
        //
        // try {
        //     await Ajax.checkResponseStatus(response, config.api.avatarUpdate);
        //     console.log('response', response)
        //
        //     const profileResponse = await Ajax.ajax(config.api.profile);
        //     console.log('profileResponse', profileResponse);
        //     await Ajax.checkResponseStatus(profileResponse, config.api.profile);
        //
        //     this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        //     console.log('currentUser', this.currentUser);
        // }
        // catch {
        //     return Promise.reject();
        // }


        const request = new XMLHttpRequest();
        request.open("POST", config.host + config.api.avatarUpdate.url, false);
        request.withCredentials = true;

        const response = await Ajax.getCsrfTokenFromServer();

        request.setRequestHeader('csrf-token', response.body['csrf-token']);
        request.send(formData);

        if (request.status === 200) {
            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);

            EventDispatcher.emit('user-changed', this.currentUser);
        } else {
            if (request.status === 413) {
                return Promise.reject({
                    msg: 'Слишком большой размер файла',
                });
            }

            if (request.status === 400) {
                const customStatus = response.responseBody.status.toString() as keyof typeof customFailures;
                return Promise.reject({
                    msg: customFailures[customStatus],
                });
            }

            return Promise.reject();
        }
    };

    public async avatarDelete() {
        const response = await Ajax.ajax(config.api.avatarDelete);

        try {
            await Ajax.checkResponseStatus(response, config.api.avatarDelete);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);

            EventDispatcher.emit('user-changed', this.currentUser);
        }
        catch {
            return Promise.reject();
        }
    };

    public async authUserByCookie() {
        const response = await Ajax.ajax(config.api.profile);

        try {
            await Ajax.checkResponseStatus(response, config.api.profile);
            this.currentUser = this.parseUser(response.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
            return Promise.reject();
        }
        // EventDispatcher.emit('user-changed', this.currentUser); TODO: need?
    };
}

export default UserModel;
