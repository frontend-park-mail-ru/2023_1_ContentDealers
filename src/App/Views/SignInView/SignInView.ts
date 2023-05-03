import IView from '../IView/IView';

import SignInTemplate from './SignInView.hbs';
import SignInData from './SignInViewConfig';
import './SignInView.css';

import type FormComponent from '../../Components/FormComponent/FormComponent';

class SignInView extends IView {
    public readonly form: FormComponent;

    public constructor(parent: HTMLElement) {
        super(parent, SignInTemplate({ title: SignInData.title, description: SignInData.description }));

        this.form = new SignInData.formData.componentType(this.element, SignInData.formData.componentData);
        this.form.show();
    }
}

export default SignInView;
