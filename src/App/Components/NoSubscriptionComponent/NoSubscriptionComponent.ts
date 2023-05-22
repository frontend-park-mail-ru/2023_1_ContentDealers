import IComponent from '../IComponent/IComponent';

import NoSubscriptionComponentTemplate from './NoSubscriptionComponent.hbs';
import { NoSubscriptionData, type NoSubscriptionComponentData } from './NoSubscriptionComponentData';
import './NoSubscriptionComponent.css';

class NoSubscriptionComponent extends IComponent {
    public constructor(parent: HTMLElement, data?:NoSubscriptionComponentData) {
        if (data) {
            super(parent, NoSubscriptionComponentTemplate({
                title:       data.title,
                description: data.description,
            }));
        } else {
            super(parent, NoSubscriptionComponentTemplate({
                title: NoSubscriptionData.title,
                description: NoSubscriptionData.description,
            }));
        }
    }
}

export default NoSubscriptionComponent;
