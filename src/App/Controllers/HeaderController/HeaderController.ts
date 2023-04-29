import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import HeaderView from '../../Views/HeaderView/HeaderView';

import IUser from '../../Interfaces/User/IUser';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

import SearchController from '../SearchController/SearchController';
import SearchModel from '../../Models/SearchModel/SearchModel';

/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */
class HeaderController extends IController<HeaderView, IModel> {
    private searchController: SearchController;
    private isSearch: boolean;
    private previousCall: number | null;
    private lastCall: number | null;
    private lastCallTimer: number;
    private timeout: number;

    constructor(view: HeaderView) {
        super(view, IModel);

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindInputEvent(this.handleInput.bind(this));
        this.view.bindKeyPressEvent(this.handleKeyPress.bind(this));
        this.timeout = 150;
        this.previousCall = null;
        this.lastCall = null;
        this.searchController = new SearchController(this.view.searchView, new SearchModel());
        this.isSearch = false;

        // TODO
        EventDispatcher.subscribe('user-changed', (user: IUser) => {
            if (user) {
                this.view.changeHeaderProfile('profile', user);
            } else {
                this.view.changeHeaderProfile('signIn');
            }
        });

        EventDispatcher.subscribe('render-signInButton', () => {
            this.view.changeHeaderProfile('signIn');
        });

        EventDispatcher.subscribe('render-middle-list', () => {
            this.view.toggleMiddle(this.isSearch);
            this.isSearch = false;
        });
    };

    private closeSearch(): void {
        if (!this.isSearch) {
            this.searchController.mountComponent();
        } else {
            this.searchController.unmountComponent();
        }
        this.view.toggleMiddle(this.isSearch);

        this.isSearch = !this.isSearch;
    };

    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            this.view.hideProfile();

            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            const target = <HTMLElement>e.target;
            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];

            switch (action) {
                case 'profile': {
                    this.view.toggleProfile();
                    break;
                }

                case 'search': {
                    this.closeSearch();

                    break;
                }

                case 'signIn': {
                    // EventDispatcher.emit('signIn');
                    break;
                }

                default:
                    break;
            }

            return;
        }
    };

    /**
     * Функция обработки ввода названия
     * @param  {Event} e
     * @returns {void}
     */
    private handleInput(e: Event): void {
        this.previousCall = this.lastCall;

        this.lastCall = Date.now();

        if (this.previousCall && this.lastCall - this.previousCall <= this.timeout) {
            clearTimeout(this.lastCallTimer);
        }

        this.lastCallTimer = setTimeout(() => {
            this.searchController.getSearchResult(this.view.getInputValue().split(' ').join('+'))
                .then(() => {
                    if ((e.target as HTMLInputElement).value !== '') {
                        this.searchController.setTitle('Результаты поиска');
                    } else {
                        this.searchController.setTitle('Часто ищут');
                    }
                    this.searchController.unRenderItems();
                    this.searchController.renderItems();
                });
        }, this.timeout);
    };

    private handleKeyPress(e: KeyboardEvent): void {
        if (e.key === 'Escape') {
            this.closeSearch();
        }
    };
}

export default HeaderController;
