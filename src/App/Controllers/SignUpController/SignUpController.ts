import IController from '../IController/IController';

import type SignUpView from '../../Views/SignUpView/SignUpView';

import type IUserSignUp from '../../Interfaces/User/IUserSignUp';
import type UserModel from '../../Models/UserModel/UserModel';

import router from '../../Router/Router';
import paths from '../../Router/RouterPaths';

/**
 * Котроллер для
 * @category SignUp
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 * @param  {UserModel} model Объект модели пользователя
 */
class SignUpController extends IController<SignUpView, UserModel> {
    constructor(view: SignUpView, model: UserModel) {
        super(view, model);

        this.view.form.bindSubmitEvent(this.onSubmit.bind(this));
        this.view.form.bindLinksEvent(this.onRedirect.bind(this));
    };

    private onInput(e: Event): void {
        e.preventDefault();

        if (this.isMounted) {
            const isValid = this.view.form.validateWithEmpty();
            if (!isValid) {
                this.view.form.submitButton.block();
            } else {
                this.view.form.submitButton.unblock();
            }
        }
    };

    private onSubmit(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            this.view.form.bindInputsEvent(this.onInput.bind(this));

            const button = <HTMLElement>(<HTMLElement>e.target).closest('.signUp-button');
            if (button.classList.contains('button--disabled')) { // TODO: check if disabled
                return;
            }

            if (!this.view.form.validateWithEmpty()) { // TODO: check if valid, but if valid always disabled. Useless check?
                return;
            }

            const userSignUp: IUserSignUp = {
                email: this.view.form.findInputComponent('email').input.value,
                password: this.view.form.findInputComponent('password').input.value,
                date_birth: '2000-Jan-01',
            };

            this.model.signUpUser(userSignUp).then(() => {
                router.goToPath(paths.main);
            }).catch((errorMsg) => {
                this.view.form.findInputComponent('repeat-password').showErrorMsg(errorMsg);
            });
        }
    };

    private onRedirect(e: Event): void {
        e.stopPropagation();
        e.preventDefault();
        if (this.isMounted) {
            const target = <HTMLElement>e.target;
            const href = (<HTMLElement>target.closest('[href]')).getAttribute('href') || '';

            this.saveFormDataToStorage();
            router.goToPath(href);
        }
    };

    public saveFormDataToStorage(): void {
        this.view.form.saveDataToStorage('SignUpData');
    };

    public getFormDataFromStorage(): void {
        this.view.form.getDataFromStorage('SignUpData');
    };
}

export default SignUpController;
