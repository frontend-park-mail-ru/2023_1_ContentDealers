import IComponent from '../IComponent/IComponent';

import LinkComponentTemplate from './LinkComponent.hbs';
import LinkComponentData from './LinkComponentData';
import './LinkComponent.css';

class LinkComponent extends IComponent {
    public readonly link: HTMLElement;

    constructor(parent: HTMLElement, template = '', topElement = '', data?: LinkComponentData) {
        super(parent, LinkComponentTemplate(data), '.js-link');

        this.link = <HTMLElement>this.element.querySelector('a') || this.element;
    };

    public bindClickEvent(listener: any): void {
        this.link.addEventListener('click', listener.bind(this));
    };
}

export default LinkComponent;
