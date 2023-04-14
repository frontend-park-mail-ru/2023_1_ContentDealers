import IView from '../IView/IView';

import NotFoundTemplate from './NotFoundView.hbs'
import './NotFoundView.css';

class NotFoundView extends IView {
    constructor(parent: HTMLElement) {
        super(parent, NotFoundTemplate({}), '.space');
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default NotFoundView;
