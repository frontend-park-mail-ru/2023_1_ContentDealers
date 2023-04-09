import IView from '../IView/IView';

import SignInTemplate from './SignInView.hbs';
import SignInData from './SignInViewConfig';
import './SignInView.css';

import FormComponent from '../../Components/FormComponent/FormComponent';

class SignInView extends IView {
    public readonly form: FormComponent;

    constructor(parent: HTMLElement) {
        super(parent, SignInTemplate({ title: SignInData.title, description: SignInData.description }), '.js-signIn');

        this.form = new FormComponent(this.element, '', '', SignInData.formData);
        this.form.show();

        // this.form.submitButton.block();
    };
}

export default SignInView;
