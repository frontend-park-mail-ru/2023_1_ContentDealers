import IView from '../IView/IView';

import type IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import type IActorSearch from '../../Interfaces/ActorSearch/IActorSearch';

import ContentSearchComponent from '../../Components/ContentSearchComponent/ContentSearchComponent';
import ActorSearchComponent from '../../Components/ActorSearchComponent/ActorSearchComponent';

import SearchTemplate from './SearchView.hbs';
import SearchViewData from './SearchViewConfig';
import './SearchView.css';

class SearchView extends IView {
    private readonly content: HTMLElement;
    private readonly actors: HTMLElement;
    private readonly title: HTMLElement;

    public constructor(parent: HTMLElement) {
        super(parent, SearchTemplate(SearchViewData));

        this.content = <HTMLElement>this.element.querySelector('.js-content__main');
        this.actors = <HTMLElement>this.element.querySelector('.js-actors__main');
        this.title = <HTMLElement>this.element.querySelector('.js-header__title');
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }

    public fillContent(data: IContentSearch[]): void {
        data.forEach(contentData => {
            new ContentSearchComponent(
                this.content,
                contentData,
                true,
                'picture_search-size'
            ).show();
        });
    }

    public fillActors(data: IActorSearch[]): void {
        data.forEach(actorData => {
            new ActorSearchComponent(this.actors, actorData, true).show();
        });
    }

    public emptyContent(): void {
        this.content.innerHTML = '';
    }

    public emptyActors(): void {
        this.actors.innerHTML = '';
    }

    public setTitle(title: string): void {
        this.title.innerHTML = title;
    }

    public setResultTitle(pattern: string): void {
        this.title.innerHTML = '';

        const a: HTMLAnchorElement = document.createElement('a');
        a.href = `/search/${pattern}`;
        a.innerHTML = 'Результаты поиска';
        a.classList.add('result__link');


        const img: HTMLImageElement = document.createElement('img');
        img.src = '/img/icons/chevron-right.svg';
        img.classList.add('right-arrow');

        this.title.append(a, img);
    }
}

export default SearchView;
