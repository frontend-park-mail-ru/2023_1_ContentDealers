import IController from '../IController/IController';
import IModel from "../../Models/IModel/IModel";

import MainView from "../../Views/MainView/MainView";
import EventDispatcher from "../../EventDispatcher/EventDispatcher";

import SelectionModel from '../../Models/SelectionModel/SelectionModel';
import router from "../../Router/Router";

class MainController extends IController<MainView, { selections: SelectionModel }> {
    constructor(view: MainView, model: { selections: SelectionModel }) {
        super(view, model);

        // this.view.bindClickEvent(this.handleClick.bind(this));

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    };

    public async mountComponent() {
        if (!this.isMounted) {
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
