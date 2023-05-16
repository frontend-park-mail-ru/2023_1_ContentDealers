import IView from '../IView/IView';

import MediaHeaderTemplate from './MediaHeaderView.hbs';
import './MediaHeaderView.css';
import MediaHeaderData from './MediaHeaderViewConfig';

import type ListComponent from '../../Components/ListComponent/ListComponent';

import LinkComponent from '../../Components/Link/LinkComponent';
import type LinkComponentData from '../../Components/Link/LinkComponentData';

import SearchView from '../SearchView/SearchView';
import InputComponent from '../../Components/InputComponent/InputComponent';

import type IUser from '../../Interfaces/User/IUser';

/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class MediaHeaderView extends IView {
    private readonly activeClass: string = 'media-header-item__link_active';

    // HTMLElements //
    private readonly header: HTMLElement;
    private readonly nav: HTMLElement;

    // Current //
    private currentActiveItem: string | null;
    private currentProfile: LinkComponent | null;

    // Components //
    private logoComponent: LinkComponent;
    private actionsComponent: ListComponent<LinkComponent, LinkComponentData>;
    private inputComponent: InputComponent;

    private searchIcon: HTMLImageElement;

    public searchView: SearchView;

    public constructor(parent: HTMLElement) {
        super(parent, MediaHeaderTemplate({}));

        // Init containers
        this.header = <HTMLElement>this.element.querySelector('.ts-media-header') || this.element;
        this.nav = <HTMLElement>this.element.querySelector('.ts-media-header__nav');

        this.currentActiveItem = null;
        this.currentProfile = null;

        this.logoComponent = new MediaHeaderData.logoData.componentType(this.header, MediaHeaderData.logoData.componentData);
        this.logoComponent.append();

        this.inputComponent = new MediaHeaderData.inputData.componentType(
            this.header,
            MediaHeaderData.inputData.componentData
        );

        MediaHeaderData.headerData.forEach(({ componentType, componentData }) => {
            new componentType(this.header, componentData).append();
        });

        this.searchView = new SearchView(this.header);

        this.searchIcon = <HTMLImageElement>this.header.querySelector('.search-img');

        this.actionsComponent = new MediaHeaderData.actions.componentType(this.nav, MediaHeaderData.actions.componentData);
    }

    public showActions(): void {
        this.header.classList.add('tmp-header_active');
        this.nav.classList.add('tmp-header__nav_active');
        this.actionsComponent.show();
    }

    public toggleMiddle(isSearch: boolean): void {
        if (isSearch) {
            this.logoComponent.hide();

            this.inputComponent.prepend();
            this.logoComponent.prepend();

            this.searchIcon.src = '/img/icons/close.svg';
            (<HTMLInputElement>this.header.querySelector('.input-field__search')).focus();
        } else {
            this.inputComponent.hide();

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
        if (!(profileName in MediaHeaderData.profileData)) {
            return;
        }

        const component = MediaHeaderData.profileData[profileName];

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
            this.header,
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

export default MediaHeaderView;
