import IModel from '../IModel/IModel';

import type IUser from '../../Interfaces/User/IUser';
import type IUserSignIn from '../../Interfaces/User/IUserSignIn';
import type IUserSignUp from '../../Interfaces/User/IUserSignUp';

import Ajax from '../../Ajax/Ajax';

import { config, customFailures } from '../../Config/Config';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class UserModel extends IModel {
    private currentUser: IUser | null;

    public constructor() {
        super();
        this.currentUser = null;
    }

    private parseUser(json: any): IUser {
        return {
            email:             json.email,
            avatar:            json.avatar_url,
            has_sub:           json.hasSub,
            sub_expiration:    json.sub_expiration,
        };
    }

    public getCurrentUser(): IUser | null {
        return this.currentUser;
    }

    public async signInUser(signData: IUserSignIn) {
        const signInResponse = await Ajax.ajax(config.api.signIn, JSON.stringify(signData));

        try {
            await Ajax.checkResponseStatus(signInResponse, config.api.signIn);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        } catch {
            this.currentUser = null;
        }

        EventDispatcher.emit('user-changed', this.currentUser);

        if (this.currentUser === null) return Promise.reject(signInResponse.responseBody.message);
    }

    public async signUpUser(signData: IUserSignUp) {
        const signUpResponse = await Ajax.ajax(config.api.signUp, JSON.stringify(signData));

        try {
            await Ajax.checkResponseStatus(signUpResponse, config.api.signUp);

            const signInResponse = await Ajax.ajax(config.api.signIn, JSON.stringify(signData));
            await Ajax.checkResponseStatus(signInResponse, config.api.signIn);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        } catch {
            this.currentUser = null;
        }
        EventDispatcher.emit('user-changed', this.currentUser);

        if (this.currentUser === null) {
            return Promise.reject(signUpResponse.responseBody.message);
        }
    }

    public async logoutUser(): Promise<void> {
        const response = await Ajax.ajax(config.api.logout);
        await Ajax.checkResponseStatus(response, config.api.logout);

        this.currentUser = null;

        EventDispatcher.emit('user-changed', this.currentUser);

        return;
    }

    public async updateUser(user: any) {
        const response = await Ajax.ajax(config.api.update, JSON.stringify(user));

        try {
            await Ajax.checkResponseStatus(response, config.api.update);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        } catch {
            if (response.status === 400) {
                const customStatus =
                    response.responseBody.status.toString() as keyof typeof customFailures;
                return Promise.reject({
                    msg: customFailures[customStatus],
                });
            }
            return Promise.reject();
        }

        EventDispatcher.emit('user-changed', this.currentUser);
    }

    public async avatarUpdate(formData: any): Promise<void> {
        const response = await Ajax.ajax(config.api.avatarUpdate, formData);

        try {
            await Ajax.checkResponseStatus(response, config.api.avatarUpdate);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        } catch (e: any) {
            return Promise.reject(e.msg);
        }

        EventDispatcher.emit('user-changed', this.currentUser);

        return;
    }

    public async avatarDelete(): Promise<void> {
        const response = await Ajax.ajax(config.api.avatarDelete);

        try {
            await Ajax.checkResponseStatus(response, config.api.avatarDelete);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        } catch {
            return Promise.reject();
        }

        EventDispatcher.emit('user-changed', this.currentUser);

        return;
    }

    public async authUserByCookie(): Promise<void> {
        const response = await Ajax.ajax(config.api.profile);

        try {
            await Ajax.checkResponseStatus(response, config.api.profile);
            this.currentUser = this.parseUser(response.responseBody.body.user);
        } catch {
            this.currentUser = null;
            return Promise.reject();
        }

        return;
    }

    public async validatePassword(password: any): Promise<any> {
        const response = await Ajax.ajax(config.api.passwordValidate, JSON.stringify(password));

        try {
            await Ajax.checkResponseStatus(response, config.api.passwordValidate);
        } catch {
            if (response.status === 400) {
                const customStatus = response.responseBody.status.toString() as keyof typeof customFailures;
                return Promise.reject({msg: customFailures[customStatus],});
            }
            return Promise.reject();
        }
    }
}

export default UserModel;
