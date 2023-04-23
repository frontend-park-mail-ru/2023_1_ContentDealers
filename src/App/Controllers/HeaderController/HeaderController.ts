import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import HeaderView from '../../Views/HeaderView/HeaderView';

import IUser from '../../Interfaces/User/IUser';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */
class HeaderController extends IController<HeaderView, IModel> {
    constructor(view: HeaderView) {
        super(view, IModel);

        this.view.bindClickEvent(this.handleClick.bind(this));

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
}

export default HeaderController;
