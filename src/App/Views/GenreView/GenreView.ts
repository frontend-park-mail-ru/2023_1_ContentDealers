import IView from '../IView/IView';

import IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';

import ContentSearchComponent from '../../Components/ContentSearchComponent/ContentSearchComponent';

import GenreTemplate from './GenreView.hbs';
import GenreViewData from './GenreViewConfig';

import './GenreView.css';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

class GenreView extends IView {
    private readonly content:        HTMLElement;
    private readonly contentButton:  HTMLElement;

    constructor(parent: HTMLElement) {
        super(parent, GenreTemplate(GenreViewData));

        this.content = <HTMLElement>this.element.querySelector('.js-content__item');
        this.contentButton = <HTMLElement>this.element.querySelector('.js-content-button');

        // new ButtonComponent(this.contentButton, FavoritesViewData.contentButton).show();
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };

    // public bindChangeEvent(listener: any): void {
    //     this.element.addEventListener('change', listener.bind(this));
    // };

    public fillContent(data: IContentSearch[]): void {
        data.forEach(contentData => {
            new ContentSearchComponent(this.content, contentData, false, 'picture_size').show();
        });
    };

    public emptyContent(): void {
        this.content.innerHTML = '';
    };
}

export default GenreView;
