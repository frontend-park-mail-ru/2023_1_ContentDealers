import IController from '../IController/IController';

import type IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import type IActorSearch from '../../Interfaces/ActorSearch/IActorSearch';

import type SearchView from '../../Views/SearchView/SearchView';
import type SearchModel from '../../Models/SearchModel/SearchModel';

import router from '../../Router/Router';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class SearchController extends IController<SearchView, SearchModel> {
    private content: IContentSearch[];
    private actors: IActorSearch[];
    private lastQuery: string;

    public constructor(view: SearchView, model: SearchModel) {
        super(view, model);
        this.lastQuery = '';

        this.view.bindClickEvent(this.handleClick.bind(this));
    }

    public async getSearchResult(query: string): Promise<void> {
        await this.model
            .getSearchResult(query)
            .then(data => {
                this.content = data.content;
                this.actors = data.actors;
                this.lastQuery = query;
            })
            .catch(error => console.error(error));
    }

    public getContentLength(): number {
        return this.content.length;
    }

    public getActorsLength(): number {
        return this.actors.length;
    }

    public async mountComponent(): Promise<void> {
        if (!this.isMounted) {
            await this.getSearchResult(this.lastQuery);
            this.renderItems();
            super.mountComponent();
        }
    }

    public renderItems(): void {
        this.view.fillContent(this.content);
        this.view.fillActors(this.actors);
    }

    public unRenderItems(): void {
        this.view.emptyContent();
        this.view.emptyActors();
    }

    public unmountComponent(): void {
        if (this.isMounted) {
            super.unmountComponent();
            this.unRenderItems();
            this.content = [];
            this.actors = [];
        }
    }

    public setTitle(title: string): void {
        this.view.setTitle(title);
    }

    public setResultTitle(pattern: string): void {
        this.view.setResultTitle(pattern);
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                this.unmountComponent();
                EventDispatcher.emit('render-middle-list');
                document.body.classList.remove('overflow-hidden');
                router.goToPath(href);
            }
        }
    }
}

export default SearchController;
