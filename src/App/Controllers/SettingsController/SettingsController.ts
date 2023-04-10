import IController from '../IController/IController';

import SettingsView from '../../Views/SettingsView/SettingsView';

import {IUser, UserModel} from '../../Models/UserModel/UserModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';
import router from "../../Router/Router";

/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends IController<SettingsView, UserModel> {
    // private isChecked: boolean;

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
        // this.isChecked = !this.isChecked;
        e.stopPropagation();
        console.log('Click checkbox')
    };

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

                if (!this.view.form.validateWithEmpty()) {
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

                // if (file) {
                //     formData.append('avatar', file);
                // }

                // if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                //     this.model.avatarDelete();
                //     return;
                // }

                if (file) {
                    console.log('If file')
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 1')
                        this.view.form.findInputComponent('repeat-password').showErrorMsg('Нельзя удалить и поставить аватарку!')
                        return;
                    } else {
                        console.log('Not checked 1')
                        formData.append('avatar', file);
                        this.model.avatarUpdate(formData);
                        return;
                    }
                } else {
                    console.log('Not file')
                    console.log(this.view.form.findInputComponent('avatar-checkbox').input.checked)
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 2')
                        this.model.avatarDelete();
                        return;
                    }
                }

                console.log('userData', userData)
                console.log({ body: formData })


                this.model.updateUser(userData);
                // this.model.avatarUpdate(formData);
            }

            return;
        }
    };
}

export default SettingsController;
