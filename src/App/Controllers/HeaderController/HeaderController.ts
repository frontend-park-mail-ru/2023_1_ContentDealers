import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type HeaderView from '../../Views/HeaderView/HeaderView';

import type IUser from '../../Interfaces/User/IUser';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

import SearchController from '../SearchController/SearchController';
import SearchModel from '../../Models/SearchModel/SearchModel';
import HeaderModel from '../../Models/HeaderModel/HeaderModel';

/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */
class HeaderController extends IController<HeaderView, HeaderModel> {
    private searchController: SearchController;
    private tmpSearchController: SearchController;

    private isSearch: boolean;
    private previousCall: number | null;
    private lastCall: number | null;
    private lastCallTimer: number;
    private readonly timeout: number;

    public constructor(view: HeaderView, model: HeaderModel) {
        super(view, model);

        this.view.bindClickEvent(this.handleClick.bind(this));

        // TODO: new
        this.view.bindInputEvent(this.handleInput.bind(this));
        this.view.bindKeyPressEvent(this.handleKeyPress.bind(this));
        this.timeout = 150;
        this.previousCall = null;
        this.lastCall = null;

        this.searchController = new SearchController(this.view.searchView, new SearchModel());
        this.tmpSearchController = new SearchController(this.view.tmpSearchView, new SearchModel());
        this.isSearch = false;


        // // TODO
        EventDispatcher.subscribe('user-changed', (user: IUser) => {
            if (user) {
                this.view.changeProfile('logged', user);
                this.view.toggleDisabledButton(user);
            } else {
                this.view.changeProfile('signIn');
                this.view.toggleDisabledButton();
            }
        });

        EventDispatcher.subscribe('render-signInButton', () => {
            this.view.changeProfile('signIn');
            this.view.toggleDisabledButton();
        });
        //
        EventDispatcher.subscribe('render-middle-list', () => {
            this.view.toggleMiddle(this.isSearch);
            this.view.toggleTmpMiddle(this.isSearch);
            this.isSearch = false;
        });
    }

    private closeSearch(): void {
        if (!this.isSearch) {
            this.searchController.mountComponent();
            this.tmpSearchController.mountComponent();
        } else {
            this.searchController.unmountComponent();
            this.tmpSearchController.unmountComponent();
        }
        this.view.toggleMiddle(this.isSearch);
        this.view.toggleTmpMiddle(this.isSearch);

        this.isSearch = !this.isSearch;
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
                router.goToPath(href);
            }

            const target = <HTMLElement>e.target;
            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];

            switch (action) {
                case 'search': {
                    this.closeSearch();

                    break;
                }

                case 'subscribe': {
                    if ((e.target as HTMLButtonElement).textContent === 'Подписка активна') {
                        return;
                    }
                    this.model.getPaymentLink()
                        .then(data => {
                            if (data.link) {
                                window.open(data.link, '_self');
                            }
                        })
                        .catch(error => console.error(error));

                    break;
                }

                case 'bars': {
                    this.view.showTmpActions();
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
                    if (this.searchController.getContentLength() === 0 &&
                        this.searchController.getActorsLength() === 0) {
                        this.searchController.setTitle('Ничего не найдено');
                    } else {
                        if ((e.target as HTMLInputElement).value !== '') {
                            this.searchController.setResultTitle((e.target as HTMLInputElement).value);
                            // this.searchController.setTitle('Результаты поиска');
                        } else {
                            this.searchController.setTitle('Часто ищут');
                        }
                    }
                    this.searchController.unRenderItems();
                    this.searchController.renderItems();
                })
                .catch(error => console.error(error));
        }, this.timeout);
    }

    private handleKeyPress(e: KeyboardEvent): void {
        if (e.key === 'Escape') {
            this.closeSearch();
        }
    }
}

export default HeaderController;
