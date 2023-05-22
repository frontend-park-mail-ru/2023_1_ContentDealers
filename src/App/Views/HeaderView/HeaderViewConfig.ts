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

    tmpLogoData: IComponentDataWithType<LinkComponent, LinkComponentData>;
    tmpData: IComponentDataWithType<LinkComponent, LinkComponentData>[];

    tmpActions: IComponentDataWithType<ListComponent<LinkComponent, LinkComponentData>, ListComponentData<LinkComponent, LinkComponentData>>;
}

const HeaderData: IHeaderConfig = {
    navData: {
        logo: {
            componentType: LinkComponent,
            componentData: {
                classes: 'header__logo header-logo',
                img: {
                    src: '/img/logo/logo.svg',
                    classes: 'header-logo__img',
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
                dataAction: 'subscribe',
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
                classes: 'header__item header-item__link header-item__link_img',
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


    tmpLogoData: {
        componentType: LinkComponent,
        componentData: {
            href: '/',
            classes: 'tmp-header__logo tmp-header-logo',
            img: {
                src: '/img/logo/logo.svg',
                classes: 'tmp-header-logo__img',
            },
        },
    },

    tmpData: [
        {
            componentType: LinkComponent,
            componentData: {
                classes: 'tmp-header__search tmp-header-search',
                dataAction: 'search',
                img: {
                    src: '/img/icons/search.svg',
                    classes: 'tmp-header-search__img',
                },
            },
        },
        {
            componentType: LinkComponent,
            componentData: {
                href: '/signIn',
                classes: 'tmp-header__login tmp-header-login',
                img: {
                    src: '/img/icons/circle-user.svg',
                    classes: 'tmp-header-login__img',
                },
            },
        },
        {
            componentType: LinkComponent,
            componentData: {
                classes: 'tmp-header__bars tmp-header-bars',
                dataAction: 'bars',
                img: {
                    src: '/img/icons/bars.svg',
                    classes: 'tmp-header-bars__img',
                },
            },
        },
    ],

    tmpActions: {
        componentType: ListComponent,
        componentData: {
            listClass: 'tmp-header__items',
            itemClass: 'tmp-header__item tmp-header-item',
            items: [
                {
                    componentData: {
                        href: '/',
                        classes: 'tmp-header-item__link tmp-header-item__link_active', // TODO
                        text: 'Главная',
                    },
                    componentType: LinkComponent,
                },
                // TODO: return
                // {
                //     componentData: {
                //         href: '/catalog',
                //         classes: 'tmp-header-item__link',
                //         text: 'Каталог',
                //     },
                //     componentType: LinkComponent,
                // },
                // {
                //     componentData: {
                //         href: '/store',
                //         classes: 'tmp-header-item__link',
                //         text: 'Магазин',
                //     },
                //     componentType: LinkComponent,
                // },
                {
                    componentData: {
                        href: '/my-movie',
                        classes: 'tmp-header-item__link',
                        text: 'Моё',
                    },
                    componentType: LinkComponent,
                },
            ],
        }
    }
};

export default HeaderData;
