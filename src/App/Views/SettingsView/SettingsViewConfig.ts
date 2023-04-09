import IComponentDataWithType from "../../Interfaces/interfaces";

import ListComponent from '../../Components/ListComponent/ListComponent';
import LinkComponent from '../../Components/LinkComponent/LinkComponent';

import FormComponentData from '../../Components/FormComponent/FormComponentData';

interface ISettingsData {
    title?: string;
    description?: string;
    leftMenu: IComponentDataWithType;
    formData: FormComponentData;
}

const SettingsData: ISettingsData = {
    title: 'Контакты',
    description: 'Оставьте контактные данные для получения уведомлений от сервиса и взаимодействия со службой поддержки.',
    leftMenu: {
        componentData: {
            listClass: 'settings__left-menu',
            itemClass: 'settings-left-menu__item',
            items: [
                {
                    componentData:
                        {
                            linkHref: '/settings',
                            linkClass: 'settings-left-menu-item__link',
                            linkText: 'Основные',
                        },
                    componentType: LinkComponent
                },
                {
                    componentData:
                        {
                            linkHref: '/settings/payments',
                            linkClass: 'settings-left-menu-item__link',
                            linkText: 'Оплата услуг',
                        },
                    componentType: LinkComponent
                },
                {
                    componentData:
                        {
                            linkHref: '/settings/subscriptions',
                            linkClass: 'settings-left-menu-item__link',
                            linkText: 'Подписки',
                        },
                    componentType: LinkComponent
                },
                {
                    componentData:
                        {
                            linkHref: '/logout',
                            linkClass: 'settings-left-menu-item__link',
                            linkImageSrc: '/img/icons/logout.svg',
                            linkImageClass: '',
                            linkImageWidth: 24,
                            linkText: 'Подписки',
                        },
                    componentType: LinkComponent
                }
            ]
        },
        componentType: ListComponent,
    },
    formData: {
        formId: 'settings__form',
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
            id: 'settings-submit-btn',
            text: 'Войти',
            className: 'settings-button'
        },
        links: [],
    }
};

export default SettingsData;
