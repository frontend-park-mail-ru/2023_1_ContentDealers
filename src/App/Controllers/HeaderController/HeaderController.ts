import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type HeaderView from '../../Views/HeaderView/HeaderView';

import type IUser from '../../Interfaces/User/IUser';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';
import paths from '../../Router/RouterPaths';

import SearchController from '../SearchController/SearchController';
import SearchModel from '../../Models/SearchModel/SearchModel';
import PaymentModel from '../../Models/PaymentModel/PaymentModel';
import UserModel from '../../Models/UserModel/UserModel';

/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */
class HeaderController extends IController<HeaderView, { user: UserModel, payment: PaymentModel }> {
    private searchController: SearchController;

    private isSearch: boolean;
    private previousCall: number | null;
    private lastCall: number | null;
    private lastCallTimer: number;
    private readonly timeout: number;

    public constructor(view: HeaderView, model: { user: UserModel, payment: PaymentModel }) {
        super(view, model);

        this.view.bindClickEvent(this.handleClick.bind(this));

        // TODO: new
        this.view.bindInputEvent(this.handleInput.bind(this));
        this.view.bindKeyPressEvent(this.handleKeyPress.bind(this));
        this.timeout = 150;
        this.previousCall = null;
        this.lastCall = null;

        this.searchController = new SearchController(this.view.searchView, new SearchModel());
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

        EventDispatcher.subscribe('render-middle-list', () => {
            this.isSearch = false;
            this.view.toggleMiddle(this.isSearch);
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
            document.body.classList.add('overflow-hidden');
        } else {
            this.searchController.unmountComponent();
            this.view.toggleMiddle(false);
            document.body.classList.remove('overflow-hidden');
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
                router.goToPath(href);
            }

            const target = <HTMLElement>e.target;
            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];

            switch (action) {
                case 'search': {
                    EventDispatcher.emit('toggle-search');

                    break;
                }

                case 'subscribe': {
                    if ((e.target as HTMLButtonElement).textContent === 'Подписка активна') {
                        router.goToPath(paths.settings);
                        EventDispatcher.emit('showSubscriptions');
                        return;
                    }

                    this.model.user.authUserByCookie()
                        .then(() => {
                            this.model.payment.getPaymentLink()
                                .then(data => {
                                    if (data.link) {
                                        window.open(data.link, '_self');
                                    }
                                })
                                .catch(error => console.error(error));
                        })
                        .catch(() => {
                            router.goToPath(paths.signIn);
                        })

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
            EventDispatcher.emit('toggle-search');
        }
    }
}

export default HeaderController;
