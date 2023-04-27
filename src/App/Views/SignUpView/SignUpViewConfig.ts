import type IComponentDataWithType from '../../Interfaces/interfaces';

import FormComponent from '../../Components/FormComponent/FormComponent';
import type FormComponentData from '../../Components/FormComponent/FormComponentData';

interface ISignUpData {
    title?: string;
    description?: string;
    formData: IComponentDataWithType<FormComponent, FormComponentData>;
}

const SignUpData: ISignUpData = {
    title: 'Войдите или зарегистрируйтесь',
    description: 'Чтобы начать пользоваться серависом Filmium',
    formData: {
        componentType: FormComponent,
        componentData: {
            formId: 'signUp__form',
            inputs: [
                {
                    inputClass: 'input-field__input--dark',
                    type: 'email',
                    id: 'email',
                    placeholder: 'vasiliy.pupkin@mail.ru',
                },
                {
                    inputClass: 'input-field__input--dark',
                    type: 'password',
                    id: 'password',
                    placeholder: '********',
                },
                {
                    inputClass: 'input-field__input--dark',
                    type: 'password',
                    id: 'repeat-password',
                    placeholder: '********',
                },
            ],
            button: {
                id: 'signUp-submit-btn',
                text: 'Войти',
                className: 'signUp-button'
            },
            links: [
                {
                    id: 'link-signIn',
                    linkHref: '/signIn',
                    linkText: 'Есть аккаунт? Войти',
                    linkTextClass: 'link-signIn__text'
                },
            ],
        }
    },
};

export default SignUpData;
