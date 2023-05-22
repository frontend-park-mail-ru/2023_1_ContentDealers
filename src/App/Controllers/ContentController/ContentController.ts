import IController from '../IController/IController';

import type { ContentType } from '../../Interfaces/Content/IContent';
import type ContentView from '../../Views/ContentView/ContentView';
import type ContentModel from '../../Models/ContentModel/ContentModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

import type IFavoritesAddDelete from '../../Interfaces/FavoritesAddDelete/IFavoritesAddDelete';
import CardsModel from '../../Models/CardsModel/CardsModel';
import PlayerModel from '../../Models/PlayerModel/PlayerModel';

interface IId {
    id: number;
    type: ContentType;
}

class ContentController extends IController<
    ContentView,
    { content: ContentModel; cards: CardsModel, player: PlayerModel }
> {
    public constructor(view: ContentView, model: { content: ContentModel; cards: CardsModel, player: PlayerModel }) {
        super(view, model);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    public async mountComponent(opts?: IId): Promise<void> {
        if (!opts) {
            router.showUnknownPage();
            return;
        }

        if (!this.isMounted) {
            try {
                const data = await this.model.content.getContent(opts.id, opts.type);
                this.view.fillContent(data.content);

                if (this.model.content.isSeries()) {
                    this.view.fillSeries(this.model.content.getSeriesData());

                    // TODO: how improve?
                    const cardsData = this.model.cards.seasonsToCards(
                        this.model.content.getSeason(1),
                        'card__v-radius'
                    );
                    cardsData.forEach((cardData, index) => {
                        cardData.onClick = (e: Event): void => {
                            e.preventDefault();
                            e.stopPropagation();

                            console.log('Hello')
                            const sources = this.model.content.getSources(1);

                            EventDispatcher.emit('start-player', {
                                id: this.model.content.getId(),
                                title: this.model.content.getTitle(),
                                src: sources[index],
                                seasonData: {
                                    sources: sources,
                                    index: index,
                                    seasonNum: 1,
                                    episodeNum: index + 1
                                }
                            });
                        };
                    });

                    this.view.seriesComponent.createCarousel(cardsData);
                    this.view.seriesComponent.bindHeaderClick(this.onSeriesHeaderClick.bind(this));
                }

                super.mountComponent();

                this.view.bindClickEvent(this.handleClick.bind(this));
                this.view.bindTrailerButtonClick(this.onTrailerButtonClick.bind(this));
            } catch (error) {
                console.log(error);
                router.showUnknownPage();
            }
        }

        return;
    }

    public addWatchButton(): void {
        if (this.isMounted) {
            this.view.renderWatchButton(this.model.content.isFree());
            this.view.bindWatchButtonClick(this.onWatchButtonClick.bind(this));
        }
    }

    public async addFavoritesButton(): Promise<void> {
        if (this.isMounted) {
            try {
                const has = await this.model.content.getFavoritesStatus(
                    String(this.model.content.getId())
                );
                this.view.renderFavoritesButton(has);
                this.view.bindFavoriteClick(this.onFavoriteClick.bind(this));
            } catch (error) {
                console.log(error);
            }
        }
    }

    public startPlayer(id: number, isFilm: boolean, stopView: number, src: string, extraTitle?: string): void {
        if (this.isMounted) {
            let title = this.model.content.getTitle();
            if (extraTitle) {
                title += `\n ${extraTitle}`; // TODO: how to add \n? \n not helps, &nbsp; too
            }

            console.log('startPlayer', stopView)
            EventDispatcher.emit('start-player', { id, isFilm, stopView, title, src });
        }
    }

    private onTrailerButtonClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            this.startPlayer(this.model.content.getId(), false, 0, this.model.content.getTrailerUrl());
        }
    }

    private async onWatchButtonClick(e: Event): Promise<void> {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            if (this.model.content.isFree()) {
                const viewHas = await this.model.content.getViewHas();
                console.log('viewHas', viewHas)

                this.startPlayer(this.model.content.getId(), true, viewHas.view.stopView, this.model.content.getWatchUrl());
            } else {
                console.log('Not free'); // TODO
            }
        }
    }

    private onFavoriteClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            const favoritesData: IFavoritesAddDelete = { content_id: this.model.content.getId() };
            const has = this.model.content.has();
            if (has) {
                this.model.content
                    .deleteFromFavorites(favoritesData)
                    .then(() => this.view.toggleBookmark(!has));
            } else {
                this.model.content
                    .addToFavorites(favoritesData)
                    .then(() => this.view.toggleBookmark(!has));
            }
        }
    }

    public onSeriesHeaderClick(e: Event): void {
        // TODO: mb series - view not component?
        e.preventDefault();
        e.stopPropagation();

        // TODO: so bad code (((
        const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
        if (href !== undefined && href !== null) {
            const regex = /(\d+)(?!.*\d)/;
            const matches = href.match(regex);

            if (matches && matches.length > 1) {
                const id = parseInt(matches[1]);

                const cardsData = this.model.cards.seasonsToCards(
                    this.model.content.getSeason(id),
                    'card__v-radius'
                );
                cardsData.forEach(cardData => {
                    cardData.onClick = (e: Event): void => {
                        e.preventDefault();
                        e.stopPropagation();

                        this.startPlayer(this.model.content.getId(), false, 0, cardData.action, `${id} сезон ${cardData.footer?.title}`);
                    };
                });

                this.view.seriesComponent.createCarousel(cardsData);
                this.view.seriesComponent.changeActiveItem(id);
            }
        }
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        console.log('handleClick');

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }
        }
    }
}

export default ContentController;
