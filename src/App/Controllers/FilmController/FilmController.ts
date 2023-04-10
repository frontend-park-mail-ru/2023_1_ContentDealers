import IController from '../IController/IController';

import FilmView from '../../Views/FilmView/FilmView';
import { FilmModel } from '../../Models/FilmModel/FilmModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';
import router from "../../Router/Router";

interface IId {
    id: number;
}

class FilmController extends IController<FilmView, FilmModel> {
    private filmId: number | null;

    constructor(view: FilmView, model: FilmModel) {
        super(view, model);

        this.filmId = null;

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
            super.unmountComponent();

            this.filmId = null;
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
    }
}

export default FilmController;
