import IController from '../IController/IController';

import ModalRightView from '../../Views/ModalRightView/ModalRightView';

import SignInController from '../../Controllers/SignInController/SignInController';
import SignInView from '../../Views/SignInView/SignInView';

import SignUpController from '../../Controllers/SignUpController/SignUpController';
import SignUpView from '../../Views/SignUpView/SignUpView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

import UserModel from '../../Models/UserModel/UserModel';

/**
 * Котроллер для правого модального окна
 * @category ModalRight
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента правого модального окна
 * @param  {UserModel} model Объект модели пользователя
 */
class ModalRightController extends IController<ModalRightView, UserModel> {
    private currentController: SignInController | SignUpController;

    constructor(view: ModalRightView, model: UserModel) {
        super(view, model);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        EventDispatcher.subscribe('modalRight-setSignIn', (userModel: UserModel) => {
            this.view.currentView?.hide();

            this.view.setSignInView();
            this.currentController = new SignInController(<SignInView>this.view.currentView, userModel);
        });

        EventDispatcher.subscribe('modalRight-setSignUp', (userModel: UserModel) => {
            this.view.currentView?.hide();

            this.view.setSignUpView();
            this.currentController = new SignUpController(<SignUpView>this.view.currentView, userModel);
        });

        this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public mountComponent() {
        this.currentController.getFormDataFromStorage();

        this.currentController?.mountComponent();
        super.mountComponent();
    };

    public unmountComponent() {
        this.currentController?.unmountComponent();
        super.unmountComponent();
    };

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            // TODO: check only if click not on modal right, it also click on close btn (not necessary check it?)
            const modalContent = (<HTMLElement>e.target).closest('.modal__content');
            if (!modalContent) {
                this.currentController.saveFormDataToStorage();

                this.unmountComponent();

                router.goToPath(router.getNearestNotAuthUrl());
            }
        }
    };
};

export default ModalRightController;