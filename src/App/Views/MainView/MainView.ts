import IView from '../IView/IView';

import MainTemplate from './MainView.hbs';
import './MainView.css';

import ISelection from '../../Interfaces/Selection/ISelection';
import CarouselView from "../CarouselView/CarouselView";

class MainView extends IView {
    public carouselView: CarouselView;
    private readonly article: HTMLElement; // TODO how to update content not render all page

    constructor(parent: HTMLElement) {
        super(parent, MainTemplate({}));


        this.article = document.createElement('article');
        this.article.classList.add('news');

        this.carouselView = new CarouselView(this.article);
        this.carouselView.show();
    };

    public fillSelections(selections: ISelection[]): void {
        this.parent.innerHTML = MainTemplate({ selections: selections }); // TODO how to update content not render all page
        this.element = <HTMLElement>this.parent.querySelector('.categories');

        this.parent.prepend(this.article);
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default MainView;
