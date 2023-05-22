import IView from '../IView/IView';

import SignUpTemplate from './SignUpView.hbs';
import SignUpData from './SignUpViewConfig';
import './SignUpView.css';

import type FormComponent from '../../Components/FormComponent/FormComponent';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class SignUpView extends IView {
    public readonly form: FormComponent;

    public constructor(parent: HTMLElement) {
        super(
            parent,
            SignUpTemplate({
                title: SignUpData.title,
                description: SignUpData.description,
            })
        );

        EventDispatcher.emit('modal-change-title', SignUpData.title);

        this.form = new SignUpData.formData.componentType(
            this.element,
            SignUpData.formData.componentData
        );
        this.form.show();
    }
}

export default SignUpView;
