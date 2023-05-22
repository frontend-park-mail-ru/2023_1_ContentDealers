import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponent from '../../Components/ListComponent/ListComponent';
import type ListComponentData from '../../Components/ListComponent/ListComponentData';

import LinkComponent from '../../Components/Link/LinkComponent';
import type LinkComponentData from '../../Components/Link/LinkComponentData';

import VerticalSpacerComponent from '../../Components/VerticalSpacerComponent/VerticalSpacerComponent';
import type VerticalSpacerComponentData from '../../Components/VerticalSpacerComponent/VerticalSpacerComponentData';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import InputComponent from '../../Components/InputComponent/InputComponent';
import type InputComponentData from '../../Components/InputComponent/InputComponentData';

interface IProfileConfig {
    signIn: IComponentDataWithType<LinkComponent, LinkComponentData>;
    logged: IComponentDataWithType<LinkComponent, LinkComponentData>;

    [key: string]: IComponentDataWithType<LinkComponent, LinkComponentData>;
}

interface IHeaderConfig {
    navData: {
        logo: IComponentDataWithType<LinkComponent, LinkComponentData>;
        actions: IComponentDataWithType<
            ListComponent<LinkComponent, LinkComponentData>,
            ListComponentData<LinkComponent, LinkComponentData>
        >;
    };

    navRightData: [
        search: IComponentDataWithType<LinkComponent, LinkComponentData>,
        spacer: IComponentDataWithType<VerticalSpacerComponent, VerticalSpacerComponentData>,
        subscrideButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>,
        spacer: IComponentDataWithType<VerticalSpacerComponent, VerticalSpacerComponentData>
    ];

    inputData: IComponentDataWithType<InputComponent, InputComponentData>;

    profileData: IProfileConfig;
}

const HeaderData: IHeaderConfig = {
    navData: {
        logo: {
            componentType: LinkComponent,
            componentData: {
                classes: 'header__logo logo-link',
                img: {
                    src: '/img/logo/logo.svg',
                    classes: 'logo-img',
                },
            },
        },
        actions: {
            componentType: ListComponent,
            componentData: {
                listClass: 'header__items',
                itemClass: 'header__item header-item',
                items: [
                    {
                        componentData: {
                            href: '/',
                            classes: 'header-item__link',
                            text: 'Главная',
                        },
                        componentType: LinkComponent,
                    },
                    // TODO: return
                    // {
                    //     componentData: {
                    //         href: '/catalog',
                    //         classes: 'header-item__link',
                    //         text: 'Каталог',
                    //     },
                    //     componentType: LinkComponent,
                    // },
                    // {
                    //     componentData: {
                    //         href: '/store',
                    //         classes: 'header-item__link',
                    //         text: 'Магазин',
                    //     },
                    //     componentType: LinkComponent,
                    // },
                    {
                        componentData: {
                            href: '/my-movie',
                            classes: 'header-item__link',
                            text: 'Моё',
                        },
                        componentType: LinkComponent,
                    },
                ],
            },
        },
    },

    navRightData: [
        {
            componentType: LinkComponent,
            componentData: {
                dataAction: 'search',
                classes: 'flex-center header-link_img',
                img: {
                    src: '/img/icons/search.svg',
                    classes: 'search-img',
                },
            },
        },
        {
            componentType: VerticalSpacerComponent,
            componentData: {
                size: 24,
            },
        },
        {
            componentData: {
                text: 'Купить подписку',
                className: 'subscribe-button',
            },
            componentType: ButtonComponent,
        },
        {
            componentType: VerticalSpacerComponent,
            componentData: {
                size: 24,
            },
        },
    ],

    inputData: {
        componentType: InputComponent,
        componentData: {
            class: 'ml-100',
            inputClass: 'input-field__search',
            type: 'text',
            id: 'query',
            autocomplete: false,
            placeholder: 'Название фильма, сериала или имя актёра, режиссёра',
        },
    },

    profileData: {
        signIn: {
            componentType: LinkComponent,
            componentData: {
                href: '/signIn',
                classes: 'header-link_img signIn-link',
                text: 'Войти',
                img: {
                    src: '/img/icons/circle-user.svg',
                    classes: 'signIn-img',
                },
            },
        },
        logged: {
            componentType: LinkComponent,
            componentData: {
                href: '/settings',
                img: {
                    src: '/img/profile/profile.jpg',
                    classes: 'avatar-img',
                },
            },
        },
    },
};

export default HeaderData;
