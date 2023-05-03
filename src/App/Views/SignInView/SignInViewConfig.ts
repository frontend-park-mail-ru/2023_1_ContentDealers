import type IComponentDataWithType from '../../Interfaces/interfaces';

import FormComponent from '../../Components/FormComponent/FormComponent';
import type FormComponentData from '../../Components/FormComponent/FormComponentData';

interface ISignInData {
    title?: string;
    description?: string;
    formData: IComponentDataWithType<FormComponent, FormComponentData>;
}

const SignInData: ISignInData = {
    title: 'Войдите или зарегистрируйтесь',
    description: 'Чтобы начать пользоваться серависом Filmium',
    formData: {
        componentType: FormComponent,
        componentData: {
            formId: 'signIn__form',
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
            ],
            button: {
                id: 'signIn-submit-btn',
                text: 'Войти',
                className: 'signIn-button',
            },
            links: [
                {
                    id: 'link-signUp',
                    linkHref: '/signUp',
                    linkText: 'Нет аккаунта? Зарегистрироваться',
                    linkTextClass: 'link-signUp__text',
                },
            ],
        },
    },
};

export default SignInData;
