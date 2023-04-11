import IView from '../IView/IView';

import ModalRightTemplate from './ModalRightView.hbs';
import ModalRightData from './ModalRightViewConfig';
import './ModalRightView.css';

import SignInView from '../SignInView/SignInView';
import SignUpView from '../SignUpView/SignUpView';

/**
 * Отображение правого модального окна
 * @category ModalRight
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для правого модального окна
 */
class ModalRightView extends IView {
    private readonly modalBody: HTMLElement;
    public currentView: SignInView | SignUpView | null;

    constructor(parent: HTMLElement) {
        super(parent, ModalRightTemplate({ title: ModalRightData.title }), '.js-modal__area');

        this.modalBody = <HTMLElement>this.element.querySelector('.js-modal__body');

        this.currentView = null;
    };

    public setSignInView(): void {
        this.currentView = new SignInView(this.modalBody);
    };

    public setSignUpView(): void {
        this.currentView = new SignUpView(this.modalBody);
    };

    public show(): void {
        this.parent.classList.add('modal--right--open');
        super.show();
    };

    public hide(): void {
        this.currentView = null;
        this.parent.classList.remove('modal--right--open');
        super.hide();
    };

    /**
     * Функция добавления обработчика события нажатия на
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
};

export default ModalRightView;
