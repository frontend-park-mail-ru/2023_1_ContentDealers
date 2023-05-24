import IView from '../IView/IView';

import HeaderTemplate from './HeaderView.hbs';
import './HeaderView.css';

import type ListComponent from '../../Components/ListComponent/ListComponent';

import LinkComponent from '../../Components/Link/LinkComponent';
import type LinkComponentData from '../../Components/Link/LinkComponentData';

import HeaderData from './HeaderViewConfig';

import SearchView from '../SearchView/SearchView';
import InputComponent from '../../Components/InputComponent/InputComponent';

import type IUser from '../../Interfaces/User/IUser';

/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends IView {
    private readonly activeClass: string = 'header-item__link_active';

    // HTMLElements //
    private readonly nav: HTMLElement;
    private readonly navRight: HTMLElement;

    // Current //
    private currentActiveItem: string | null;
    private currentProfile: LinkComponent | null;

    // Components //
    private logoComponent: LinkComponent;
    private actionsComponent: ListComponent<LinkComponent, LinkComponentData>;
    private inputComponent: InputComponent;

    private searchIcon: HTMLImageElement;

    private subscribeButton: HTMLButtonElement | null;

    public searchView: SearchView;

    public constructor(parent: HTMLElement) {
        super(parent, HeaderTemplate({}));

        // Init containers
        this.nav = <HTMLElement>this.element.querySelector('.ts-header__nav');
        this.navRight = <HTMLElement>this.element.querySelector('.ts-header__nav-right');

        this.currentActiveItem = null;
        this.currentProfile = null;

        // Render data
        this.actionsComponent = new HeaderData.navData.actions.componentType(
            this.nav,
            HeaderData.navData.actions.componentData
        );
        this.actionsComponent.prepend();

        this.logoComponent = new HeaderData.navData.logo.componentType(
            this.nav,
            HeaderData.navData.logo.componentData
        );
        this.logoComponent.prepend();

        HeaderData.navRightData.forEach(({ componentType, componentData }) => {
            new componentType(this.navRight, componentData).append();
        });

        this.inputComponent = new HeaderData.inputData.componentType(
            this.nav,
            HeaderData.inputData.componentData
        );

        this.searchView = new SearchView(this.nav);

        this.searchIcon = <HTMLImageElement>this.navRight.querySelector('.search-img');

        this.subscribeButton = this.element.querySelector('.subscribe-button');

        this.subscribeButton?.setAttribute('disabled', 'true'); // TODO: return
    }

    public toggleDisabledButton(data?: IUser): void {
        if (data) {
            this.subscribeButton?.removeAttribute('disabled');
            if (data.has_sub) {
                this.subscribeButton!.textContent = 'Подписка активна';
            }
        } else {
            this.subscribeButton?.setAttribute('disabled', 'true');
        }
    }

    public toggleMiddle(isSearch: boolean): void {
        if (isSearch) {
            this.logoComponent.hide();
            this.actionsComponent.hide();

            this.inputComponent.prepend();
            this.logoComponent.prepend();

            this.searchIcon.src = '/img/icons/close.svg';

            (<HTMLInputElement>this.nav.querySelector('.input-field__search')).focus();
        } else {
            this.logoComponent.hide();
            this.inputComponent.hide();

            this.actionsComponent.prepend();
            this.logoComponent.prepend();

            this.searchIcon.src = '/img/icons/search.svg';
        }
    }

    public changeActiveHeaderListItem(href: string): void {
        this.nav
            .querySelector(`[href="${this.currentActiveItem}"]`)
            ?.classList.remove(this.activeClass);
        this.currentActiveItem = href;
        this.nav.querySelector(`[href="${href}"]`)?.classList.add(this.activeClass);
    }

    /**
     * Функция изменения элемента в хэдере
     * @param  {string} profileName - название элемента
     * @param  {IUser} data - Данные, необходимые для отрисовки элемента
     * @returns {void}
     */
    public changeProfile(profileName: string, data?: IUser): void {
        if (!(profileName in HeaderData.profileData)) {
            return;
        }

        const component = HeaderData.profileData[profileName];

        if (data?.avatar) {
            // TODO: Misha
            if (component.componentData) {
                if (component.componentData.img) {
                    component.componentData.img.src = '/' + data.avatar;
                }
            }
        }

        this.currentProfile?.hide();
        this.currentProfile = new component.componentType(
            this.navRight,
            component.componentData
        ) as LinkComponent;
        this.currentProfile.append();
    }

    public getInputValue(): string {
        return (<HTMLInputElement>this.element.querySelector('#query')).value;
    }

    /**
     * Функция добавления обработчика события нажатия на хедер
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public bindInputEvent(listener: any): void {
        this.element.addEventListener('input', listener);
    }

    public bindKeyPressEvent(listener: any): void {
        this.element.addEventListener('keydown', listener);
    }
}

export default HeaderView;
