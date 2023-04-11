import IController from '../IController/IController';

import SettingsView from '../../Views/SettingsView/SettingsView';

import UserModel from '../../Models/UserModel/UserModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from "../../Router/Router";
import {validateInput} from "../../Utils/Validators/Validator";

/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends IController<SettingsView, UserModel> {
    constructor(view: SettingsView, model: UserModel) {
        super(view, model);

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.form.bindFileClickEvent(this.onFileClick.bind(this));
        this.view.form.bindCheckboxClickEvent(this.onCheckboxClick.bind(this));

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    };

    public mountComponent(): void {
        if (!this.isMounted) {
            const user = this.model.getCurrentUser();
            console.log('Settings controller', user);
            if (!user) {
                return;
            }

            this.view.show({ user: user });
            this.isMounted = true;
        }
    };

    private onFileClick(e: Event): void {
        e.stopPropagation();
    };

    private onCheckboxClick(e: Event): void {
        e.stopPropagation();
        console.log('Click checkbox')
    };

    private validate(): boolean {
        const emailComponent = this.view.form.findInputComponent('email');
        const passwordComponent = this.view.form.findInputComponent('password');
        const repeatPasswordComponent = this.view.form.findInputComponent('repeat-password');

        // const email = emailComponent.input.value;
        const password = passwordComponent.input.value;
        const repeatPassword = repeatPasswordComponent.input.value;

        const validateEmail = validateInput(emailComponent.getData());
        if (!validateEmail.isValid) {
            emailComponent.showErrorMsg(validateEmail.errorMsg);
            return false;
        }

        if (password !== '') {
            if (password !== repeatPassword) {
                passwordComponent.showErrorMsg('');
                repeatPasswordComponent.showErrorMsg('Пароли не совпадают');
                return false;
            }

            const validatedPassword = validateInput(passwordComponent.getData());
            if (!validatedPassword.isValid) {
                passwordComponent.showErrorMsg('');
                repeatPasswordComponent.showErrorMsg(validatedPassword.errorMsg);
                return false;
            }

            passwordComponent.hideErrorMsg();
            repeatPasswordComponent.hideErrorMsg();
        }

        return true;
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            const target = <HTMLElement>e.target;

            const href = target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            const button = target.closest('#save-submit-btn');
            if (button !== undefined && button!== null) {
                console.log(this.view.form.inputs)

                console.log('validate')
                if (!this.validate()) {
                    console.log('return')
                    return;
                }

                const userData: any = {
                    email: this.view.form.findInputComponent('email').input.value,
                    date_birth: '2000-Jan-01',
                    password: this.view.form.findInputComponent('password').input.value,
                };

                const fileInput = this.view.form.findInputComponent('avatar').input;
                const formData = new FormData();

                const file = fileInput.files && fileInput.files[0];

                if (file) {
                    console.log('If file')
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 1')
                        this.view.form.findInputComponent('repeat-password').showErrorMsg('Нельзя удалить и поставить аватарку!')
                        return;
                    } else {
                        console.log('Not checked 1')
                        formData.append('avatar', file);
                        this.model.avatarUpdate(formData)
                            .then(() => {
                                this.view.form.inputs.forEach((inputComponent) => {
                                    inputComponent.hideErrorMsg();
                                });
                            })
                            .catch(({ msg }) => {
                                console.log(msg)
                                this.view.form.findInputComponent('avatar').showErrorMsg(msg);
                            });
                        return;
                    }
                } else {
                    console.log('Not file')
                    console.log(this.view.form.findInputComponent('avatar-checkbox').input.checked)
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 2')
                        this.model.avatarDelete()
                            .then(() => {

                            })
                            .catch((errorMsg) => {

                            });
                        return;
                    }
                }

                console.log('userData', userData)
                console.log({ body: formData })


                this.model.updateUser(userData)
                    .then(() => {
                        this.view.form.inputs.forEach((inputComponent) => {
                           inputComponent.hideErrorMsg();
                        });
                    })
                    .catch(({ msg }) => {
                        console.log('errorMsg', msg)
                        this.view.form.findInputComponent('email').showErrorMsg(msg);
                    });
                // this.model.avatarUpdate(formData);
            }

            return;
        }
    };
}

export default SettingsController;
