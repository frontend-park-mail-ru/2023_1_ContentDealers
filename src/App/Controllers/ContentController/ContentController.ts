import IController from '../IController/IController';

import type { ContentType } from '../../Interfaces/Content/IContent';
import type ContentView from '../../Views/ContentView/ContentView';

import type UserModel from '../../Models/UserModel/UserModel';
import type ContentModel from '../../Models/ContentModel/ContentModel';
import type CardsModel from '../../Models/CardsModel/CardsModel';
import type PlayerModel from '../../Models/PlayerModel/PlayerModel';
import type PaymentModel from '../../Models/PaymentModel/PaymentModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';
import paths from '../../Router/RouterPaths';

import type IFavoritesAddDelete from '../../Interfaces/FavoritesAddDelete/IFavoritesAddDelete';
import type IUser from '../../Interfaces/User/IUser';

interface IId {
    id: number;
    type: ContentType;
}

class ContentController extends IController<
    ContentView,
    { user: UserModel, content: ContentModel; cards: CardsModel, player: PlayerModel, payment: PaymentModel }
> {
    public constructor(view: ContentView, model: {
        user: UserModel,
        content: ContentModel,
        cards: CardsModel,
        player: PlayerModel,
        payment: PaymentModel
    }) {
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
                    const sources = this.model.content.getSources(1);
                    const isFree = this.model.content.isFree();
                    console.log('isFree', isFree)

                    const cardsData = this.model.cards.seasonsToCards(
                        this.model.content.getSeason(1),
                        'card__v-radius'
                    );
                    cardsData.forEach((cardData, index) => {
                        cardData.onClick = (e: Event): void => {
                            e.preventDefault();
                            e.stopPropagation();

                            if (isFree) {
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
                            } else {

                                this.model.user.authUserByCookie()
                                    .then(() => {
                                        this.model.payment.getPaymentLink()
                                            .then(data => {
                                                if (data.link) {
                                                    window.open(data.link, '_self');
                                                }
                                            })
                                            .catch(error => console.error(error));
                                    })
                                    .catch(() => {
                                        router.goToPath(paths.signIn);
                                    });
                            }
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

    public async addAbout(): Promise<void> {
        this.view.renderAbout();
        await this.bindRatingClick();
        this.view.aboutComponent.bindDeleteRatingButtonClick(this.onDeleteRatingClick.bind(this));

        const rating = await this.model.content.hasRating(this.model.content.getId());
        if (rating) {
            this.view.aboutComponent.changeActiveStar(rating - 1);
        }
    }

    private async bindRatingClick() {
        this.view.aboutComponent.stars.forEach((star, index) => {
            star.addEventListener('click', async (e: Event) => {
                e.preventDefault();
                e.stopPropagation();

                const id = this.model.content.getId();
                const rating = this.model.content.getMyRating();

                let status: number;
                if (rating) {
                    await this.model.content.deleteRating({ content_id: id });
                    status = await this.model.content.addRating({ content_id: id, rating: index + 1 });
                } else {
                    status = await this.model.content.addRating({ content_id: id, rating: index + 1 });
                }

                if (status === 200) {
                    this.view.aboutComponent.changeActiveStar(index);
                }
            });
        });
    }

    private async onDeleteRatingClick(e: Event) {
        e.preventDefault();
        e.stopPropagation();

        if (this.isMounted) {
            await this.model.content.deleteRating({ content_id: this.model.content.getId() });
        }
    }

    public addWatchButton(user: IUser | null): void {
        if (this.isMounted) {
            if (!this.model.content.isSeries()) {
                if (!user || (user && !user.has_sub)) {
                    if (this.model.content.isFree()) {
                        this.view.renderWatchButton();
                        this.view.bindWatchButtonClick(this.onWatchButtonClick.bind(this));
                    } else {
                        this.view.renderPayButton(!user);
                        this.view.bindWatchButtonClick(this.onSubscribeButtonClick.bind(this));
                    }
                } else {
                    this.view.renderWatchButton();
                    this.view.bindWatchButtonClick(this.onWatchButtonClick.bind(this));
                }
            }
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

    public onSubscribeButtonClick(e: Event): void {
        this.model.payment.getPaymentLink()
            .then(data => {
                if (data.link) {
                    window.open(data.link, '_self');
                }
            })
            .catch(error => console.error(error));
    }

    public startPlayer(id: number, isFilm: boolean, stopView: number, src: string, extraTitle?: string): void {
        if (this.isMounted) {
            let title = this.model.content.getTitle();
            if (extraTitle) {
                title += `\n ${extraTitle}`; // TODO: how to add \n? \n not helps, &nbsp; too
            }

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
            const viewHas = await this.model.content.getViewHas();
            this.startPlayer(this.model.content.getId(), true, viewHas.view.stopView, this.model.content.getWatchUrl());
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
                const isFree = this.model.content.isFree();

                cardsData.forEach(cardData => {
                    cardData.onClick = (e: Event): void => {
                        e.preventDefault();
                        e.stopPropagation();

                        if (isFree) {
                            this.startPlayer(this.model.content.getId(), false, 0, cardData.action, `${id} сезон ${cardData.footer?.title}`);
                        }
                    };
                });

                this.view.seriesComponent.createCarousel(cardsData);
                this.view.seriesComponent.changeActiveItem(id);
            }
        }
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }
        }
    }
}

export default ContentController;
