import IController from '../IController/IController';

import type IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import type IActorSearch from '../../Interfaces/ActorSearch/IActorSearch';

import FavoritesView from '../../Views/FavoritesView/FavoritesView';
import FavoritesModel from '../../Models/FavoritesModel/FavoritesModel';

import router from '../../Router/Router';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';
import paths from '../../Router/RouterPaths';

interface IId {
    forFavorites?:    boolean;
    forSearch?:       boolean;
    pattern?:         string;
}

class FavoritesController extends IController<FavoritesView, FavoritesModel> {
    private content: IContentSearch[];
    private actors: IActorSearch[];
    private forFavorites: boolean;

    public constructor(view: FavoritesView, model: FavoritesModel) {
        super(view, model);
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindChangeEvent(this.handleChange.bind(this));
    }

    public async getContent(order: string): Promise<void> {
        await this.model
            .getFavoritesContent(order)
            .then(data => {
                this.content = data;
            })
            .catch(error => console.error(error));
    }

    public async getSearch(pattern: string): Promise<void> {
        await this.model
            .getSearchResult(pattern)
            .then(data => {
                this.content = data.content;
                this.actors = data.actors;
            })
            .catch(error => console.error(error));
    }

    public async mountComponent(opts?: IId): Promise<void> {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.forFavorites) {
                this.forFavorites = true;
                await this.getContent('new');
                this.view.generateTemplate(this.forFavorites, '', this.content.length === 0);
                if (this.content.length !== 0) {
                    this.view.fillContent(this.content);
                }
                super.mountComponent();
            } else {
                this.forFavorites = false;
                if (opts?.pattern) {
                    this.view.generateTemplate(this.forFavorites, opts.pattern);
                    await this.getSearch(opts.pattern);
                    this.view.fillContent(this.content);
                    this.view.fillActors(this.actors);
                    super.mountComponent();
                }
            }
        }
    }

    public unRenderItems(): void {
        this.view.emptyContent();

        if (!this.forFavorites) {
            this.view.emptyActors();
        }
    }

    public unmountComponent(): void {
        if (this.isMounted) {
            super.unmountComponent();
            this.content = [];
            this.actors = [];
            this.unRenderItems();
        }
    }

    private handleClick(e: Event): void {
        e.preventDefault();

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            const action = (<HTMLElement>(<HTMLElement>e.target).closest('[data-action]'))?.dataset['action'];

            switch (action) {
                case 'goToMain': {
                    router.goToPath(paths.main);

                    break;
                }
            }
        }
    }

    private async handleChange(e: Event): Promise<void> {
        await this.getContent((e.target as HTMLSelectElement).value);
        this.unRenderItems();
        this.view.fillContent(this.content);
    }
}

export default FavoritesController;
