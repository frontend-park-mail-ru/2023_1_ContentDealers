import IComponent from '../IComponent/IComponent';

import LinkComponentTemplate from './LinkComponent.hbs';
import LinkComponentData from './LinkComponentData';
import './LinkComponent.css';

class LinkComponent extends IComponent {
    constructor(parent: HTMLElement, template = '', topElement = '', data?: LinkComponentData) {
        super(parent, LinkComponentTemplate(data), '.js-link');
    };
};

export default LinkComponent;
