import IView from '../IView/IView';

import ModalRightTemplate from './ModalView.hbs';
import ModalRightData from './ModalViewConfig';
import './ModalView.css';

import SignInView from '../SignInView/SignInView';
import SignUpView from '../SignUpView/SignUpView';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

/**
 * Отображение правого модального окна
 * @category ModalRight
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для правого модального окна
 */
class ModalView extends IView {
    private readonly modalBody: HTMLElement;
    public currentView: SignInView | SignUpView | null;

    private readonly closeButtonModal: HTMLElement;
    private readonly closeButtonModalBody: HTMLElement;

    public constructor(parent: HTMLElement) {
        super(parent, ModalRightTemplate({}));

        this.closeButtonModal = <HTMLElement>this.element.querySelector('.ts-modal__close-btn');
        this.modalBody = <HTMLElement>this.element.querySelector('.ts-modal-body__container');
        this.closeButtonModalBody = <HTMLElement>(
            this.element.querySelector('.ts-modal-content__close-btn')
        );

        new ModalRightData.closeButton.componentType(
            this.closeButtonModal,
            ModalRightData.closeButton.componentData
        ).show();
        new ModalRightData.closeButton.componentType(
            this.closeButtonModalBody,
            ModalRightData.closeButton.componentData
        ).show();

        EventDispatcher.subscribe('modal-change-title', (title: string) => {
            this.changeTitle(title);
        });

        this.currentView = null;
    }

    public setSignInView(): void {
        this.currentView = new SignInView(this.modalBody);
    }

    public setSignUpView(): void {
        this.currentView = new SignUpView(this.modalBody);
    }

    public show(): void {
        this.parent.classList.add('modal_open');
        super.show();
    }

    public hide(): void {
        this.parent.classList.remove('modal_open');

        setTimeout(() => {
            this.currentView = null;
            super.hide();
        }, 200);
    }

    public changeTitle(title: string): void {
        const titleContainer = <HTMLElement>this.element.querySelector('.ts-modal-header__text');
        titleContainer.textContent = title;
    }

    /**
     * Функция добавления обработчика события нажатия на
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public bindCloseButtonModalEvent(listener: any): void {
        this.closeButtonModal.addEventListener('click', listener);
    }

    public bindCloseButtonModalBodyEvent(listener: any): void {
        this.closeButtonModalBody.addEventListener('click', listener);
    }
}

export default ModalView;
