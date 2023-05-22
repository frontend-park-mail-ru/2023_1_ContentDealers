import IComponent from '../IComponent/IComponent';

import RootComponentTemplate from './RootComponent.hbs';
import './RootComponent.css';

class RootComponent extends IComponent {
    public constructor(parent: HTMLElement) {
        super(parent, RootComponentTemplate());
    }
}

export default RootComponent;
