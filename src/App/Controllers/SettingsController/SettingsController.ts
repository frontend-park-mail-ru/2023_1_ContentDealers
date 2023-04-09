import IController from '../IController/IController';

import SettingsView from '../../Views/SettingsView/SettingsView';

import { UserModel } from '../../Models/UserModel/UserModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends IController<SettingsView, UserModel> {
    // private avatarUploadController : AvatarUploadController; // TODO

    constructor(view: SettingsView, model: UserModel) {
        super(view, model);

        // this.avatarUploadController = new AvatarUploadController(this.model); // TODO

        // this.view.bindClick(this.handleClick.bind(this));

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    };

    public mountComponent(): void {
        if (!this.isMounted) {
            const user = this.model.getCurrentUser();
            if (!user) {
                return;
            }

            this.view.show({ user: user });
            this.isMounted = true;
        }
    };
}

export default SettingsController;
