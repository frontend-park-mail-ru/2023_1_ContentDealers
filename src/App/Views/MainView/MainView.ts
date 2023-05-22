import IView from '../IView/IView';
import type IGenre from '../../Interfaces/Genre/IGenre';

import MainTemplate from './MainView.hbs';
import MainViewData from './MainViewConfig';
import './MainView.css';

import CarouselView from '../CarouselView/CarouselView';

import CarouselComponent from '../../Components/CarouselComponent/CarouselComponent';
import ArticleComponent from '../../Components/ArticleComponent/ArticleComponent';

import type ArticleComponentData from '../../Components/ArticleComponent/ArticleComponentData';
import type CardComponentData from '../../Components/CardComponent/CardComponentData';

class MainView extends IView {
    public carouselView: CarouselView;

    private selectionComponents: ArticleComponent[];

    private readonly article: HTMLElement; // TODO how to update content not render all page
    private readonly genres: HTMLElement;

    public constructor(parent: HTMLElement) {
        super(parent, MainTemplate({}));

        this.article = <HTMLElement>this.element.querySelector('.news');
        this.genres = <HTMLElement>this.element.querySelector('.genres');

        this.selectionComponents = [];

        this.carouselView = new CarouselView(this.article);
    }

    public fillGenres(genres: IGenre[]): void {
        this.genres.innerHTML = '';

        new CarouselComponent(this.genres, { genres: genres }).show();
    }

    public clearSelections(): void {
        this.selectionComponents.forEach(selectionComponent => {
            selectionComponent.hide();
        });
        this.selectionComponents = [];
    }

    public newSelection(href: string, title: string, cardsData: CardComponentData[]): void {
        const selectionComponent = new ArticleComponent(this.element, <ArticleComponentData>{
            className: MainViewData.selectionConfig.className,
            titleData: {
                href,
                title,
            },
            cardsData: cardsData,
        });
        selectionComponent.show();

        this.selectionComponents.push(selectionComponent);
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }
}

export default MainView;
