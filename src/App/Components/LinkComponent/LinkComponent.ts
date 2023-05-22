import IComponent from '../IComponent/IComponent';

import LinkComponentTemplate from './LinkComponent.hbs';
import type LinkComponentData from './LinkComponentData';
import './LinkComponent.css';

class LinkComponent extends IComponent {
    public readonly link: HTMLElement;

    constructor(parent: HTMLElement, data?: LinkComponentData) {
        super(parent, LinkComponentTemplate(data));

        this.link = <HTMLElement>this.element.querySelector('a') || this.element;
    };

    public bindClickEvent(listener: any): void {
        this.link.addEventListener('click', listener.bind(this));
    };
}

export default LinkComponent;
