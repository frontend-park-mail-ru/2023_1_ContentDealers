import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type MediaHeaderView from '../../Views/MediaHeaderView/MediaHeaderView';

import type IUser from '../../Interfaces/User/IUser';

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
class MediaHeaderController extends IController<MediaHeaderView, IModel> {
    private searchController: SearchController;

    private isSearch: boolean;
    private isOpen: boolean;

    private previousCall: number | null;
    private lastCall: number | null;
    private lastCallTimer: number;
    private readonly timeout: number;

    public constructor(view: MediaHeaderView) {
        super(view, IModel);

        this.view.bindClickEvent(this.handleClick.bind(this));

        // TODO: new
        this.view.bindInputEvent(this.handleInput.bind(this));
        this.view.bindKeyPressEvent(this.handleKeyPress.bind(this));
        this.timeout = 150;
        this.previousCall = null;
        this.lastCall = null;

        this.searchController = new SearchController(this.view.searchView, new SearchModel());
        this.isSearch = false;
        this.isOpen = false;

        // // TODO
        EventDispatcher.subscribe('user-changed', (user: IUser) => {
            if (user) {
                this.view.changeProfile('logged', user);
            } else {
                this.view.changeProfile('signIn');
            }
        });

        EventDispatcher.subscribe('render-signInButton', () => {
            this.view.changeProfile('signIn');
        });

        EventDispatcher.subscribe('toggle-search', () => {
            this.isSearch = !this.isSearch;
            this.toggleSearch();
        });
    }

    private toggleSearch(): void {
        if (this.isSearch) {
            this.searchController.mountComponent();
            this.view.toggleMiddle(true);
        } else {
            this.searchController.unmountComponent();
            this.view.toggleMiddle(false);
        }
    }

    private toggleBar(): void {
        if (this.isOpen) {
            this.view.showActions();
        } else {
            this.view.hideActions();
        }
    }

    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                if (this.isOpen) {
                    this.isOpen = !this.isOpen;
                    this.toggleBar();
                }
                router.goToPath(href);
            }

            const target = <HTMLElement>e.target;
            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];

            switch (action) {
                case 'search': {
                    EventDispatcher.emit('toggle-search');

                    break;
                }

                case 'bars': {
                    this.isOpen = !this.isOpen;
                    this.toggleBar();
                    break;
                }

                default:
                    break;
            }

            return;
        }
    }

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
            this.searchController
                .getSearchResult(this.view.getInputValue().split(' ').join('+'))
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
    }

    private handleKeyPress(e: KeyboardEvent): void {
        if (e.key === 'Escape') {
            // this.closeSearch();
            EventDispatcher.emit('toggle-search');
        }
    }
}

export default MediaHeaderController;
