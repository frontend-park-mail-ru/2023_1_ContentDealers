import IController from "../IController/IController";

import type IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import type IActorSearch from '../../Interfaces/ActorSearch/IActorSearch';

import type SearchView from "../../Views/SearchView/SearchView";
import type SearchModel from "../../Models/SearchModel/SearchModel";

import router from "../../Router/Router";

import EventDispatcher from "../../EventDispatcher/EventDispatcher";

class SearchController extends IController<SearchView, SearchModel> {
    private content: IContentSearch[];
    private actors: IActorSearch[];
    private lastQuery: string;

    constructor(view: SearchView, model: SearchModel) {
        super(view, model);
        this.lastQuery = '';

        this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public async getSearchResult(query: string) {
        await this.model.getSearchResult(query)
              .then((data) => {
                this.content = data.content;
                this.actors = data.actors;
                this.lastQuery = query;
              })
              .catch((error) => {
              });
    };

    public async mountComponent() {
        if (!this.isMounted) {
            await this.getSearchResult(this.lastQuery);
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
            this.unRenderItems();
            this.content = [];
            this.actors = [];
        }
    };

    public setTitle(title: string): void {
        this.view.setTitle(title);
    };

    private handleClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                this.unmountComponent();
                router.goToPath(href);
                EventDispatcher.emit('render-middle-list');
            }
        }
    };
}

export default SearchController;
