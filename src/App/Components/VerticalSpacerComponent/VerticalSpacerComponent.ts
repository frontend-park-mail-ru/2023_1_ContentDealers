import IComponent from '../IComponent/IComponent';

import VerticalComponentTemplate from './VerticalSpacerComponent.hbs';
import VerticalSpacerComponentData from './VerticalSpacerComponentData';
import './VerticalSpacerComponent.css';

class VerticalSpacerComponent extends IComponent {
    constructor(parent: HTMLElement, template = '', topElement = '', data?: VerticalSpacerComponentData) {
        super(parent, VerticalComponentTemplate(data), '.js-vertical-spacer');
    };
};

export default VerticalSpacerComponent;
