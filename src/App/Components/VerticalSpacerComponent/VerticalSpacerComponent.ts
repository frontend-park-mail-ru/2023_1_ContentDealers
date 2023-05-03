import IComponent from '../IComponent/IComponent';

import VerticalComponentTemplate from './VerticalSpacerComponent.hbs';
import type VerticalSpacerComponentData from './VerticalSpacerComponentData';
import './VerticalSpacerComponent.css';

class VerticalSpacerComponent extends IComponent {
    public constructor(
        parent: HTMLElement,
        data?: VerticalSpacerComponentData
    ) {
        super(parent, VerticalComponentTemplate(data));
    }
}

export default VerticalSpacerComponent;
