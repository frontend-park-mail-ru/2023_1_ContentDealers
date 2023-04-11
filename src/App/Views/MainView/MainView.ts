import IView from '../IView/IView';

import MainTemplate from './MainView.hbs';
import './MainView.css';

import ISelection from '../../Interfaces/Selection/ISelection';

class MainView extends IView {
    constructor(parent: HTMLElement) {
        super(parent, MainTemplate({}), '.categories');
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
