import IView from '../IView/IView';

import FilmTemplate from './FilmView.hbs';
import './FilmView.css';

import { IFilm } from '../../Models/FilmModel/IFilm';

/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class FilmView extends IView {
    constructor(parent: HTMLElement) {
        super(parent, FilmTemplate({}), 'article');
    };

    public fillFilm(data: IFilm): void {
        console.log('In FilmView', data);
        this.parent.innerHTML = FilmTemplate(data);
        this.element.querySelector('article');
    };

    // private renderButtons(): void {
    //
    // }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default FilmView;
