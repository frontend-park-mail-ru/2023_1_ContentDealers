import IView from '../IView/IView';
import type IFilm from '../../Interfaces/Film/IFilm';

import FilmTemplate from './FilmView.hbs';
import FilmData from "./FilmViewConfig";
import './FilmView.css';

import PlayerView from "../PlayerView/PlayerView";

import type ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class FilmView extends IView {
    public playerView: PlayerView | null;

    private subscribeButton: ButtonComponent;
    private trailerButton: ButtonComponent;
    private filmButton: ButtonComponent;

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

    public fillFilm(data: IFilm): void {
        this.element.innerHTML = FilmTemplate(data);

        this.renderButtons();
    };

    private renderButtons(): void {
        const buttonsContainer = <HTMLElement>this.element.querySelector('.film-content__buttons');

        this.subscribeButton = new FilmData.subscribeButton.componentType(buttonsContainer, FilmData.subscribeButton.componentData);
        this.subscribeButton.show();

        this.trailerButton = new FilmData.trailerButton.componentType(buttonsContainer, FilmData.trailerButton.componentData);
        this.trailerButton.show();

        this.filmButton = new FilmData.filmButton.componentType(buttonsContainer, FilmData.filmButton.componentData);
        this.filmButton.show();
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default FilmView;
