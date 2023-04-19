import IView from '../IView/IView';

import SignUpTemplate from './SignUpView.hbs'
import SignUpData from './SignUpViewConfig';
import './SignUpView.css';

import FormComponent from '../../Components/FormComponent/FormComponent';
import SignInData from "../SignInView/SignInViewConfig";

class SignUpView extends IView {
    public readonly form: FormComponent;

    constructor(parent: HTMLElement) {
        super(parent, SignUpTemplate({ title: SignUpData.title, description: SignUpData.description }));

        this.form = new SignUpData.formData.componentType(this.element, SignUpData.formData.componentData);
        this.form.show();
    };
}

export default SignUpView;
