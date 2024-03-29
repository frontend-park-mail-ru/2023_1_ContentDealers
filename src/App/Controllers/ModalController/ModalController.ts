import IController from '../IController/IController';

import type ModalView from '../../Views/ModalView/ModalView';

import SignInController from '../../Controllers/SignInController/SignInController';
import type SignInView from '../../Views/SignInView/SignInView';

import SignUpController from '../../Controllers/SignUpController/SignUpController';
import type SignUpView from '../../Views/SignUpView/SignUpView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

import type UserModel from '../../Models/UserModel/UserModel';

/**
 * Котроллер для правого модального окна
 * @category ModalRight
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента правого модального окна
 * @param  {UserModel} model Объект модели пользователя
 */
class ModalController extends IController<ModalView, UserModel> {
    private currentController: SignInController | SignUpController;

    public constructor(view: ModalView, model: UserModel) {
        super(view, model);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        EventDispatcher.subscribe('modal-setSignIn', (userModel: UserModel) => {
            this.view.currentView?.hide();

            this.view.setSignInView();
            this.currentController = new SignInController(
                <SignInView>this.view.currentView,
                userModel
            );
        });

        EventDispatcher.subscribe('modal-setSignUp', (userModel: UserModel) => {
            this.view.currentView?.hide();

            this.view.setSignUpView();
            this.currentController = new SignUpController(
                <SignUpView>this.view.currentView,
                userModel
            );
        });

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindCloseButtonModalEvent(this.onCloseButtonClick.bind(this));
        this.view.bindCloseButtonModalBodyEvent(this.onCloseButtonClick.bind(this));
    }

    public mountComponent(): void {
        this.currentController.getFormDataFromStorage();

        this.currentController?.mountComponent();
        super.mountComponent();
    }

    public unmountComponent(): void {
        this.currentController?.unmountComponent();
        super.unmountComponent();
    }

    private closeModal(): void {
        this.currentController.saveFormDataToStorage();

        this.unmountComponent();

        router.goToPath(router.getNearestNotAuthUrl());
    }

    private onCloseButtonClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            this.closeModal();
        }
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            // TODO: check only if click not on modal right, it also click on close btn (not necessary check it?)
            const modalContent = (<HTMLElement>e.target).closest('.modal__content');
            if (!modalContent) {
                this.closeModal();
            }
        }
    }
}

export default ModalController;
