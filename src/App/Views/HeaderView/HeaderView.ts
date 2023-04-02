import IView from "../IView/IView";
import IComponentDataWithType from '../../Interfaces/interfaces';

import HeaderTemplate from './HeaderView.hbs';
import './HeaderView.css';

import ListComponent from '../../Components/ListComponent/ListComponent';

import HeaderData from './HeaderViewConfig';

/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends IView {
    private readonly leftSide: HTMLElement;
    private readonly rightSide: HTMLElement;

    // private actionsList: HeaderListView;
    private actionsList: ListComponent;

    private currentActiveItem: string | null;
    constructor(parent: HTMLElement) {
        super(parent, HeaderTemplate({}), '.js-header-container');

        // Initialize fields
        this.leftSide = <HTMLElement>this.element.querySelector('.js-header-container__left');
        this.rightSide = <HTMLElement>this.element.querySelector('.js-header-container__right');

        // Render components
        this.renderLogo();
        this.renderActionsList();
        this.renderRightSide();
        this.renderProfile();
    };

    private renderLogo(): void {
        const logo = new HeaderData.leftSide.componentType(this.leftSide, '', '', HeaderData.leftSide.componentData);
        logo.show();
    };

    private renderActionsList(): void {
        this.actionsList = <ListComponent>(new HeaderData.actionsList.componentType(this.leftSide, '', '', HeaderData.actionsList.componentData));
        this.actionsList.show();
    };

    private renderRightSide(): void {
        HeaderData.rightSide.forEach(({ componentType, componentData }) => {
            const component = new componentType(this.rightSide, '', '', componentData); // TODO: Mb need cast data type
            component.show();
        });
    };

    private renderProfile(): void {
        const profile = new HeaderData.profile.componentType(this.rightSide, '', '', HeaderData.profile.componentData);
        profile.show();
    };

    public changeActiveHeaderListItem(href: string) {
        const listElement = this.actionsList.getElement;
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('active');
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
