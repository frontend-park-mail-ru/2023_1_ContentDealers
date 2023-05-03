import IComponent from '../IComponent/IComponent';

import DivComponentTemplate from './DivComponent.hbs';
import type DivComponentData from './DivComponentData';

class DivComponent extends IComponent {
    public readonly div: HTMLElement;

    public constructor(parent: HTMLElement, data: DivComponentData) {
        super(parent, DivComponentTemplate(data));

        this.div = this.element.querySelector('div') || this.element;
    }
}

export default DivComponent;
