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

    public fillFilm(data: IFilm, status: boolean): void {
        this.element.innerHTML = FilmTemplate(data);

        this.renderButtons(status);
    };

    private renderButtons(status: boolean): void {
        const buttonsContainer = <HTMLElement>this.element.querySelector('.film-content__buttons');

        this.subscribeButton = new FilmData.subscribeButton.componentType(buttonsContainer, FilmData.subscribeButton.componentData);
        this.subscribeButton.show();

        this.trailerButton = new FilmData.trailerButton.componentType(buttonsContainer, FilmData.trailerButton.componentData);
        this.trailerButton.show();

        this.filmButton = new FilmData.filmButton.componentType(buttonsContainer, FilmData.filmButton.componentData);
        this.filmButton.show();

        this.favoritesLink = new FilmData.favoritesLink.componentType(buttonsContainer, FilmData.favoritesLink.componentData);
        this.favoritesLink.show();

        this.isInFavorites = false;
        this.favoritesIcon = <HTMLImageElement>this.favoritesLink.querySelector('img');

        if (status) {
            this.toggleBookmark();
        }
    };

    public toggleBookmark(): void {
        this.isInFavorites = !this.isInFavorites;
        this.favoritesIcon.src = (this.isInFavorites ? '/img/icons/bookmark-added.svg' : '/img/icons/bookmark-regular.svg');

    };

    public isDelete(): boolean {
        return this.isInFavorites;
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default FilmView;
