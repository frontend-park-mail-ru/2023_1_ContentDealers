import IView from '../IView/IView';
// import type IComponentDataWithType from '../../Interfaces/interfaces';

import HeaderTemplate from './HeaderView.hbs';
import './HeaderView.css';

import type ListComponent from '../../Components/ListComponent/ListComponent';

import LinkComponent from '../../Components/Link/LinkComponent';
import type LinkComponentData from '../../Components/Link/LinkComponentData';

// import type LinkComponent from '../../Components/LinkComponent/LinkComponent';
// import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

// import type DropdownButtonComponent from '../../Components/DropdownButtonComponent/DropdownButtonComponent';
// import type DropdownButtonComponentData from '../../Components/DropdownButtonComponent/DropdownButtonComponentData';

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
    private readonly tmpHeader: HTMLElement;
    private readonly tmpNav: HTMLElement;

    // Current //
    private currentActiveItem: string | null;
    private currentProfile: LinkComponent | null;

    // Components //
    private logoComponent: LinkComponent;
    private tmpLogoComponent: LinkComponent;

    private actionsComponent: ListComponent<LinkComponent, LinkComponentData>;
    private tmpActionsComponent: ListComponent<LinkComponent, LinkComponentData>;

    private inputComponent: InputComponent;
    private tmpInputComponent: InputComponent;

    private searchIcon: HTMLImageElement;
    private tmpSearchIcon: HTMLImageElement;

    public searchView: SearchView;
    public tmpSearchView: SearchView;

    public constructor(parent: HTMLElement) {
        super(parent, HeaderTemplate({}));

        // Init containers
        this.nav = <HTMLElement>this.element.querySelector('.ts-header__nav');
        this.navRight = <HTMLElement>this.element.querySelector('.ts-header__nav-right');

        this.tmpHeader = <HTMLElement>this.element.querySelector('.ts-tmp-header');
        this.tmpNav = <HTMLElement>this.element.querySelector('.ts-tmp-header__nav');

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
        this.tmpInputComponent = new HeaderData.inputData.componentType(
            this.tmpHeader,
            HeaderData.inputData.componentData
        );

        this.searchView = new SearchView(this.nav);
        this.tmpSearchView = new SearchView(this.tmpHeader);

        this.searchIcon = <HTMLImageElement>this.navRight.querySelector('.search-img');

        this.element.querySelector('.subscribe-button')?.setAttribute('disabled', 'true'); // TODO: return


        this.renderTmpHeader();
    }

    public renderTmpHeader(data?: IUser): void {
        if (data?.avatar) {
            // TODO: Misha
            if (HeaderData.tmpData.at(2)?.componentData?.img) {
                HeaderData.tmpData.at(2)!.componentData!.img!.src = '/' + data.avatar;
            }
        }

        this.tmpLogoComponent = new HeaderData.tmpLogoData.componentType(this.tmpHeader, HeaderData.tmpLogoData.componentData);
        this.tmpLogoComponent.append();

        HeaderData.tmpData.forEach(({ componentType, componentData }) => {
            new componentType(this.tmpHeader, componentData).append();
        });

        this.tmpSearchIcon = <HTMLImageElement>this.tmpHeader.querySelector('.tmp-header-search__img');

        this.tmpActionsComponent = new HeaderData.tmpActions.componentType(this.tmpNav, HeaderData.tmpActions.componentData);
    }

    public showTmpActions(): void {
        this.tmpHeader.classList.add('tmp-header_active');
        this.tmpNav.classList.add('tmp-header__nav_active');
        this.tmpActionsComponent.show();
    }

    public toggleMiddle(isSearch: boolean): void {
        if (!isSearch) {
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

    public toggleTmpMiddle(isSearch: boolean): void {
        if (!isSearch) {
            this.tmpLogoComponent.hide();

            this.tmpInputComponent.prepend();
            this.tmpLogoComponent.prepend();

            this.tmpSearchIcon.src = '/img/icons/close.svg';
            (<HTMLInputElement>this.tmpHeader.querySelector('.input-field__search')).focus();
        } else {
            this.tmpInputComponent.hide();

            this.tmpSearchIcon.src = '/img/icons/search.svg';
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
