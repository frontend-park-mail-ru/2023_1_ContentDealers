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

class SettingsView extends IView {
    private readonly leftMenuContainer: HTMLElement;
    private readonly rightMenuContainer: HTMLElement;
    private readonly settingsFormContainer: HTMLElement;

    private leftMenu: ListComponent<LinkComponent, LinkComponentData>;
    private currentActiveItem: string | null;

    public readonly form: FormComponent;

    private subscriptionComponent: NoSubscriptionComponent;

    public constructor(parent: HTMLElement) {
        super(parent, SettingsTemplate(SettingsData));

        this.leftMenuContainer = <HTMLElement>(
            this.element.querySelector('.js-settings__left-menu-container')
        );
        this.rightMenuContainer = <HTMLElement>this.element.querySelector('.js-settings__right');

        this.settingsFormContainer = <HTMLElement>this.element.querySelector('.js-settings__form');

        this.leftMenu = new SettingsData.leftMenu.componentType(
            this.leftMenuContainer,
            SettingsData.leftMenu.componentData
        );
        this.leftMenu.show();
        this.currentActiveItem = null;

        this.form = new SettingsData.formData.componentType(
            this.rightMenuContainer,
            SettingsData.formData.componentData
        );
        this.form.show();
    }

    public changeActiveLeftMenuItem(href: string): void {
        const listElement = this.leftMenu.getElement();
        listElement
            .querySelector(`[href="${this.currentActiveItem}"]`)
            ?.parentElement?.classList.remove('settings-left-menu__item--active');
        this.currentActiveItem = href;
        listElement
            .querySelector(`[href="${href}"]`)
            ?.parentElement?.classList.add('settings-left-menu__item--active');
    }

    public showSubscriptions(data?: NoSubscriptionComponentData): void {
        this.rightMenuContainer.innerHTML = '';

        this.subscriptionComponent = new NoSubscriptionComponent(this.rightMenuContainer, data);
        this.subscriptionComponent.show();
    }

    public showMain(): void {
        this.rightMenuContainer.innerHTML = '';
        this.form.show();
    }

    public show(opts?: { user: IUser }): void {
        if (!opts) return;

        this.form.setDataToFields([{ id: 'email', value: opts.user.email }]);

        super.show();
    }

    public bindRepeatSubscriptionButton(listener: any): void {
        this.subscriptionComponent.bindRepeatSubscribeButtonClick(listener);
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }
}

export default SettingsView;
