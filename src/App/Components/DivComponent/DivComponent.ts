import IComponent from '../IComponent/IComponent';

import DivComponentTemplate from './DivComponent.hbs';
import DivComponentData from './DivComponentData';

class DivComponent extends IComponent {
    public readonly div: HTMLElement;

    constructor(parent: HTMLElement, template = '', topElement = '', data: DivComponentData) {
        super(parent, DivComponentTemplate(data), 'div');

        this.div = this.element.querySelector('div') || this.element;
    };
}

export default DivComponent;
