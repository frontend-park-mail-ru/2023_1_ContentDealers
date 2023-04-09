import IComponent from '../IComponent/IComponent';

import ButtonComponentTemplate from './ButtonComponent.hbs';
import ButtonComponentData from "./ButtonComponentData";
import './ButtonComponent.css';

class ButtonComponent extends IComponent {
    public readonly button: HTMLButtonElement;

    constructor(parent: HTMLElement, template = '', topElement = '', data?: ButtonComponentData) {
        super(parent, ButtonComponentTemplate(data), '.js-button');

        this.button = <HTMLButtonElement>this.element.querySelector('button') || <HTMLButtonElement>this.element;
    };

    public block(): void {
        this.element.classList.add('button--disabled');
    };

    public unblock(): void {
        this.element.classList.remove('button--disabled');
    };

    public bindClickEvent(listener: any): void {
        this.button.addEventListener('click', listener.bind(this));
    };
}

export default ButtonComponent;
