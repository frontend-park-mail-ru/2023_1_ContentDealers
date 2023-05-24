import IComponent from '../IComponent/IComponent';

import InputComponentTemplate from './InputComponent.hbs';
import type InputComponentData from './InputComponentData';
import './InputComponent.css';

class InputComponent extends IComponent {
    public readonly input: HTMLInputElement;
    public readonly inputError: HTMLElement;
    private readonly passwordShow: HTMLElement;
    private visibility: boolean;

    private readonly boundClickEvent = this.onClick.bind(this);

    public constructor(parent: HTMLElement, data?: InputComponentData) {
        super(parent, InputComponentTemplate(data));

        this.input =
            <HTMLInputElement>this.element.querySelector('input') || <HTMLInputElement>this.element;
        this.inputError = <HTMLElement>this.element.querySelector('[class*=error-msg]');


        this.passwordShow = <HTMLElement>this.element.querySelector('.password_show');
        this.passwordShow?.addEventListener('click', this.boundClickEvent);
        this.visibility = false;
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

    private onClick(e: Event): void {
        this.visibility = !this.visibility;
        if (this.visibility) {
            this.input.type = 'text';
            this.passwordShow.innerHTML = 'скрыть пароль';
        } else {
            this.input.type = 'password';
            this.passwordShow.innerHTML = 'показать пароль';
        }
    }
}

export default InputComponent;
