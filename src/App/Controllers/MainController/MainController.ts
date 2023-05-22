import IController from '../IController/IController';

import type MainView from "../../Views/MainView/MainView";
import EventDispatcher from "../../EventDispatcher/EventDispatcher";

import type SelectionModel from '../../Models/SelectionModel/SelectionModel';
import router from "../../Router/Router";
import CarouselController from "../CarouselController/CarouselController";

class MainController extends IController<MainView, { selections: SelectionModel }> {
    private carouselController: CarouselController;

    constructor(view: MainView, model: { selections: SelectionModel }) {
        super(view, model);

        this.carouselController = new CarouselController(this.view.carouselView);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public async mountComponent() {
        if (!this.isMounted) {
            this.carouselController.mountComponent();
            super.mountComponent();

            this.model.selections.getSelections()
                .then((data) => {
                    this.view.fillSelections(data);
                    this.view.bindClickEvent(this.handleClick.bind(this));
                })
                .catch((error) => {
                    router.showUnknownPage();
                    return;
                });
        }
    };

    public unmountComponent() {
        this.carouselController.unmountComponent();
        super.unmountComponent();
    }

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

export default MainController;
