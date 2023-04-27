import IView from '../IView/IView';

import IContentSearch from "../../Interfaces/ContentSearch/IContentSearch";
import IActorSearch from "../../Interfaces/ActorSearch/IActorSearch";

import ContentSearchComponent from "../../Components/ContentSearchComponent/ContentSearchComponent";
import ActorSearchComponent from "../../Components/ActorSearchComponent/ActorSearchComponent";

import SearchTemplate from './SearchView.hbs';
import SearchViewData from './SearchViewConfig';
import './SearchView.css';
import {tsxRegex} from "ts-loader/dist/constants";

class SearchView extends IView {
    private readonly content: HTMLElement;
    private readonly actors: HTMLElement;

    constructor(parent: HTMLElement) {
        super(parent, SearchTemplate(SearchViewData));

        this.content = <HTMLElement>this.element.querySelector('.js-content__main');
        this.actors = <HTMLElement>this.element.querySelector('.js-actors__main');
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };

    public fillContent(data: IContentSearch[]): void {
        data.forEach(contentData => {
            new ContentSearchComponent(this.content, contentData, true).show();
        });
    };

    public fillActors(data: IActorSearch[]): void {
        data.forEach(actorData => {
            new ActorSearchComponent(this.actors, actorData, true).show();
        });
    };

    public emptyContent(): void {
        this.content.innerHTML = '';
    };

    public emptyActors(): void {
        this.actors.innerHTML = '';
    };
}

export default SearchView;
