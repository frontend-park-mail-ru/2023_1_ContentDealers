import IComponent from '../IComponent/IComponent';

import AlertComponentTemplate from './AlertComponent.hbs';
import './AlertComponent.css';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class AlertComponent extends IComponent {
    public constructor(parent: HTMLElement) {
        super(parent, AlertComponentTemplate({}));

        EventDispatcher.subscribe('show-alert', (text: string) => {
            this.setText(text);
            this.prepend();

            setTimeout(() => {
                this.hide();
            }, 2000);
        });
    }

    private setText(text: string): void {
        const textContainer = <HTMLElement>this.element.querySelector('.ts-alert-text');
        textContainer.innerText = text;
    }
}

export default AlertComponent;
