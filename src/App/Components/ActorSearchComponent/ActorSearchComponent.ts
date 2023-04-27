import IComponent from '../IComponent/IComponent';

import ActorSearchComponentTemplate from './ActorSearchComponent.hbs';
import type ActorSearchComponentData from './ActorSearchComponentData';
import './ActorSearchComponent.css';

class ActorSearchComponent extends IComponent {
    constructor(parent: HTMLElement, data: ActorSearchComponentData) {
        super(parent, ActorSearchComponentTemplate({
            personId: data.personId,
            name: data.name,
            description: data.description,
        }));
    };
}

export default ActorSearchComponent;
