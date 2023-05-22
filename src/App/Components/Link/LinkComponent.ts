import IComponent from '../IComponent/IComponent';

import LinkComponentTemplate from './LinkComponent.hbs';
import type LinkComponentData from './LinkComponentData';

class LinkComponent extends IComponent {
    public constructor(parent: HTMLElement, data: LinkComponentData) {
        super(parent, LinkComponentTemplate(data));
    }
}

export default LinkComponent;
