import IComponent from '../IComponent/IComponent';

import FormComponentTemplate from './FormComponent.hbs';
import FormComponentData from './FormComponentData';
import './FormComponent.css';

import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LinkComponent from "../LinkComponent/LinkComponent";

import {validateInput, validatePasswords, ValidatorResult} from '../../Utils/Validators/Validator';
import inputComponent from "../InputComponent/InputComponent";

class FormComponent extends IComponent {
    public inputs: InputComponent[];
    public submitButton: ButtonComponent;
    public links: LinkComponent[];

    constructor(parent: HTMLElement, template = '', topElem = '', data?: FormComponentData) {
        super(parent, FormComponentTemplate({ formId: data?.formId, enctype: data?.enctype }), '.js-form');

        const formContent = <HTMLElement>this.element.querySelector('.form__content');
        const formFooter = <HTMLElement>this.element.querySelector('.form__footer');

        this.inputs = [] as InputComponent[];
        this.links = [] as LinkComponent[];


        data?.inputs.forEach(input => {
            const inputComponent = new InputComponent(formContent, '', '', input);
            inputComponent.show();

            this.inputs.push(inputComponent);
        });

        this.submitButton = new ButtonComponent(formContent, '', '', data?.button);
        this.submitButton.show();

        data?.links?.forEach(link => {
            const linkElement = new LinkComponent(formFooter, '', '', link);
            linkElement.show();

            this.links.push(linkElement);
        });
    };

    // public getData(): { id: string, value: string }[] {
    //     return this.inputs.map((inputComponent) => {
    //         return inputComponent.getData();
    //     });
    // };

    public validateEmptyFields(fields: InputComponent[]): boolean {
        return fields.map(field => {
            if (field.isEmptyData()) {
                field.showErrorMsg('Пустое поле');
                return false;
            }
            field.hideErrorMsg();
            return true;
        }).every(isValid => isValid);
    };

    public validatePasswordFields(): boolean {
        let isValid = true;

        const passwordField = this.findInputComponent('password');
        const repeatPasswordField = this.findInputComponent('repeat-password');

        if (passwordField) { // If exists password field
            const validatedPassword = validateInput(passwordField.getData());

            if (!validatedPassword.isValid) { // If data in password field is incorrect
                passwordField.showErrorMsg(validatedPassword.errorMsg);
                isValid = false;
            } else {
                passwordField.hideErrorMsg();
                isValid = true;
            }

            if (repeatPasswordField) { // If exists repeat password field
                const validatedPasswords = validatePasswords(passwordField.input.value, repeatPasswordField.input.value);

                if (!validatedPasswords.isValid) { // If passwords not match
                    repeatPasswordField.showErrorMsg(<string>validatedPasswords.passwordErrorMsg);
                    isValid = false;
                } else {
                    repeatPasswordField.hideErrorMsg();
                    isValid = true;
                }
            }
        }

        return isValid;
    };

    public validateInputFields(): boolean {
        let isValid = true;

        const inputFields = this.inputs.filter(inputComponent => inputComponent.input.id.toLowerCase().indexOf('password') === -1);
        if (inputFields) {
            inputFields.forEach(inputField => {
                const validatedInput: ValidatorResult = validateInput(inputField.getData());

                if (!validatedInput.isValid) {
                    inputField.showErrorMsg(validatedInput.errorMsg);
                    // this.submitButton.block(); // TODO: block here or in controller?
                    isValid = false;
                    return;
                }
                inputField.hideErrorMsg();
                // this.submitButton.unblock(); // TODO: unblock here or in controller? Also this block needs in validatePasswordFields
            });
        }

        return isValid;
    };

    public validateWithEmpty(): boolean {
        console.log('this.validateInputFields()', this.validateInputFields())
        console.log('this.validatePasswordFields()', this.validatePasswordFields())
        return this.validateInputFields() && this.validatePasswordFields();
    };

    public validateWithoutEmpty(): boolean {
        console.log('validateWithoutEmpty')
        console.log('this.validateInputFields()', this.validateInputFields())
        console.log('this.validatePasswordFields()', this.validatePasswordFields())
        return this.validatePasswordFields();
    };

    public setDataToFields(fieldsWithValue: { id: string, value: string }[]): void {
        fieldsWithValue.forEach(({id, value}) => {
            this.findInputComponent(id).input.value = value;
        });
    }

    public findInputComponent(id: string): InputComponent {
        return <inputComponent>this.inputs.find(inputComponent => inputComponent.input.id === id);
    };

    public bindInputsEvent(listener: any): void {
        this.inputs.forEach((inputComponent) => {
            inputComponent.bindInputEvent(listener);
        });
    };

    public bindSubmitEvent(listener: any): void {
        this.submitButton.bindClickEvent(listener);
    };

    public bindLinksEvent(listener: any): void {
        this.links.forEach((linkComponent) => {
            linkComponent.bindClickEvent(listener);
        });
    };

    public bindFileClickEvent(listener: any): void {
        this.findInputComponent('avatar').bindClickEvent(listener);
    };

    public bindCheckboxClickEvent(listener: any): void {
        this.findInputComponent('avatar-checkbox').bindClickEvent(listener);
    };
}

export default FormComponent;
