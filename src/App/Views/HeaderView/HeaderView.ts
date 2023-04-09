import IView from "../IView/IView";
import IComponentDataWithType from '../../Interfaces/interfaces';

import HeaderTemplate from './HeaderView.hbs';
import './HeaderView.css';

import ListComponent from '../../Components/ListComponent/ListComponent';

import HeaderData from './HeaderViewConfig';


import DropdownButtonComponentData from '../../Components/DropdownButtonComponent/DropdownButtonComponentData';

/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends IView {
    private readonly leftSide: HTMLElement;
    private readonly rightSide: HTMLElement;
    private readonly profile: HTMLElement;
    private actionsList: ListComponent;
    private currentActiveItem: string | null;

    constructor(parent: HTMLElement) {
        super(parent, HeaderTemplate({}), '.js-header-container');

        // Initialize fields
        this.leftSide = <HTMLElement>this.element.querySelector('.js-header-container__left');
        this.rightSide = <HTMLElement>this.element.querySelector('.js-header-container__right');
        this.profile = <HTMLElement>this.element.querySelector('.js-user-profile');

        // Render components
        HeaderData.leftItems.forEach(({ componentType, componentData}) => {
            const component = new componentType(this.leftSide, '', '', componentData);
            component.show();
        });

        this.actionsList = <ListComponent>(new HeaderData.actionsList.componentType(this.leftSide, '', '', HeaderData.actionsList.componentData));
        this.actionsList.show();
        this.currentActiveItem = null;

        HeaderData.rightItems.forEach(({ componentType, componentData}) => {
            const component = new componentType(this.rightSide, '', '', componentData);
            component.show();
        });

        this.rightSide.removeChild(this.profile);
        this.rightSide.appendChild(this.profile);
    };

    public changeActiveHeaderListItem(href: string) {
        const listElement = this.actionsList.getElement;
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

        const component = <IComponentDataWithType>HeaderData[profileItemName];
        this.profile.innerHTML = '';

        if (data?.avatar) {
            (<DropdownButtonComponentData>component.componentData).avatar = data.avatar;
        }

        const profileItem = new component.componentType(this.profile, '', '', component.componentData);
        profileItem.show();
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
