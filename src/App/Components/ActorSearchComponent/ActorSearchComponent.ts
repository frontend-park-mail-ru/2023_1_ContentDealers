import IComponent from '../IComponent/IComponent';

import ActorSearchComponentTemplate from './ActorSearchComponent.hbs';
import type ActorSearchComponentData from './ActorSearchComponentData';
import './ActorSearchComponent.css';

class ActorSearchComponent extends IComponent {
    public constructor(parent: HTMLElement, data: ActorSearchComponentData, forSearch: boolean) {
        super(
            parent,
            ActorSearchComponentTemplate({
                personId: data.personId,
                name: data.name,
                description: data.description,
                forSearch: forSearch,
            })
        );
    }
}

export default ActorSearchComponent;
