import IView from '../IView/IView';

import ContentSearchComponent from '../../Components/ContentSearchComponent/ContentSearchComponent';

import GenreTemplate from './GenreView.hbs';

import './GenreView.css';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import IGrid from '../../Interfaces/Grid/IGrid';

class GenreView extends IView {
    private content:        HTMLElement;
    private contentButton:  HTMLElement;

    constructor(parent: HTMLElement) {
        super(parent, GenreTemplate({}));
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };

    // public bindChangeEvent(listener: any): void {
    //     this.element.addEventListener('change', listener.bind(this));
    // };

    public fillContent(data: IGrid): void {
        this.element.innerHTML = GenreTemplate({
            firstTitle: data.title
        });

        this.content = <HTMLElement>this.element.querySelector('.js-content__item');
        this.contentButton = <HTMLElement>this.element.querySelector('.js-content-button');

        // new ButtonComponent(this.contentButton, FavoritesViewData.contentButton).show();

        data.content?.forEach(contentData => {
            new ContentSearchComponent(this.content, contentData, false, 'picture_size').show();
        });
    };

    public emptyContent(): void {
        this.content.innerHTML = '';
    };
}

export default GenreView;
