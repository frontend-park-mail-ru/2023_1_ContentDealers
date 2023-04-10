import IModel from "../IModel/IModel";

import Ajax from '../../Ajax/Ajax';

import { config, DEFAULT_AVATAR } from '../../Config/Config';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

interface IUserSignIn {
    email: string;
    password: string;
}

interface IUserSignUp {
    email: string;
    password: string;
    date_birth: string;
}

interface IUser {
    email:      string;
    birthDate:  string;
    avatar?:    string;
}

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
            avatar: json.avatar_url, // TODO: change to user avatar
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

        console.log(signUpResponse)
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

        if (this.currentUser === null)
            return Promise.reject(signUpResponse.responseBody.message);
    };

    public async logoutUser() {
        const response = await Ajax.ajax(config.api.logout);
        await Ajax.checkResponseStatus(response, config.api.logout);

        this.currentUser = null;

        EventDispatcher.emit('user-changed', this.currentUser);
    };

    public async updateUser(user: any) {
        console.log('updateUser');
        const response = await Ajax.ajax(config.api.update, JSON.stringify(user));

        try {
            await Ajax.checkResponseStatus(response, config.api.update);

            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            return Promise.reject();
        }

        EventDispatcher.emit('user-changed', this.currentUser);
    };

    public async avatarUpdate(formData: any) {
        console.log('avatarUpdate');
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
        request.send(formData);

        if (request.status === 200) {
            const profileResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            console.log('profileResponse.responseBody.body.user', profileResponse.responseBody.body.user)
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            console.log('this.currentUser', this.currentUser)

            EventDispatcher.emit('user-changed', this.currentUser);
        } else {
            return Promise.reject();
        }
    };

    public async avatarDelete() {
        console.log('avatarDelete');
        const response = await Ajax.ajax(config.api.avatarDelete);
        console.log(response)

        try {
            await Ajax.checkResponseStatus(response, config.api.avatarDelete);
            console.log('response', response)

            const profileResponse = await Ajax.ajax(config.api.profile);
            console.log('profileResponse', profileResponse);
            await Ajax.checkResponseStatus(profileResponse, config.api.profile);

            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            console.log('currentUser', this.currentUser);

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
        EventDispatcher.emit('user-changed', this.currentUser);
    };
}

export { IUserSignIn, IUserSignUp, IUser, UserModel };
