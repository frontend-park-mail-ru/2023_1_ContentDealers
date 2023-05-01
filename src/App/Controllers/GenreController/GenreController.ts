import IController from '../IController/IController';

import GenreView from '../../Views/GenreView/GenreView';
import GenreModel from '../../Models/GenreModel/GenreModel';

import router from '../../Router/Router';
import IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

interface IId {
    id: number;
}

class GenreController extends IController<GenreView, GenreModel>{
    private content: IContentSearch[];
    private genreId: number | null;

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
                this.genreId = opts.id;

                this.model.getGenreContent(this.genreId)
                    .then((data) => {
                        this.content = data;
                        this.view.fillContent(this.content);
                        super.mountComponent();
                    })
                    .catch((error) => {
                        router.showUnknownPage();
                        return;
                    });
            }
        }
    };

    public unmountComponent() {
        if (this.isMounted) {
            super.unmountComponent();
            this.content = [];
            this.genreId = null;
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
