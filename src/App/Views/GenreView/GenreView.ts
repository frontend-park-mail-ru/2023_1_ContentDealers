import IView from '../IView/IView';

import ContentSearchComponent from '../../Components/ContentSearchComponent/ContentSearchComponent';

import GenreTemplate from './GenreView.hbs';

import './GenreView.css';

import type IGrid from '../../Interfaces/Grid/IGrid';

class GenreView extends IView {
    private content: HTMLElement;
    private contentButton: HTMLElement;

    public constructor(parent: HTMLElement) {
        super(parent, GenreTemplate({}));
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }

    public fillContent(data: IGrid): void {
        this.element.innerHTML = GenreTemplate({
            firstTitle: data.title,
        });

        this.content = <HTMLElement>this.element.querySelector('.js-content__item');
        this.contentButton = <HTMLElement>this.element.querySelector('.js-content-button');

        data.content?.forEach(contentData => {
            new ContentSearchComponent(this.content, contentData, false, 'picture_size').show();
        });
    }

    public emptyContent(): void {
        this.content.innerHTML = '';
    }
}

export default GenreView;
