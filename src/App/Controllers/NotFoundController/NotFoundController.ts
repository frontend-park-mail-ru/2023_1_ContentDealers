import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type NotFoundView from '../../Views/NotFoundView/NotFoundView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

class NotFoundController extends IController<NotFoundView, IModel> {
    constructor(view: NotFoundView) {
        super(view, IModel);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindHomeButtonClick(this.handleClick.bind(this));
    };

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            return;
        }
    };
}

export default NotFoundController;
