import IController from '../IController/IController';

import type IGrid from '../../Interfaces/Grid/IGrid';

import GenreView from '../../Views/GenreView/GenreView';
import GenreModel from '../../Models/GenreModel/GenreModel';

import router from '../../Router/Router';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

interface IId {
    id: number;
    forGenre?: boolean;
    forSelections?: boolean;
}

class GenreController extends IController<GenreView, GenreModel> {
    private data: IGrid;
    private id: number | null;

    public constructor(view: GenreView, model: GenreModel) {
        super(view, model);
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    }

    public async mountComponent(opts?: IId): Promise<void> {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.id) {
                this.id = opts.id;

                if (opts.forGenre) {
                    await this.model
                        .getGenreContent(this.id)
                        .then(data => {
                            this.data = data;
                        })
                        .catch(error => console.error(error));
                } else {
                    await this.model
                        .getSelectionsContent(this.id)
                        .then(data => {
                            this.data = data;
                        })
                        .catch(error => console.error(error));
                }
                this.view.fillContent(this.data);
                super.mountComponent();
            }
        }

        return;
    }

    public unmountComponent(): void {
        if (this.isMounted) {
            super.unmountComponent();
            this.data.content = [];
            this.id = null;
            this.view.emptyContent();
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

export default GenreController;
