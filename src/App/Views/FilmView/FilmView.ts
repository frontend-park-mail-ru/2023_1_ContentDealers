import IView from '../IView/IView';
import type IFilm from '../../Interfaces/Film/IFilm';
import type ISeries from '../../Interfaces/Series/ISeries';

import FilmTemplate from './FilmView.hbs';
import FilmData from './FilmViewConfig';
import './FilmView.css';

import type ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

import SeasonComponent from '../../Components/SeasonComponent/SeasonComponent';
import type SeasonsComponentData from '../../Components/SeasonComponent/SeasonsComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';

import PlayerView from '../PlayerView/PlayerView';

/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class FilmView extends IView {
    public playerView: PlayerView | null;

    private buttonsContainer: HTMLElement;
    private subscribeButton:  ButtonComponent;
    private trailerButton:    ButtonComponent;
    private filmButton:       ButtonComponent;
    private favoritesLink:    LinkComponent;
    private favoritesIcon:    HTMLImageElement;
    private isInFavorites:    boolean;

    private seasons: HTMLElement;
    public seasonComponent: SeasonComponent;

    constructor(parent: HTMLElement) {
        super(parent, FilmTemplate({}));
    };

    public newPlayerView(title: string): void {
        this.playerView = new PlayerView(<HTMLElement>this.parent.parentElement, title);
    };

    public hide() {
        this.playerView = null;
        super.hide();
    }


    public fillFilm(data: IFilm | ISeries): void {
        this.parent.innerHTML = FilmTemplate(data);
        this.element = <HTMLElement>this.parent.firstElementChild;

        this.seasons = <HTMLElement>this.element.querySelector('.js-seasons');

        this.renderButtons();
    };

    public fillSeasonItems(data: SeasonsComponentData): void {
        this.seasonComponent = new SeasonComponent(this.seasons, data);
        this.seasonComponent.show();
    };

    private renderButtons(): void {
        this.subscribeButton = new FilmData.subscribeButton.componentType(this.buttonsContainer, FilmData.subscribeButton.componentData);
        this.subscribeButton.show();
        this.subscribeButton.button.setAttribute('disabled', 'true'); // TODO: return

        this.trailerButton = new FilmData.trailerButton.componentType(this.buttonsContainer, FilmData.trailerButton.componentData);
        this.trailerButton.show();
    };

    public toggleBookmark(): void {
        this.isInFavorites = !this.isInFavorites;
        this.favoritesIcon.src = (this.isInFavorites ? '/img/icons/bookmark-added.svg' : '/img/icons/bookmark-regular.svg');

    };

    public renderWatchButton(): void {
        this.filmButton = new FilmData.filmButton.componentType(this.buttonsContainer, FilmData.filmButton.componentData);
        this.filmButton.show();
    };

    public renderFavoritesButton(status: boolean): void {
        this.favoritesLink = new FilmData.favoritesLink.componentType(this.buttonsContainer, FilmData.favoritesLink.componentData);
        this.favoritesLink.show();

        this.isInFavorites = false;
        this.favoritesIcon = <HTMLImageElement>this.favoritesLink.querySelector('img');

        if (status) {
            this.toggleBookmark();
        }
    };

    public isDelete(): boolean {
        return this.isInFavorites;
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default FilmView;
