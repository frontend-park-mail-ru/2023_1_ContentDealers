import IController from '../IController/IController';

import type MainView from '../../Views/MainView/MainView';

import CarouselController from '../CarouselController/CarouselController';

import type SelectionModel from '../../Models/SelectionModel/SelectionModel';
import GenreModel from '../../Models/GenreModel/GenreModel';

import router from '../../Router/Router';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';
import CardsModel from '../../Models/CardsModel/CardsModel';

class MainController extends IController<
    MainView,
    { genres: GenreModel; selections: SelectionModel, cards: CardsModel }
> {
    private carouselController: CarouselController;

    public constructor(view: MainView, model: { genres: GenreModel, selections: SelectionModel, cards: CardsModel }) {
        super(view, model);

        this.carouselController = new CarouselController(this.view.carouselView);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    }

    public async mountComponent(): Promise<void> {
        if (!this.isMounted) {
            this.carouselController.mountComponent();
            super.mountComponent();

            this.model.genres
                .getAllGenres()
                .then(data => {
                    this.view.fillGenres(data);
                })
                .catch(error => console.error(error));

            this.model.selections
                .getSelections()
                .then((selections) => {
                    this.view.clearSelections();
                    selections.forEach(({ href = '', title = '', contents}) => {
                        const cardsData = this.model.cards.contentsToCards(contents, 'card__h-radius');
                        cardsData.forEach((cardsData) => {
                            cardsData.onClick = (e: Event) => this.onLinkClick(e); // TODO
                        });

                        this.view.newSelection(href, title, cardsData);
                    });

                    this.view.bindClickEvent(this.handleClick.bind(this));

                })
                .catch(error => console.error(error));
        }

        return;
    }

    public unmountComponent(): void {
        this.carouselController.unmountComponent();
        super.unmountComponent();
    }

    private onLinkClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
        if (href !== undefined && href !== null) {
            router.goToPath(href);
        }
    }

    private handleClick(e: Event): void {

    }
}

export default MainController;
