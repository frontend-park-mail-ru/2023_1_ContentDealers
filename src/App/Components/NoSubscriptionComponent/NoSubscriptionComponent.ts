import IComponent from '../IComponent/IComponent';

import NoSubscriptionComponentTemplate from './NoSubscriptionComponent.hbs';
import { NoSubscriptionData, type NoSubscriptionComponentData } from './NoSubscriptionComponentData';
import './NoSubscriptionComponent.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

class NoSubscriptionComponent extends IComponent {
    private readonly mainContainer: HTMLElement;
    private subscribeButtonComponent: ButtonComponent;

    public constructor(parent: HTMLElement, data?:NoSubscriptionComponentData) {
        if (data) {
            super(parent, NoSubscriptionComponentTemplate(data));

            this.mainContainer = <HTMLElement>this.element.querySelector('.ts-main');
            this.renderRepeatSubscribeButton();
            // this.bindRepeatSubscribeButtonClick()
        } else {
            super(parent, NoSubscriptionComponentTemplate({
                title: NoSubscriptionData.title,
                description: NoSubscriptionData.description,
            }));
        }
    }

    private renderRepeatSubscribeButton(): void {
        this.subscribeButtonComponent = new ButtonComponent(this.mainContainer, { text: 'Продлить подписку' });
        this.subscribeButtonComponent.show();
    }

    public bindRepeatSubscribeButtonClick(listener: any): void {
        this.subscribeButtonComponent.bindClickEvent(listener);
    }
}

export default NoSubscriptionComponent;
