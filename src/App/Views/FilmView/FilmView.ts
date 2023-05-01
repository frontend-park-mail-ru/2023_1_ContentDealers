import IView from '../IView/IView';

import FilmTemplate from './FilmView.hbs';
import './FilmView.css';

import IFilm from '../../Interfaces/Film/IFilm';
import PlayerView from "../PlayerView/PlayerView";
import FilmData from "./FilmViewConfig";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import LinkComponent from "../../Components/LinkComponent/LinkComponent";

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

    constructor(parent: HTMLElement) {
        super(parent, FilmTemplate({}));
    };

    public newPlayerView(): void {
        this.playerView = new PlayerView(<HTMLElement>this.parent.parentElement);
    };

    public hide() {
        this.playerView = null;
        super.hide();
    }

    public fillFilm(data: IFilm): void {
        this.element.innerHTML = FilmTemplate(data);
        this.buttonsContainer = <HTMLElement>this.element.querySelector('.film-content__buttons');

        this.renderButtons();
    };

    private renderButtons(): void {
        this.subscribeButton = new FilmData.subscribeButton.componentType(this.buttonsContainer, FilmData.subscribeButton.componentData);
        this.subscribeButton.show();

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
