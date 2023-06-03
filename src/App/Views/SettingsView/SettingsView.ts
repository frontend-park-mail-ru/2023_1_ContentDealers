import IView from '../IView/IView';

import SettingsTemplate from './SettingsView.hbs';
import SettingsData from './SettingsViewConfig';
import './SettingsView.css';

import type ListComponent from '../../Components/ListComponent/ListComponent';

import type FormComponent from '../../Components/FormComponent/FormComponent';

import NoSubscriptionComponent from '../../Components/NoSubscriptionComponent/NoSubscriptionComponent';

import type LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

import type IUser from '../../Interfaces/User/IUser';
import { type NoSubscriptionComponentData } from "../../Components/NoSubscriptionComponent/NoSubscriptionComponentData";
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class SettingsView extends IView {
    private readonly settingsContent: HTMLElement;
    private readonly leftMenuContainer: HTMLElement;
    private readonly middleMenuContainer: HTMLElement;
    private readonly middleMenuUpper: HTMLElement;
    private readonly settingsFormContainer: HTMLElement;
    private readonly rightMenuContainer: HTMLElement;
    private readonly rightMenuAvatar: HTMLImageElement;
    private readonly rightMenuError: HTMLElement;
    private isMain: boolean;

    private leftMenu: ListComponent<LinkComponent, LinkComponentData>;
    private middleMenu: ListComponent<LinkComponent, LinkComponentData>;

    private currentLeftActiveItem: string | null;
    private currentMiddleActiveItem: string | null;

    public readonly changeEmailForm: FormComponent;
    public readonly changePasswordForm: FormComponent;

    private subscriptionComponent: NoSubscriptionComponent;

    private deleteAvatarButton: ButtonComponent;

    public constructor(parent: HTMLElement) {
        super(parent, SettingsTemplate(SettingsData));

        this.settingsContent = <HTMLElement>this.element.querySelector('.js-settings__content');

        this.leftMenuContainer = <HTMLElement>(
            this.element.querySelector('.js-settings__left-menu-container')
        );
        this.middleMenuContainer = <HTMLElement>this.element.querySelector('.js-settings__middle');
        this.middleMenuUpper = <HTMLElement>this.element.querySelector('.js-settings__middle-menu-container');

        this.settingsFormContainer = <HTMLElement>this.element.querySelector('.js-settings__form');
        this.rightMenuContainer = <HTMLElement>this.element.querySelector('.js-settings__right');
        this.rightMenuError = <HTMLElement>this.element.querySelector('.js-settings-right-error');
        this.isMain = true;

        this.leftMenu = new SettingsData.leftMenu.componentType(
            this.leftMenuContainer,
            SettingsData.leftMenu.componentData
        );
        this.leftMenu.show();
        this.currentLeftActiveItem = SettingsData.leftActiveItem;
        this.changeActiveLeftMenuItem(this.currentLeftActiveItem);

        this.middleMenu = new SettingsData.middleMenu.componentType(
            this.middleMenuUpper,
            SettingsData.middleMenu.componentData
        );
        this.middleMenu.show();
        this.currentMiddleActiveItem = SettingsData.middleActiveItem;
        this.changeActiveMiddleMenuItem(this.currentMiddleActiveItem);

        this.changeEmailForm = new SettingsData.formChangeEmailData.componentType(
            this.middleMenuContainer,
            SettingsData.formChangeEmailData.componentData
        );
        this.changeEmailForm.show();

        this.changePasswordForm = new SettingsData.formChangePasswordData.componentType(
            this.middleMenuContainer,
            SettingsData.formChangePasswordData.componentData
        );

        this.rightMenuAvatar = <HTMLImageElement>this.element.querySelector('.js-settings__right-avatar');
        new SettingsData.rightMenu.input.componentType(
            this.rightMenuContainer,
            SettingsData.rightMenu.input.componentData
        ).show();

        this.deleteAvatarButton = new SettingsData.rightMenu.deleteButton.componentType(
            this.rightMenuContainer,
            SettingsData.rightMenu.deleteButton.componentData
        );
        this.showDeleteAvatarButton();
    }

    public showDeleteAvatarButton(): void {
        this.deleteAvatarButton.show();
    }

    public hideDeleteAvatarButton(): void {
        this.deleteAvatarButton.hide();
    }

    public setImg(avatar: string): void {
        this.rightMenuAvatar.src = avatar;
    }

    public getAvatarInput(): HTMLInputElement {
        return <HTMLInputElement>this.element.querySelector('#input-avatar');
    }

    public changeActiveLeftMenuItem(href: string): void {
        const listElement = this.leftMenu.getElement();
        listElement
            .querySelector(`[href="${this.currentLeftActiveItem}"]`)
            ?.parentElement?.classList.remove('settings-left-menu__item--active');
        this.currentLeftActiveItem = href;
        listElement
            .querySelector(`[href="${href}"]`)
            ?.parentElement?.classList.add('settings-left-menu__item--active');
    }

    public changeForm(isEmailForm: boolean): void {
        if (isEmailForm) {
            this.changeEmailForm.show();
            this.changePasswordForm.hide();
        } else {
            this.changeEmailForm.hide();
            this.changePasswordForm.show();
        }
    }

    public changeActiveMiddleMenuItem(href: string): void {
        const listElement = this.middleMenu.getElement();
        listElement
            .querySelector(`[href="${this.currentMiddleActiveItem}"]`)
            ?.parentElement?.classList.remove('settings-middle-menu__item--active');
        this.currentMiddleActiveItem = href;
        listElement
            .querySelector(`[href="${href}"]`)
            ?.parentElement?.classList.add('settings-middle-menu__item--active');
    }

    public showSubscriptions(isEmailForm: boolean, data?: NoSubscriptionComponentData): void {
        if (this.isMain) {
            this.middleMenu.hide();
            isEmailForm ? this.changeEmailForm.hide() : this.changePasswordForm.hide();
            this.subscriptionComponent = new NoSubscriptionComponent(this.middleMenuContainer, data);
            this.subscriptionComponent.show();
            this.settingsContent.removeChild(this.rightMenuContainer);
            this.isMain = !this.isMain;
        }
    }

    public showMain(isEmailForm: boolean): void {
        if (!this.isMain) {
            this.subscriptionComponent.hide();
            this.middleMenu.show();
            isEmailForm ? this.changeEmailForm.show() : this.changePasswordForm.show();
            this.settingsContent.appendChild(this.rightMenuContainer);
            this.isMain = !this.isMain;
        }
    }

    public show(opts?: { user: IUser }): void {
        if (!opts) return;

        this.changeEmailForm.setDataToFields([{ id: 'email', value: opts.user.email }]);
        this.rightMenuAvatar.src = opts.user.avatar;

        super.show();
    }

    public bindRepeatSubscriptionButton(listener: any): void {
        this.subscriptionComponent.bindRepeatSubscribeButtonClick(listener);
    }

    public showAvatarError(error: string): void {
        this.rightMenuError.innerHTML = error;
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }

    public bindClickEventOnAvatar(listener: any): void {
        this.rightMenuAvatar.addEventListener('click', listener.bind(this));
    }

    public bindChangeEventOnAvatar(listener: any): void {
        this.getAvatarInput().addEventListener('change', listener.bind(this));
    }
}

export default SettingsView;
