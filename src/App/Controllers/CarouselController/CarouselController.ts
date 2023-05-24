import IController from '../IController/IController';
import IModel from '../../Models/IModel/IModel';

import type CarouselView from '../../Views/CarouselView/CarouselView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

class CarouselController extends IController<CarouselView, IModel> {
    private position: number;
    private movePosition: number;
    private readonly itemsCount: number;
    private canClick: boolean;

    public constructor(view: CarouselView) {
        super(view, IModel);

        this.position = 0;
        this.canClick = true;

        // consist of picture size and spacing between pictures 850 + 20

        setTimeout(() => {
            this.movePosition = this.view.getLiWidth() + 58;
        }, 1000);
        this.itemsCount = this.view.getItemsCount();

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindTransitionEvent(this.handleTransitionEnd.bind(this));
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            const target = <HTMLElement>e.target;
            const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];

            switch (action) {
                case 'left': {
                    if (this.canClick) {
                        this.position++;
                        this.view.setPosition(this.movePosition * this.position);
                        this.canClick = false;
                    }

                    break;
                }

                case 'right': {
                    if (this.canClick) {
                        this.position--;
                        this.view.setPosition(this.movePosition * this.position);
                        this.canClick = false;
                    }

                    break;
                }
            }

            return;
        }
    }

    private handleTransitionEnd(): void {
        const extremeImg: number = Math.ceil(this.itemsCount / 2);
        this.position = this.position === -extremeImg ? 1 : this.position;
        this.position = this.position === extremeImg ? -1 : this.position;

        this.view.jump(this.movePosition * this.position);
        this.canClick = true;
    }
}

export default CarouselController;
