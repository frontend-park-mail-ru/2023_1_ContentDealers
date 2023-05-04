import IView from '../IView/IView';
import type IComponentDataWithType from '../../Interfaces/interfaces';

import HeaderTemplate from './HeaderView.hbs';
import './HeaderView.css';

import type ListComponent from '../../Components/ListComponent/ListComponent';

import type LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

import type DropdownButtonComponent from '../../Components/DropdownButtonComponent/DropdownButtonComponent';
import type DropdownButtonComponentData from '../../Components/DropdownButtonComponent/DropdownButtonComponentData';

import HeaderData from './HeaderViewConfig';

import SearchView from '../SearchView/SearchView';
import InputComponent from '../../Components/InputComponent/InputComponent';

/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends IView {
    private readonly items: HTMLElement;
    private readonly profile: HTMLElement;
    private readonly logo: HTMLElement;
    private readonly middle: HTMLElement;
    private input: InputComponent;
    private searchIcon: HTMLImageElement;

    private actions: ListComponent<LinkComponent, LinkComponentData>;
    private currentActiveItem: string | null;

    public searchView: SearchView;

    public constructor(parent: HTMLElement) {
        super(parent, HeaderTemplate({}));

        // Initialize fields
        this.items = <HTMLElement>this.element.querySelector('.js-header__items');
        this.profile = <HTMLElement>this.element.querySelector('.js-header__profile');
        this.logo = <HTMLElement>this.element.querySelector('.js-header__logo');
        this.middle = <HTMLElement>this.element.querySelector('.js-header__middle');

        // Render components
        const logo = new HeaderData.logo.componentType(this.logo, HeaderData.logo.componentData);
        logo.show();

        this.input = new InputComponent(this.middle, HeaderData.input.componentData);

        this.searchView = new SearchView(this.middle);

        this.actions = new HeaderData.actions.componentType(
            this.middle,
            HeaderData.actions.componentData
        );
        this.actions.show();
        this.currentActiveItem = null;

        HeaderData.items.forEach(({ componentType, componentData }) => {
            const component = new componentType(this.items, componentData);
            component.show();
        });

        this.items.querySelector('.subscribe-button')?.setAttribute('disabled', 'true'); // TODO: return
        this.searchIcon = <HTMLImageElement>this.items.querySelector('img');
    }

    public toggleMiddle(isSearch: boolean): void {
        if (!isSearch) {
            this.actions.hide();
            this.input.show();
            this.searchIcon.src = '/img/icons/close.svg';
            (<HTMLElement>this.middle.querySelector('.input-field__search')).focus();
        } else {
            this.input.hide();
            this.actions.show();
            this.searchIcon.src = '/img/icons/search.svg';
        }
    }

    public changeActiveHeaderListItem(href: string): void {
        const listElement = this.actions.getElement();
        listElement
            .querySelector(`[href="${this.currentActiveItem}"]`)
            ?.parentElement?.classList.remove('active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('active');
    }

    /**
     * Функция изменения элемента в хэдере
     * @param  {string} profileItemName - название элемента
     * @param  {any} data - Данные, необходимые для отрисовки элемента
     * @returns {void}
     */
    public changeHeaderProfile(profileItemName: string, data?: any): void {
        // TODO: mb IUser?
        if (!(profileItemName in HeaderData)) {
            return;
        }

        const component = HeaderData[profileItemName] as IComponentDataWithType<
            DropdownButtonComponent,
            DropdownButtonComponentData
        >; // TODO improve?
        this.profile.innerHTML = '';

        if (data?.avatar) {
            if (component.componentData) {
                component.componentData.avatar = '/' + data.avatar;
            }
        }

        const profile = new component.componentType(this.profile, component.componentData);
        profile.show();
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
