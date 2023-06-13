import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponent from '../../Components/ListComponent/ListComponent';
import type ListComponentData from '../../Components/ListComponent/ListComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

import FormComponent from '../../Components/FormComponent/FormComponent';
import type FormComponentData from '../../Components/FormComponent/FormComponentData';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import inputComponent from "../../Components/InputComponent/InputComponent";
import divComponent from "../../Components/DivComponent/DivComponent";
import paths from '../../Router/RouterPaths';

interface ISettingsData {
    title?: string;
    description?: string;
    formTitle?: string;
    leftMenu: IComponentDataWithType<
        ListComponent<LinkComponent, LinkComponentData>,
        ListComponentData<LinkComponent, LinkComponentData>
    >;
    middleMenu: IComponentDataWithType<
        ListComponent<LinkComponent, LinkComponentData>,
        ListComponentData<LinkComponent, LinkComponentData>
    >;
    formChangeEmailData: IComponentDataWithType<FormComponent, FormComponentData>;
    formChangePasswordData: IComponentDataWithType<FormComponent, FormComponentData>;

    rightMenu: any;

    leftActiveItem: string;
    middleActiveItem: string;
}

const SettingsData: ISettingsData = {
    leftMenu: {
        componentData: {
            listClass: 'settings__left-menu',
            itemClass: 'settings-left-menu__item',
            items: [
                {
                    componentData: {
                        linkHref: '/settings',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Основные',
                        dataAction: 'main',
                    },
                    componentType: LinkComponent,
                },
                // TODO: return
                // {
                //     componentData:
                //         {
                //             linkHref: '/settings/payments',
                //             linkClass: 'settings-left-menu-item__link',
                //             linkText: 'Оплата услуг',
                //         },
                //     componentType: LinkComponent
                // },
                {
                    componentData:
                        {
                            linkHref: '/settings/subscriptions',
                            linkClass: 'settings-left-menu-item__link',
                            linkText: 'Подписки',
                            dataAction: 'subscriptions',
                        },
                    componentType: LinkComponent
                },
                {
                    componentData: {
                        linkHref: '/logout',
                        linkClass: 'settings-left-menu-item__link',
                        linkImageSrc: '/img/icons/logout.svg',
                        linkImageClass: '',
                        linkImageWidth: '24px',
                        linkText: 'Выйти',
                        dataAction: 'logout',
                    },
                    componentType: LinkComponent,
                },
            ],
        },
        componentType: ListComponent,
    },
    middleMenu: {
        componentType: ListComponent,
        componentData: {
            listClass: 'settings__middle-menu middle-menu-row-direction',
            itemClass: 'settings-middle-menu__item',
            items: [
                {
                    componentType: LinkComponent,
                    componentData: {
                        linkHref: '/settings/change/email',
                        linkClass: 'settings-middle-menu-item__link',
                        linkText: 'Изменение почты',
                        dataAction: 'changeEmail',
                    }
                },
                {
                    componentType: LinkComponent,
                    componentData: {
                        linkHref: '/settings/change/password',
                        linkClass: 'settings-middle-menu-item__link',
                        linkText: 'Изменение пароля',
                        dataAction: 'changePassword',
                    }
                }
            ]
        }
    },
    formChangeEmailData: {
        componentType: FormComponent,
        componentData: {
            formId: 'settings__form',
            enctype: true,
            inputs: [
                {
                    label: 'Введите новую почту',
                    inputClass: 'input-field__input--dark',
                    type: 'email',
                    id: 'email',
                    placeholder: 'vasiliy.pupkin@mail.ru',
                },
                {
                    label: 'Подтвердите пароль',
                    inputClass: 'input-field__input--dark',
                    type: 'password',
                    id: 'password',
                    placeholder: '********',
                    checkboxText: 'показать пароль',
                },
            ],
            button: {
                id: 'save-submit-btn',
                text: 'Сохранить',
                className: 'save-button',
            },
            links: [],
        },
    },
    formChangePasswordData: {
        componentType: FormComponent,
        componentData: {
            formId: 'settings__form',
            enctype: true,
            inputs: [
                {
                    label: 'Введите старый пароль',
                    inputClass: 'input-field__input--dark',
                    type: 'password',
                    id: 'password',
                    placeholder: '********',
                    checkboxText: 'показать пароль',
                },
                {
                    label: 'Введите новый пароль',
                    inputClass: 'input-field__input--dark',
                    type: 'password',
                    id: 'new-password',
                    placeholder: '********',
                    checkboxText: 'показать пароль',
                },
                {
                    label: 'Повторите пароль',
                    inputClass: 'input-field__input--dark',
                    type: 'password',
                    id: 'repeat-password',
                    placeholder: '********',
                    checkboxText: 'показать пароль',
                },
            ],
            button: {
                id: 'save-submit-btn',
                text: 'Сохранить',
                className: 'save-button',
            },
            links: [],
        },
    },
    rightMenu: {
        container: {
            componentType: divComponent,
            componentData: {

            }
        },
        deleteButton: {
            componentType: ButtonComponent,
            componentData: {
                text: 'Удалить аватар',
                className: 'subscribe-button',
                dataAction: 'deleteAvatar',
            }
        },
        input: {
            componentType: inputComponent,
            componentData: {
                type: 'file',
                id: 'input-avatar',
                accept: 'image/jpeg',
                class: 'input-avatar',
            }
        }
    },
    leftActiveItem: paths.settings,
    middleActiveItem: '/settings/change/email',
};

export default SettingsData;
