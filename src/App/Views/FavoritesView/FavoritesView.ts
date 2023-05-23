import IView from '../IView/IView';

import type IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import type IActorSearch from '../../Interfaces/ActorSearch/IActorSearch';

import ContentSearchComponent from '../../Components/ContentSearchComponent/ContentSearchComponent';
import ActorSearchComponent from '../../Components/ActorSearchComponent/ActorSearchComponent';

import FavoritesTemplate from './FavoritesView.hbs';
import FavoritesViewData from './FavoritesViewConfig';

import './FavoritesView.css';

class FavoritesView extends IView {
    private content: HTMLElement;
    private actors: HTMLElement;
    private contentButton: HTMLElement;
    private actorsButton: HTMLElement;
    private message: HTMLElement;

    public constructor(parent: HTMLElement) {
        super(parent, FavoritesTemplate({}));
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }

    public bindChangeEvent(listener: any): void {
        this.element.addEventListener('change', listener.bind(this));
    }

    public showMessage(isContentEmpty: boolean): void{
        if (isContentEmpty) {
            this.message.innerHTML = 'Oops! Пока что избранное пустое.' +
                ' Но никогда не знаешь, что может появиться в следующий раз!';
        } else {
            this.message.innerHTML = '';
        }
    }

    public generateTemplate(forFavorites: boolean, pattern?: string): void {
        if (forFavorites) {
            this.element.innerHTML = FavoritesTemplate(FavoritesViewData);
        } else {
            const dataForSearch = Object.assign({}, FavoritesViewData);
            dataForSearch.forFavorites = false;
            dataForSearch.firstTitle = `Результаты поиска по запросу "${pattern}"`;
            this.element.innerHTML = FavoritesTemplate(dataForSearch);
        }

        this.content = <HTMLElement>this.element.querySelector('.js-content__item');
        this.actors = <HTMLElement>this.element.querySelector('.js-grid__actors');
        this.contentButton = <HTMLElement>this.element.querySelector('.js-content-button');
        this.actorsButton = <HTMLElement>this.element.querySelector('.js-actors-button');
        this.message = <HTMLElement>this.element.querySelector('.js-content__message');

        // new ButtonComponent(this.contentButton, FavoritesViewData.contentButton).show();
        // new ButtonComponent(this.actorsButton, FavoritesViewData.actorsButton).show();
    }

    public fillContent(data: IContentSearch[]): void {
        data.forEach(contentData => {
            new ContentSearchComponent(this.content, contentData, false, 'picture_size').show();
        });
    }

    public fillActors(data: IActorSearch[]): void {
        data.forEach(actorData => {
            new ActorSearchComponent(this.actors, actorData, false).show();
        });
    }

    public emptyContent(): void {
        this.content.innerHTML = '';
    }

    public emptyActors(): void {
        this.actors.innerHTML = '';
    }
}

export default FavoritesView;
