import IController from '../IController/IController';

import type SettingsView from '../../Views/SettingsView/SettingsView';

import type UserModel from '../../Models/UserModel/UserModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';
import { validateInput } from '../../Utils/Validators/Validator';
import PaymentModel from '../../Models/PaymentModel/PaymentModel';

/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends IController<SettingsView, { user: UserModel, payment: PaymentModel }> {
    public constructor(view: SettingsView, model: { user: UserModel, payment: PaymentModel }) {
        super(view, model);

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.form.bindFileClickEvent(this.onFileClick.bind(this));
        this.view.form.bindCheckboxClickEvent(this.onCheckboxClick.bind(this));

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    public mountComponent(): void {
        if (!this.isMounted) {
            const user = this.model.user.getCurrentUser();
            if (!user) {
                return;
            }

            this.view.show({ user: user });
            this.isMounted = true;
        }
    }

    private onFileClick(e: Event): void {
        e.stopPropagation();
    }

    private onCheckboxClick(e: Event): void {
        e.stopPropagation();
    }

    private validate(): boolean {
        const emailComponent = this.view.form.findInputComponent('email');
        const passwordComponent = this.view.form.findInputComponent('password');
        const repeatPasswordComponent = this.view.form.findInputComponent('repeat-password');

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

            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];
            switch (action) {
                case 'main': {
                    if (href) {
                        this.view.changeActiveLeftMenuItem(href);
                        this.view.showMain();
                    }
                    break;
                }

                case 'subscriptions': {
                    if (href) {
                        const user = this.model.user.getCurrentUser();
                        this.view.changeActiveLeftMenuItem(href);
                        if (user?.has_sub) {
                            this.view.showSubscriptions({
                                title: 'Подписка активна',
                                advantages: 'Вам открыт эксклюзивный доступ к новинкам в мире кино и сериалов ',
                                description: `Действительна до ${user.sub_expiration}`,
                            });
                            this.view.bindRepeatSubscriptionButton(() => {
                                this.model.payment.getPaymentLink()
                                    .then(data => {
                                        if (data.link) {
                                            window.open(data.link, '_self');
                                        }
                                    })
                                    .catch(error => console.error(error));
                            });
                        } else {
                            this.view.showSubscriptions();
                        }
                    }
                    break;
                }

                case 'logout': {
                    if (href) {
                        router.goToPath(href);
                        break;
                    }
                }
            }


            const button = target.closest('#save-submit-btn');
            if (button !== undefined && button !== null) {
                if (!this.validate()) {
                    return;
                }

                const userData: any = {
                    email: this.view.form.findInputComponent('email').input.value,
                    password: this.view.form.findInputComponent('password').input.value,
                };

                const fileInput = this.view.form.findInputComponent('avatar').input;
                const formData = new FormData();

                const file = fileInput.files?.[0];

                if (file) {
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        this.view.form
                            .findInputComponent('repeat-password')
                            .showErrorMsg('Нельзя удалить и поставить аватарку!');
                        return;
                    } else {
                        formData.append('avatar', file);
                        this.model.user
                            .avatarUpdate(formData)
                            .then(() => {
                                this.view.form.inputs.forEach(inputComponent => {
                                    inputComponent.hideErrorMsg();
                                });
                            })
                            .catch(({ msg }) =>
                                this.view.form.findInputComponent('avatar').showErrorMsg(msg)
                            );
                        return;
                    }
                } else {
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        this.model.user
                            .avatarDelete()
                            .then()
                            .catch(error => console.error(error));
                        return;
                    }
                }

                this.model.user
                    .updateUser(userData)
                    .then(() => {
                        this.view.form.inputs.forEach(inputComponent => {
                            inputComponent.hideErrorMsg();
                        });
                    })
                    .catch(({ msg }) =>
                        this.view.form.findInputComponent('email').showErrorMsg(msg)
                    );
                // this.model.avatarUpdate(formData);
            }

            return;
        }
    }
}

export default SettingsController;
