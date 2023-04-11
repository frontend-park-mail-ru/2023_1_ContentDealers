import IComponentDataWithType from "../../Interfaces/interfaces";

import ListComponent from '../../Components/ListComponent/ListComponent';
import LinkComponent from '../../Components/LinkComponent/LinkComponent';

import FormComponentData from '../../Components/FormComponent/FormComponentData';

interface ISettingsData {
    title?: string;
    description?: string;
    formTitle?: string;
    leftMenu: IComponentDataWithType;
    formData: FormComponentData;
}

const SettingsData: ISettingsData = {
    title: 'Настройки',
    description: 'Оставьте контактные данные для получения уведомлений от сервиса и взаимодействия со службой поддержки.',
    formTitle: 'Контакты',
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
                            linkText: 'Выйти',
                        },
                    componentType: LinkComponent
                }
            ]
        },
        componentType: ListComponent,
    },
    formData: {
        formId: 'settings__form',
        enctype: true,
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                type: 'file',
                id: 'avatar',
                accept: 'image/jpeg',
            },
            {
                type: 'checkbox',
                id: 'avatar-checkbox',
                checkboxText: 'Удалить аватарку?',
                class: 'input-checkbox'
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
            }
        ],
        button: {
            id: 'save-submit-btn',
            text: 'Сохранить',
            className: 'save-button'
        },
        links: [],
    }
};

export default SettingsData;
