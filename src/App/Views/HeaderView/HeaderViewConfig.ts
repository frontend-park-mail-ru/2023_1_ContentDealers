import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponent from '../../Components/ListComponent/ListComponent';
import type ListComponentData from '../../Components/ListComponent/ListComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

import VerticalSpacerComponent from '../../Components/VerticalSpacerComponent/VerticalSpacerComponent';
import type VerticalSpacerComponentData from '../../Components/VerticalSpacerComponent/VerticalSpacerComponentData';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import DropdownButtonComponent from '../../Components/DropdownButtonComponent/DropdownButtonComponent';
import type DropdownButtonComponentData from '../../Components/DropdownButtonComponent/DropdownButtonComponentData';

import InputComponent from '../../Components/InputComponent/InputComponent';
import type InputComponentData from '../../Components/InputComponent/InputComponentData';

interface IHeaderData {
    logo: IComponentDataWithType<LinkComponent, LinkComponentData>;
    input: IComponentDataWithType<InputComponent, InputComponentData>;
    actions: IComponentDataWithType<ListComponent<LinkComponent, LinkComponentData>, ListComponentData<LinkComponent, LinkComponentData>>;
    items: (IComponentDataWithType<LinkComponent, LinkComponentData> | IComponentDataWithType<VerticalSpacerComponent, VerticalSpacerComponentData> | IComponentDataWithType<ButtonComponent, ButtonComponentData>)[];
    profile: IComponentDataWithType<DropdownButtonComponent, DropdownButtonComponentData>;
    signIn: IComponentDataWithType<LinkComponent, LinkComponentData>;

    [key: string]: IComponentDataWithType<any, any> | IComponentDataWithType<any, any>[]; // TODO enum all types?
}

const HeaderData: IHeaderData = {
    logo: {
        componentType: LinkComponent,
        componentData: {
            linkHref: '/',
            linkClass: 'logo',
            linkImageSrc: '/img/logo/logo.svg',
            linkImageWidth: '40px',
        }
    },
    input: {
        componentType: InputComponent,
        componentData: {
            inputClass: 'input-field__search',
            type: 'text',
            id: 'query',
            autocomplete: false,
            placeholder: 'Название фильма, сериала или имя актёра, режиссёра',
        }
    },
    actions: {
        componentType: ListComponent,
        componentData: {
            listClass: 'header-container__action-list',
            itemClass: 'header-container-action',
            items: [
                {
                    componentData:
                        {
                            linkHref: '/',
                            linkClass: 'header-container-action__link',
                            linkText: 'Главная',
                            linkTextClass: 'header-container-action-link__text',
                        },
                    componentType: LinkComponent
                },
                // TODO: return
                // {
                //     componentData:
                //         {
                //             linkHref: '/catalog',
                //             linkClass: 'header-container-action__link',
                //             linkText: 'Каталог',
                //             linkTextClass: 'header-container-action-link__text',
                //         },
                //     componentType: LinkComponent
                // },
                // {
                //     componentData:
                //         {
                //             linkHref: '/store',
                //             linkClass: 'header-container-action__link',
                //             linkText: 'Магазин',
                //             linkTextClass: 'header-container-action-link__text',
                //         },
                //     componentType: LinkComponent
                // },
                {
                    componentData:
                        {
                            linkHref: '/my-movie',
                            linkClass: 'header-container-action__link',
                            linkText: 'Моё',
                            linkTextClass: 'header-container-action-link__text',
                        },
                    componentType: LinkComponent
                },
            ],

        }
    },
    items: [
        {
            componentData: {
                linkClass: 'search',
                linkImageSrc: '/img/icons/search.svg',
                linkImageWidth: '24px',
                dataAction: 'search',
            },
            componentType: LinkComponent,
        },
        {
            componentData: {
                size: 24,
            },
            componentType: VerticalSpacerComponent,
        },
        {
            componentData: {
                text: 'Купить подписку',
                className: 'subscribe-button',
            },
            componentType: ButtonComponent,
        },
        {
            componentData: {
                size: 24,
            },
            componentType: VerticalSpacerComponent,
        },
    ],
    profile: {
        componentType: DropdownButtonComponent,
        componentData: {
            dataAction: 'profile',
            avatar: '/img/profile/profile.jpg',
            items: [
                {
                    linkHref: '/settings',
                    linkClass: 'link-profile',
                    linkImageSrc: '/img/icons/settings.svg',
                    linkImageClass: 'link-profile__image',
                    linkImageWidth: '24px',
                    linkText: 'Настройки',
                    linkTextClass: 'link-profile__text',
                },
            ],
        }
    },
    signIn: {
        componentType: LinkComponent,
        componentData: {
            dataAction: 'signIn',
            linkHref: '/signIn',
            linkClass: 'header__signIn-link',
            linkImageSrc: '/img/icons/circle-user.svg',
            linkImageWidth: '30px',
            linkText: 'Войти',
        }
    }
}

export default HeaderData;
