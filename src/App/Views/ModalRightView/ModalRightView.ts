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

    private readonly backButtonContainer: HTMLElement;

    public constructor(parent: HTMLElement) {
        super(parent, ModalRightTemplate({ title: ModalRightData.title }));

        this.modalBody = <HTMLElement>(
            this.element.querySelector('.js-modal__body')
        );

        this.backButtonContainer = <HTMLElement>(
            this.element.querySelector('.js-modal__close-btn-container')
        );
        new ModalRightData.backButton.componentType(
            this.backButtonContainer,
            ModalRightData.backButton.componentData
        ).show();

        this.currentView = null;
    }

    public setSignInView(): void {
        this.currentView = new SignInView(this.modalBody);
    }

    public setSignUpView(): void {
        this.currentView = new SignUpView(this.modalBody);
    }

    public show(): void {
        this.parent.classList.add('modal--right--open');
        super.show();
    }

    public hide(): void {
        this.parent.classList.remove('modal--right--open');

        setTimeout(() => {
            this.currentView = null;
            super.hide();
        }, 200);
    }

    /**
     * Функция добавления обработчика события нажатия на
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }
}

export default ModalRightView;
