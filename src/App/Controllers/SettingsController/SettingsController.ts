import IController from '../IController/IController';

import type SettingsView from '../../Views/SettingsView/SettingsView';

import type UserModel from '../../Models/UserModel/UserModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';
import { validateInput } from '../../Utils/Validators/Validator';

import PaymentModel from '../../Models/PaymentModel/PaymentModel';

import type IUser from '../../Interfaces/User/IUser';
import InputComponent from '../../Components/InputComponent/InputComponent';

/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends IController<SettingsView, { user: UserModel, payment: PaymentModel }> {
    private isEmailForm: boolean;
    private readonly avatarInput: HTMLInputElement;

    public constructor(view: SettingsView, model: { user: UserModel, payment: PaymentModel }) {
        super(view, model);

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindClickEventOnAvatar(this.handleAvatarClick.bind(this));
        this.view.bindChangeEventOnAvatar(this.handleAvatarChange.bind(this));
        this.isEmailForm = true;

        this.avatarInput = this.view.getAvatarInput();

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        EventDispatcher.subscribe('user-changed', (user: IUser) => {
            if (user) {
                this.view.setImg(user.avatar);
            }
        });
    }

    public mountComponent(): void {
        if (!this.isMounted) {
            const user = this.model.user.getCurrentUser();
            if (!user) {
                return;
            }

            if (user.avatar === 'media/avatars/default_avatar.jpg') {
                this.view.hideDeleteAvatarButton();
            }

            this.view.show({ user: user });
            this.isMounted = true;
        }
    }

    private validateEmailChangeForm(emailInput: InputComponent, passwordInput: InputComponent): boolean {
        if (!this.view.changeEmailForm.validateEmptyFields([emailInput, passwordInput])) {
            return false;
        }

        const validateEmail = validateInput(emailInput.getData());
        if (!validateEmail.isValid) {
            emailInput.showErrorMsg(validateEmail.errorMsg);
            return false;
        }

        return true;
    }

    private async processEmailChangeForm(): Promise<void> {
        const emailComponent = this.view.changeEmailForm.findInputComponent('email');
        const passwordComponent = this.view.changeEmailForm.findInputComponent('password');

        if (!this.validateEmailChangeForm(emailComponent, passwordComponent)) {
            return;
        }

        const password = passwordComponent.input.value;
        const email = emailComponent.input.value;

        await this.model.user.validatePassword({'password': password})
            .then(() => {
                this.model.user.updateUser({'email': email})
                    .then(() => {
                        EventDispatcher.emit('show-alert', 'Почта успешно обновлена');
                    })
                    .catch(({ msg }) =>
                        this.view.changeEmailForm.findInputComponent('email').showErrorMsg(msg)
                    );
            })
            .catch(() => passwordComponent.showErrorMsg('Введеный пароль неверный'));
    }

    private validatePasswordChangeForm(passwordInput: InputComponent, newPasswordInput: InputComponent,
                                             repeatedPasswordInput: InputComponent): boolean {
        if (!this.view.changeEmailForm.validateEmptyFields([passwordInput, newPasswordInput,
            repeatedPasswordInput])) {
            return false;
        }

        if (newPasswordInput.input.value !== repeatedPasswordInput.input.value) {
            newPasswordInput.showErrorMsg('');
            repeatedPasswordInput.showErrorMsg('Пароли не совпадают');
            return false;
        }

        const validatedPassword = validateInput(newPasswordInput.getData());
        if (!validatedPassword.isValid) {
            newPasswordInput.showErrorMsg(validatedPassword.errorMsg);
            return false;
        }

        return true;
    }

    private async processPasswordChangeForm(): Promise<void> {
        const passwordComponent = this.view.changePasswordForm.findInputComponent('password');
        const newPasswordComponent = this.view.changePasswordForm.findInputComponent('new-password');
        const repeatedPasswordComponent = this.view.changePasswordForm.findInputComponent('repeat-password');

        if (!this.validatePasswordChangeForm(passwordComponent, newPasswordComponent, repeatedPasswordComponent)) {
            return;
        }

        const password = passwordComponent.input.value;
        const newPassword = newPasswordComponent.input.value;

        await this.model.user.validatePassword({'password': password})
            .then(() => {
                this.model.user.updateUser({'password': newPassword})
                    .then(() => {
                        EventDispatcher.emit('show-alert', 'Пароль успешно обновлен');
                    })
                    .catch(({ msg }) =>
                        this.view.changePasswordForm.findInputComponent('new-password').showErrorMsg(msg)
                    );
            })
            .catch(() => passwordComponent.showErrorMsg('Введеный пароль неверный'));
    }

    private handleAvatarClick(e: Event): void {
        e.stopPropagation();

        this.avatarInput.click();
    }

    private async handleAvatarChange(e: Event): Promise<void> {
        const formData = new FormData();

        const file = this.avatarInput.files?.[0];

        if (file) {
            if (file.size > 10000000) {
                this.view.showAvatarError('Размер файла слишком большой');
                return
            }

            formData.append('avatar', file);

            await this.model.user
                .avatarUpdate(formData)
                .then(() => {
                    this.view.showDeleteAvatarButton();
                    this.view.showAvatarError('');
                })
                .catch((msg) => this.view.showAvatarError(msg));
        }
    }

    private handleClick(e: Event): void {
        if (e.target !== this.avatarInput) {
            e.preventDefault();
        }
        if (this.isMounted) {
            const target = <HTMLElement>e.target;

            const href = target.closest('[href]')?.getAttribute('href');

            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];
            switch (action) {
                case 'main': {
                    if (href) {
                        this.view.changeActiveLeftMenuItem(href);
                        this.view.showMain(this.isEmailForm);
                    }
                    break;
                }

                case 'subscriptions': {
                    if (href) {
                        const user = this.model.user.getCurrentUser();
                        this.view.changeActiveLeftMenuItem(href);
                        if (user?.has_sub) {
                            this.view.showSubscriptions(this.isEmailForm, {
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
                            this.view.showSubscriptions(this.isEmailForm);
                        }
                    }
                    break;
                }

                case 'logout': {
                    if (href) {
                        router.goToPath(href);
                    }

                    break;
                }

                case 'changeEmail': {
                    if (href) {
                        if (!this.isEmailForm) {
                            this.isEmailForm = true;
                            this.view.changeForm(this.isEmailForm);
                            this.view.changeActiveMiddleMenuItem(href);
                        }
                    }

                    break;
                }

                case  'changePassword': {
                    if (href) {
                        if (this.isEmailForm) {
                            this.isEmailForm = false;
                            this.view.changeForm(this.isEmailForm);
                            this.view.changeActiveMiddleMenuItem(href);
                        }
                    }

                    break;
                }

                case 'deleteAvatar': {
                    this.model.user
                        .avatarDelete()
                        .then(() => {
                            this.view.getAvatarInput().value = '';
                            this.view.hideDeleteAvatarButton();
                            EventDispatcher.emit('show-alert', 'Аватарка успешно удалена');
                        })
                        .catch(error => console.error(error));

                    break;
                }
            }

            const button = target.closest('#save-submit-btn');
            if (button !== undefined && button !== null) {
                this.isEmailForm ? this.processEmailChangeForm() : this.processPasswordChangeForm();
            }
        }
    }
}

export default SettingsController;
