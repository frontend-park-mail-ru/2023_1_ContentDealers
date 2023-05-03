import IComponent from '../IComponent/IComponent';

import InputComponentTemplate from './InputComponent.hbs';
import type InputComponentData from './InputComponentData';
import './InputComponent.css';

class InputComponent extends IComponent {
    public readonly input: HTMLInputElement;
    public readonly inputError: HTMLElement;

    public constructor(parent: HTMLElement, data?: InputComponentData) {
        super(parent, InputComponentTemplate(data));

        this.input =
            <HTMLInputElement>this.element.querySelector('input') ||
            <HTMLInputElement>this.element;
        this.inputError = <HTMLElement>(
            this.element.querySelector('[class*=error-msg]')
        );
    }

    public getData(): { id: string; value: string } {
        return { id: this.input.id, value: this.input.value };
    }

    public isEmptyData(): boolean {
        return this.input.value === '';
    }

    public showErrorMsg(errorMsg: string): void {
        this.input.classList.add('input-field__input--error');
        this.inputError.innerHTML = errorMsg;
        this.inputError.classList.add('input-field__error-msg--error');
    }

    public hideErrorMsg(): void {
        this.input.classList.remove('input-field__input--error');
        this.inputError.innerHTML = '';
        this.inputError.classList.remove('input-field__error-msg--error');
    }

    public bindInputEvent(listener: any): void {
        if (this.input !== null) {
            this.input.addEventListener('input', listener.bind(this));
        }
    }

    public bindClickEvent(listener: any): void {
        this.input.addEventListener('click', listener.bind(this));
    }
}

export default InputComponent;
