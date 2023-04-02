import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import HeaderView from '../../Views/HeaderView/HeaderView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

// @ts-ignore
/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 * @param  {UserModel} model Объект модели пользователя
 */
class HeaderController extends IController<HeaderView, IModel> {
    constructor(view: HeaderView) {
        super(view, IModel);
        this.view.bindClickEvent(this.handleClick.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        // TODO
        // EventDispatcher.subscribe('user-changed', (user: IUser) => {
        //
        // });

        // EventDispatcher.subscribe('redirect-signin', () => {
        // });

        // EventDispatcher.subscribe('redirect-signup', () => {
        // });
    }

    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    private handleClick(e: Event): void {
        console.log('Header clicked!');

        e.preventDefault();
        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                console.log(href);
                router.goToPath(href);
            }
        }
    }
}

export default HeaderController;
