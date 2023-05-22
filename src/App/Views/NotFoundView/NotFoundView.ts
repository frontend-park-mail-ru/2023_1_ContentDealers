import IView from '../IView/IView';

import NotFoundTemplate from './NotFoundView.hbs';
import './NotFoundView.css';

import type ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import NotFoundData from './NotFoundViewConfig';

class NotFoundView extends IView {
    private homeButton: ButtonComponent;

    public constructor(parent: HTMLElement) {
        super(parent, NotFoundTemplate({}));

        const container = <HTMLElement>this.element.querySelector('.js-space__error');

        this.homeButton = new NotFoundData.homeButton.componentType(
            container,
            NotFoundData.homeButton.componentData
        );
        this.homeButton.show();
    }

    public bindHomeButtonClick(listener: any): void {
        this.homeButton.bindClickEvent(listener);
    }
}

export default NotFoundView;
