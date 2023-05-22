import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type NotFoundView from '../../Views/NotFoundView/NotFoundView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';
import paths from '../../Router/RouterPaths';

class NotFoundController extends IController<NotFoundView, IModel> {
    public constructor(view: NotFoundView) {
        super(view, IModel);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindHomeButtonClick(this.handleClick.bind(this));
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            router.goToPath(paths.main);

            return;
        }
    }
}

export default NotFoundController;
