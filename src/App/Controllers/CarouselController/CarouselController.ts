import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type CarouselView from '../../Views/CarouselView/CarouselView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

class CarouselController extends IController<CarouselView, IModel> {
    constructor(view: CarouselView) {
        super(view, IModel);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
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

export default CarouselController;
