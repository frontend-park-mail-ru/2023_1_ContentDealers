import IComponent from '../IComponent/IComponent';

import ButtonComponentTemplate from './ButtonComponent.hbs';
import ButtonComponentData from "./ButtonComponentData";
import './ButtonComponent.css';

class ButtonComponent extends IComponent {
    private buttonProps: { [key: string]: { name: string, value: number } } = {
        coordinateX:        { name: '--coord-x',                            value: 0 },
        coordinateY:        { name: '--coord-y',                            value: 0 },
        sizeSquare:         { name: '--size-square',                        value: 0 },
        diameterHighlight:  { name: '--diameter-highlight',                 value: 0 },
    };

    public readonly button: HTMLButtonElement;

    constructor(parent: HTMLElement, template = '', topElement = '', data?: ButtonComponentData) {
        super(parent, ButtonComponentTemplate(data), '.js-button');

        this.button = <HTMLButtonElement>this.element.querySelector('button') || <HTMLButtonElement>this.element;

        this.setSizeSquare();
        this.setDiameterHighlight();

        this.bindMouseMoveEvent(this.onMouseMoveEvent);
    };

    private setSizeSquare(): void {
        setTimeout(() => {
            const buttonWidth = this.button.offsetWidth;
            const buttonHeight = this.button.offsetHeight;

            this.buttonProps['sizeSquare'].value = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);

            this.button.style.setProperty(this.buttonProps['sizeSquare'].name, `${this.buttonProps['sizeSquare'].value}px`);
        }, 0);
    };

    private setDiameterHighlight(): void {
        setTimeout(() => {
            const buttonWidth = this.button.offsetWidth;
            const buttonHeight = this.button.offsetHeight;

            const diameter = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);
            const multiplySqrt = Math.sqrt(buttonWidth * buttonHeight);

            this.buttonProps['diameterHighlight'].value = diameter + multiplySqrt;
            this.button.style.setProperty(this.buttonProps['diameterHighlight'].name, `${this.buttonProps['diameterHighlight'].value}px`);
        }, 0);
    }

    public block(): void {
        this.button.disabled = true;
    };

    public unblock(): void {
        this.button.disabled = false;
    };

    public bindClickEvent(listener: any): void {
        this.button.addEventListener('click', listener.bind(this));
    };

    public unbindClickEvent(listener: any): void {
        this.button.removeEventListener('click', listener.bind(this));
    };

    private bindMouseMoveEvent(listener: Function): void {
        this.button.addEventListener('mousemove', listener.bind(this));
    };

    private unbindMouseMoveEvent(listener: Function): void {
        this.button.removeEventListener('mousemove', listener.bind(this));
    };

    private onMouseMoveEvent(e: Event): void {
        const mouseEvent = e as MouseEvent;

        this.buttonProps['coordinateX'].value = mouseEvent.offsetX;
        this.buttonProps['coordinateY'].value = mouseEvent.offsetY;

        this.button.style.setProperty(this.buttonProps['coordinateX'].name, `${this.buttonProps['coordinateX'].value}px`);
        this.button.style.setProperty(this.buttonProps['coordinateY'].name, `${this.buttonProps['coordinateY'].value}px`);
    };
}

export default ButtonComponent;
