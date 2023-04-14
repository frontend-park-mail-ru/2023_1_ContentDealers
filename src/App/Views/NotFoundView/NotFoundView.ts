import IView from '../IView/IView';

import NotFoundTemplate from './NotFoundView.hbs'
import './NotFoundView.css';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

class NotFoundView extends IView {
    private homeButton: ButtonComponent;

    constructor(parent: HTMLElement) {
        super(parent, NotFoundTemplate({}), '.space');

        const container = <HTMLElement>this.element.querySelector('.js-space__error');

        this.homeButton = new ButtonComponent(container, '', '', { className: 'home-button', text: 'Вернуться на главную'});
        this.homeButton.show();


    };

    public bindHomeButtonClick(listener: any): void {
        this.homeButton.bindClickEvent(listener.bind(this));
    };
}

export default NotFoundView;
