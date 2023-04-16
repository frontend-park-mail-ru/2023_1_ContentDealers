import IComponent from '../IComponent/IComponent';

import BaseComponentTemplate from './RootComponent.hbs';
import RootComponentData from './RootComponentData';
import './RootComponent.css';

class RootComponent extends IComponent {
    constructor(parent: HTMLElement, template = '', topElement = '', data?: RootComponentData) {
        super(parent, BaseComponentTemplate(data), '.js-root');
    };
};

export default RootComponent;
