import IComponent from '../IComponent/IComponent';

import BaseComponentTemplate from './BaseComponent.hbs';
import BaseComponentData from './BaseComponentData';
import './BaseComponent.css';

class BaseComponent extends IComponent {
    constructor(parent: HTMLElement, template = '', topElement = '', data?: BaseComponentData) {
        super(parent, BaseComponentTemplate(data), '.js-root');
    };
};

export default BaseComponent;
