import IController from '../IController/IController';

import SignInView from '../../Views/SignInView/SignInView';

import IUserSignIn from '../../Interfaces/User/IUserSignIn';
import UserModel from '../../Models/UserModel/UserModel';

import router from '../../Router/Router';
import paths from '../../Router/RouterPaths';

/**
 * Котроллер для
 * @category SignIn
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 * @param  {UserModel} model Объект модели пользователя
 */
class SignInController extends IController<SignInView, UserModel> {
    constructor(view: SignInView, model: UserModel) {
        super(view, model);

        // this.view.form.bindInputsEvent(this.onInput.bind(this));
        this.view.form.bindSubmitEvent(this.onSubmit.bind(this));
        this.view.form.bindLinksEvent(this.onRedirect.bind(this));
    };

    private validateFormFields(): boolean {
        const emailField = this.view.form.findInputComponent('email');
        const passwordField = this.view.form.findInputComponent('password');

        if (!emailField || !passwordField) {
           throw Error('Fields dont exists');
        }

        return this.view.form.validateEmptyFields([emailField, passwordField]);
    };

    private onInput(e: Event): void {
        e.preventDefault();

        if (this.isMounted) {
            // if
            // TODO: check value, but how? Also I need to add this event after click on button and then remove
        }
    };

    private onSubmit(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            this.view.form.bindInputsEvent(this.onInput.bind(this));

            const button = <HTMLElement>(<HTMLElement>e.target).closest('.signIn-button');
            if (button.classList.contains('button--disabled')) { // TODO: check if disabled
                return;
            }

            if (!this.validateFormFields()) {
                return;
            }

            const userSignIn: IUserSignIn = {
                email: this.view.form.findInputComponent('email').input.value,
                password: this.view.form.findInputComponent('password').input.value,
            };

            this.model.signInUser(userSignIn).then(() => {
                router.goToPath(paths.main);
            }).catch((errorMsg) => {
                this.view.form.findInputComponent('email').showErrorMsg('');
                this.view.form.findInputComponent('password').showErrorMsg(errorMsg);
            });
        }
    };

    private onRedirect(e: Event): void {
        e.stopPropagation();
        e.preventDefault();
        if (this.isMounted) {
            const target = <HTMLElement>e.target;
            const href = (<HTMLElement>target.closest('[href]')).getAttribute('href') || '';

            router.goToPath(href);
        }
    };
}

export default SignInController;
