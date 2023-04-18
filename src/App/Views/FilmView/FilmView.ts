import IView from '../IView/IView';

import FilmTemplate from './FilmView.hbs';
import './FilmView.css';

import IFilm from '../../Interfaces/Film/IFilm';
import PlayerView from "../PlayerView/PlayerView";
import FilmData from "./FilmViewConfig";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class FilmView extends IView {
    public playerView: PlayerView | null;

    private trailerButton: ButtonComponent;
    private subscribeButton: ButtonComponent;

    constructor(parent: HTMLElement) {
        super(parent, FilmTemplate({}), '.film');
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

        this.renderButtons();
    };

    private renderButtons(): void {
        const buttonsContainer = <HTMLElement>this.element.querySelector('.film-content__buttons');

        // this.trailerButton = <ButtonComponent>(new FilmData.trailerButton.componentType(buttonsContainer, '', '', FilmData.trailerButton.componentData));
        // this.trailerButton.show();
        // this.subscribeButton = <ButtonComponent>(new FilmData.subscribeButton.componentType(buttonsContainer, '', '', FilmData.subscribeButton.componentData));
        // this.subscribeButton.show();
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default FilmView;