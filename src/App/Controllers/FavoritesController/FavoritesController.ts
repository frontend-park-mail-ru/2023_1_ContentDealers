import IController from "../IController/IController";

import FavoritesView from "../../Views/FavoritesView/FavoritesView";
import FavoritesModel from "../../Models/FavoritesModel/FavoritesModel";

import router from "../../Router/Router";
import IContentSearch from "../../Interfaces/ContentSearch/IContentSearch";
import IActorSearch from "../../Interfaces/ActorSearch/IActorSearch";
import EventDispatcher from "../../EventDispatcher/EventDispatcher";

class FavoritesController extends IController<FavoritesView, FavoritesModel>{
    private content: IContentSearch[];
    private actors: IActorSearch[];

    constructor(view: FavoritesView, model: FavoritesModel) {
        super(view, model);
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public async getSearchResult() {
        await this.model.getSearchResult('')
            .then((data) => {
                this.content = data.content;
                this.actors = data.actors;
            })
            .catch((error) => {
            });
    };

    public async mountComponent() {
        if (!this.isMounted) {
            await this.getSearchResult();
            this.renderItems();
            super.mountComponent();
        }
    };

    public renderItems(): void {
        this.view.fillContent(this.content);
        this.view.fillActors(this.actors);
    };

    public unRenderItems(): void {
        this.view.emptyContent();
        this.view.emptyActors();
    };

    public unmountComponent() {
        if (this.isMounted) {
            super.unmountComponent();
            this.content = [];
            this.actors = [];
            this.unRenderItems();
        }
    };

    private handleClick(e: Event): void {
        e.preventDefault();

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                // this.unmountComponent();
                router.goToPath(href);
            }
        }

        const target = <HTMLElement>e.target;
        const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];

        switch (action) {
            case 'loadContent': {
                console.log('LOAD CONTENT');
                this.view.fillContent(this.content);
                break;
            }

            case 'loadActors': {
                console.log('LOAD ACTORS');
                this.view.fillActors(this.actors);
                break;
            }
        }
    };
}

export default FavoritesController;
