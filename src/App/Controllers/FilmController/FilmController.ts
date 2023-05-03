import IController from '../IController/IController';

import type FilmView from '../../Views/FilmView/FilmView';
import type FilmModel from '../../Models/FilmModel/FilmModel';

import PlayerController from '../../Controllers/PlayerController/PlayerController';
import type PlayerView from '../../Views/PlayerView/PlayerView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

import type IFavoritesAddDelete from '../../Interfaces/FavoritesAddDelete/IFavoritesAddDelete';

interface IId {
    id: number;
    type: string;
}

class FilmController extends IController<FilmView, FilmModel> {
    private filmId: number | null;
    private trailerSrc: string | null;
    private filmSrc: string | null;
    private playerController: PlayerController;

    constructor(view: FilmView, model: FilmModel) {
        super(view, model);

        this.filmId = null;
        this.trailerSrc = null;
        this.filmSrc = null;

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        // this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public async mountComponent(opts?: IId) {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.id) {
                this.filmId = opts.id;

                switch (opts.type) {
                    case 'film': {
                        await this.model.getFilm(this.filmId)
                            .then((data) => {
                                this.trailerSrc = data.content?.trailerURL || null;
                                this.filmSrc = data?.contentURL || null;

                                this.view.fillFilm(data);
                                super.mountComponent();

                                this.view.bindClickEvent(this.handleClick.bind(this));
                            })
                            .catch((error) => {
                                router.showUnknownPage();
                                return;
                            });
                        break;
                    }

                    case 'series': {
                        await this.model.getSeries(this.filmId)
                            .then((data) => {
                                this.trailerSrc = data.content?.trailerURL || null;

                                this.view.fillFilm(data);

                                this.view.fillSeasonItems({ count: this.model.getSeasonsCount(), data: { episodes: this.model.getEpisodes(1) } });

                                super.mountComponent();

                                this.view.bindClickEvent(this.handleClick.bind(this));
                            })
                            .catch((error) => {
                                router.showUnknownPage();
                                return;
                            });
                        break;
                    }

                    default: {
                        return;
                    }
                }

                // this.model.getFilm(this.filmId, opts.type)
                //     .then((data) => {
                //         if (data) {
                //             console.log('getFilm')
                //
                //             this.trailerSrc = data.content?.trailerURL || null;
                //             this.filmSrc = data?.contentURL || null;
                //
                //             this.view.fillFilm(data);
                //             super.mountComponent();
                //         }
                //     })
                //     .catch((error) => {
                //         router.showUnknownPage();
                //         return;
                //     });
            }
        }
    };

    public addFavoritesButton(): void {
        this.model.getFavoritesStatus(String(this.filmId))
            .then((status) => {
                this.view.renderFavoritesButton(status);
            })
            .catch((error) => {
            });
    };

    public unmountComponent(): void {
        if (this.isMounted) {
            super.unmountComponent();

            this.filmId = null;
            this.trailerSrc = null;
            this.filmSrc = null;
        }
    };

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
                case 'subscribe': {
                    break;
                }

                case 'trailer': {
                    if (this.trailerSrc) {
                        this.view.newPlayerView(this.model.getFilmTitle());
                        this.playerController = new PlayerController(<PlayerView>this.view.playerView);

                        this.playerController.mountComponent();
                        this.playerController.setSrc(this.trailerSrc);
                    }

                    return;
                }

                case 'film': {
                    if (this.filmSrc) {
                        this.view.newPlayerView(this.model.getFilmTitle());
                        this.playerController = new PlayerController(<PlayerView>this.view.playerView);

                        this.playerController.mountComponent();
                        this.playerController.setSrc(this.filmSrc);
                    }

                    return;
                }

                case 'addToFavorites': {
                    const addDeleteFavorites: IFavoritesAddDelete = {
                        content_id: Number(this.filmId),
                    };

                    if (this.view.isDelete()) {
                        this.model.deleteFromFavorites(addDeleteFavorites)
                            .then((status) =>{
                                this.view.toggleBookmark();
                                console.log('УСПЕШНО УДАЛЕНО');
                            });
                    } else {
                        this.model.addToFavorites(addDeleteFavorites)
                            .then((status) => {
                                this.view.toggleBookmark();
                                console.log('УСПЕШНО ДОБАВЛЕНО');
                            });
                    }

                    return;
                }
                default:
                    break;
            }

            const actionStr = (action as unknown as string);
            if (actionStr !== undefined) {
                if (actionStr.startsWith('trailers/') && actionStr.endsWith('.mp4')) {
                    this.filmSrc = actionStr;

                    this.view.newPlayerView(this.model.getFilmTitle());
                    this.playerController = new PlayerController(<PlayerView>this.view.playerView);

                    this.playerController.mountComponent();
                    this.playerController.setSrc(this.filmSrc);

                    return;
                }
            }

            const actionId = action as unknown as number;
            if (actionId) {
                this.view.seasonComponent.changeActiveItem(actionId);
                this.view.seasonComponent.renderCarousel({ episodes: this.model.getEpisodes(actionId) });
                return;
            }

            return;
        }
    };
}

export default FilmController;
