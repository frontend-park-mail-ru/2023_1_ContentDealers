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
    // id:         number;
    email:      string;
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
            // id: json.ID,
            email: json.Email,
            avatar: json.AvatarURL === 0 ? DEFAULT_AVATAR : DEFAULT_AVATAR, // TODO: change to user avatar
        };
    };

    public getCurrentUser(): IUser | null {
        // return { id: 4, email: 'hello@', avatar: '' };

        return this.currentUser;
    };

    public async signInUser(signData: IUserSignIn) {
        const response = await Ajax.ajax(config.api.signIn, JSON.stringify(signData));

        try {
            await Ajax.checkResponseStatus(response, config.api.signIn);
            // this.currentUser = this.parseUser(response.responseBody.body);

            const newResponse = await Ajax.ajax(config.api.profile);
            await Ajax.checkResponseStatus(newResponse, config.api.profile);

            console.log('response.responseBody.body.user')
            console.log(response.responseBody.body.user)
            this.currentUser = this.parseUser(response.responseBody.body.user);
            console.log(this.currentUser)
        }
        catch {
            this.currentUser = null;
        }

        EventDispatcher.emit('user-changed', this.currentUser);

        console.log('this.currentUser', this.currentUser)
        if (this.currentUser === null)
            return Promise.reject(response.responseBody.message);
    };

    public async signUpUser(signData: IUserSignUp) {
        const response = await Ajax.ajax(config.api.signUp, JSON.stringify(signData));

        try {
            await Ajax.checkResponseStatus(response, config.api.signUp);
            this.currentUser = this.parseUser(response.responseBody.body);
        }
        catch {
            this.currentUser = null;
        }
        EventDispatcher.emit('user-changed', this.currentUser);

        if (this.currentUser === null)
            return Promise.reject(response.responseBody.message);
    };

    public async logoutUser() {
        const response = await Ajax.ajax(config.api.logout);
        await Ajax.checkResponseStatus(response, config.api.logout);

        this.currentUser = null;

        EventDispatcher.emit('user-changed', this.currentUser);
    };

    public async authUserByCookie() {
        const response = await Ajax.ajax(config.api.profile);
        try {
            await Ajax.checkResponseStatus(response, config.api.profile);
            this.currentUser = this.parseUser(response.responseBody.body);
        }
        catch {
            this.currentUser = null;
            return Promise.reject();
        }
        EventDispatcher.emit('user-changed', this.currentUser);
    };
}

export { IUserSignIn, IUserSignUp, IUser, UserModel };
