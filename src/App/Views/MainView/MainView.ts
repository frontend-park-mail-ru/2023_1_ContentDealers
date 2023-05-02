import IView from '../IView/IView';
import type IContent from '../../Interfaces/Content/IContent';
import type ISelection from '../../Interfaces/Selection/ISelection';

import MainTemplate from './MainView.hbs';
import './MainView.css';

import CarouselView from '../CarouselView/CarouselView';

import SeasonComponent from '../../Components/SeasonComponent/SeasonComponent';

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
        this.element.innerHTML = '';

        selections.forEach(({ title, content}) => {
            new SeasonComponent(this.element, { title: title, data: { contents: <IContent[]>content } }).show();
        });
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default MainView;
