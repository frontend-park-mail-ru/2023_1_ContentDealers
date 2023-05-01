import IController from '../IController/IController';

import GenreView from '../../Views/GenreView/GenreView';
import GenreModel from '../../Models/GenreModel/GenreModel';

import router from '../../Router/Router';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';
import IGrid from '../../Interfaces/Grid/IGrid';

interface IId {
    id:               number,
    forGenre?:        boolean,
    forSelections?:   boolean,
}

class GenreController extends IController<GenreView, GenreModel>{
    private data:  IGrid;
    private id:    number | null;

    constructor(view: GenreView, model: GenreModel) {
        super(view, model);
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
        // this.view.bindChangeEvent(this.handleChange.bind(this));
    };

    public async mountComponent(opts?: IId) {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.id) {
                this.id = opts.id;

                if (opts.forGenre) {
                    await this.model.getGenreContent(this.id)
                        .then((data) => {
                            this.data = data;
                        })
                        .catch((error) => {
                            router.showUnknownPage();
                            return;
                        });
                } else {
                    await this.model.getSelectionsContent(this.id)
                        .then((data) => {
                            this.data = data;
                        })
                        .catch((error) => {
                            router.showUnknownPage();
                            return;
                        })
                }
                this.view.fillContent(this.data);
                super.mountComponent();
            }
        }
    };

    public unmountComponent() {
        if (this.isMounted) {
            super.unmountComponent();
            this.data.content = [];
            this.id = null;
            this.view.emptyContent();
        }
    };

    private handleClick(e: Event): void {
        e.preventDefault();

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }
        }

        // const target = <HTMLElement>e.target;
        // const action = (<HTMLElement>target.closest('[data-action]'))?.dataset['action'];
        //
        // switch (action) {
        //     case 'loadContent': {
        //         console.log('LOAD CONTENT');
        //         this.view.fillContent(this.content);
        //         break;
        //     }
        // }
    };

    // private async handleChange(e: Event) {
    //     await this.getContent((e.target as HTMLSelectElement).value);
    //     this.unRenderItems();
    //     this.view.fillContent(this.content);
    // };
}

export default GenreController;
