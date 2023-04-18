import IView from "../IView/IView";
import IComponentDataWithType from '../../Interfaces/interfaces';

import HeaderTemplate from './HeaderView.hbs';
import './HeaderView.css';

import ListComponent from '../../Components/ListComponent/ListComponent';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

import HeaderData from './HeaderViewConfig';
import DropdownButtonComponent from "../../Components/DropdownButtonComponent/DropdownButtonComponent";
import DropdownButtonComponentData from "../../Components/DropdownButtonComponent/DropdownButtonComponentData";

/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends IView {
    private readonly left: HTMLElement;
    private readonly items: HTMLElement;
    private readonly profile: HTMLElement;

    private actions: ListComponent<LinkComponent, LinkComponentData>;
    private currentActiveItem: string | null;

    constructor(parent: HTMLElement) {
        super(parent, HeaderTemplate({}), '.js-header__nav');

        // Initialize fields
        this.left = <HTMLElement>this.element.querySelector('.js-header__nav--left');
        this.items = <HTMLElement>this.element.querySelector('.js-header__items');
        this.profile = <HTMLElement>this.element.querySelector('.js-header__profile');

        // Render components
        const logo = new HeaderData.logo.componentType(this.left, HeaderData.logo.componentData);
        logo.show();

        this.actions = new HeaderData.actions.componentType(this.left, HeaderData.actions.componentData);
        this.actions.show();
        this.currentActiveItem = null;

        HeaderData.items.forEach(({ componentType, componentData }) => {
           const component =  new componentType(this.items, componentData);
           component.show();
        });
    };

    public changeActiveHeaderListItem(href: string) {
        const listElement = this.actions.getElement();
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('active');
    };

    /**
     * Функция изменения элемента в хэдере
     * @param  {string} profileItemName - название элемента
     * @param  {any} data - Данные, необходимые для отрисовки элемента
     * @returns {void}
     */
    public changeHeaderProfile(profileItemName: string, data?: any): void { // TODO: mb IUser?
        if (!(profileItemName in HeaderData)) {
            return;
        }

        const component = HeaderData[profileItemName] as IComponentDataWithType<DropdownButtonComponent, DropdownButtonComponentData>; // TODO improve?
        this.profile.innerHTML = '';

        if (data?.avatar) {
            (<DropdownButtonComponentData>component.componentData).avatar = data.avatar; // TODO improve?
        }

        const profile = new component.componentType(this.profile, component.componentData);
        profile.show();
    };

    public toggleProfile(): void {
        this.profile.querySelector('.js-dropdown__content')?.classList.toggle('dropdown__content__show');
    };

    public hideProfile(): void {
        this.profile.querySelector('.js-dropdown__content')?.classList.remove('dropdown__content__show');
    };

    /**
     * Функция добавления обработчика события нажатия на хедер
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default HeaderView;
