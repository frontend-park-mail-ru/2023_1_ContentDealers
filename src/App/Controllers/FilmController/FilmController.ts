import IController from '../IController/IController';

import FilmView from '../../Views/FilmView/FilmView';
import FilmModel from '../../Models/FilmModel/FilmModel';

import PlayerController from '../../Controllers/PlayerController/PlayerController';
import PlayerView from '../../Views/PlayerView/PlayerView';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from "../../Router/Router";
import SignUpController from "../SignUpController/SignUpController";
import SignUpView from "../../Views/SignUpView/SignUpView";

interface IId {
    id: number;
}

class FilmController extends IController<FilmView, FilmModel> {
    private filmId: number | null;
    private trailerSrc: string | null;
    private playerController: PlayerController;

    constructor(view: FilmView, model: FilmModel) {
        super(view, model);

        this.filmId = null;
        this.trailerSrc = null;

        EventDispatcher.subscribe('new-player', () => {
            this.view.playerView?.hide();

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
            super.mountComponent();

            if (opts?.id) {
                this.filmId = opts.id;

                this.model.getFilm(this.filmId)
                    .then((data) => {
                        console.log('data', data)
                        this.trailerSrc = data.content?.trailerURL || null;
                        console.log(this.trailerSrc)

                        this.view.fillFilm(data);
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
                    console.log('Clicked!');
                    console.log(this.trailerSrc)
                    if (this.trailerSrc) {
                        this.playerController.setSrc(this.trailerSrc);
                    }
                    this.playerController.mountComponent();

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
