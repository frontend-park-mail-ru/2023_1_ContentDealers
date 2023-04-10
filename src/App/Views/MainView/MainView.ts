import IView from '../IView/IView';

import MainTemplate from './MainView.hbs';
import './MainView.css';

import { ISelection } from "../../Models/SelectionModel/ISelection";

class MainView extends IView {
    // private selectionContainer: HTMLElement;

    constructor(parent: HTMLElement) {
        super(parent, MainTemplate({}), '.categories');

        // this.selectionContainer = <HTMLElement>this.element.querySelector('article');
    };

    public fillSelections(selections: ISelection[]): void {
        console.log('fillSelections', selections)
        this.element.innerHTML = MainTemplate({ selections: selections });
    };

    public bindClickEvent(listener: any): void {
        this.element.querySelectorAll('img.category__container__item-image').forEach((element) => {
            element.addEventListener('click', listener.bind(this));
        });
    };
}

export default MainView;
