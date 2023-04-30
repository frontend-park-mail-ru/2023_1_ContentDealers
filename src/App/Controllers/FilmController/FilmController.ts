import IController from '../IController/IController';

import FilmView from '../../Views/FilmView/FilmView';
import FilmModel from '../../Models/FilmModel/FilmModel';

import PlayerController from '../../Controllers/PlayerController/PlayerController';
import PlayerView from '../../Views/PlayerView/PlayerView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';
import IFavoritesAddDelete from "../../Interfaces/IFavoritesAddDelete/IFavoritesAddDelete";

interface IId {
    id: number;
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

        EventDispatcher.subscribe('new-player', () => {
            this.view?.playerView?.hide();

            this.view.newPlayerView();
            this.playerController = new PlayerController(<PlayerView>this.view.playerView);
        });

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public async mountComponent(opts?: IId) {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.id) {
                this.filmId = opts.id;

                this.model.getFilm(this.filmId)
                    .then((data) => {
                        this.trailerSrc = data.content?.trailerURL || null;
                        this.filmSrc = data.contentURL || null;

                        this.model.getFavoritesStatus(String(this.filmId))
                            .then((status) => {
                                this.view.fillFilm(data, status);
                                super.mountComponent();
                            })
                            .catch((error) => {
                            });
                    })
                    .catch((error) => {
                        router.showUnknownPage();
                        return;
                    });
            }
        }
    };

    public unmountComponent(): void {
        if (this.isMounted) {
            this.playerController.unmountComponent();
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
                        this.playerController.mountComponent();
                        this.playerController.setSrc(this.trailerSrc);
                    }

                    break;
                }

                case 'film': {
                    if (this.filmSrc) {
                        this.playerController.mountComponent();
                        this.playerController.setSrc(this.filmSrc);
                    }

                    break;
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

                    break;
                }
                default:
                    break;
            }

            return;
        }
    };
}

export default FilmController;
