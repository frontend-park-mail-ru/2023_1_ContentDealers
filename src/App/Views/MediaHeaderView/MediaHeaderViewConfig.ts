import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponent from '../../Components/ListComponent/ListComponent';
import type ListComponentData from '../../Components/ListComponent/ListComponentData';

import LinkComponent from '../../Components/Link/LinkComponent';
import type LinkComponentData from '../../Components/Link/LinkComponentData';

import InputComponent from '../../Components/InputComponent/InputComponent';
import type InputComponentData from '../../Components/InputComponent/InputComponentData';

interface IProfileConfig {
    signIn: IComponentDataWithType<LinkComponent, LinkComponentData>;
    logged: IComponentDataWithType<LinkComponent, LinkComponentData>;

    [key: string]: IComponentDataWithType<LinkComponent, LinkComponentData>;
}

interface IMediaHeaderConfig {
    logoData: IComponentDataWithType<LinkComponent, LinkComponentData>;

    searchData: IComponentDataWithType<LinkComponent, LinkComponentData>;
    barsData: IComponentDataWithType<LinkComponent, LinkComponentData>;

    actions: IComponentDataWithType<
        ListComponent<LinkComponent, LinkComponentData>,
        ListComponentData<LinkComponent, LinkComponentData>
    >;

    inputData: IComponentDataWithType<InputComponent, InputComponentData>;
    profileData: IProfileConfig;
}

const MediaHeaderData: IMediaHeaderConfig = {
    logoData: {
        componentType: LinkComponent,
        componentData: {
            href: '/',
            classes: 'media-header__logo media-header__link logo-link',
            img: {
                src: '/img/logo/logo.svg',
                classes: 'logo-img',
            },
        },
    },

    searchData: {
        componentType: LinkComponent,
        componentData: {
            classes: 'media-header__link',
            dataAction: 'search',
            img: {
                src: '/img/icons/search.svg',
                classes: 'search-img',
            },
        },
    },
    barsData: {
        componentType: LinkComponent,
        componentData: {
            classes: 'media-header__link',
            dataAction: 'bars',
            img: {
                src: '/img/icons/bars.svg',
                classes: 'bars-img',
            },
        },
    },

    actions: {
        componentType: ListComponent,
        componentData: {
            listClass: 'media-header__items',
            itemClass: 'media-header__item media-header-item',
            items: [
                {
                    componentData: {
                        href: '/',
                        classes: 'media-header-item__link media-header-item__link_active', // TODO
                        text: 'Главная',
                    },
                    componentType: LinkComponent,
                },
                // TODO: return
                // {
                //     componentData: {
                //         href: '/catalog',
                //         classes: 'media-header-item__link',
                //         text: 'Каталог',
                //     },
                //     componentType: LinkComponent,
                // },
                // {
                //     componentData: {
                //         href: '/store',
                //         classes: 'media-header-item__link',
                //         text: 'Магазин',
                //     },
                //     componentType: LinkComponent,
                // },
                {
                    componentData: {
                        href: '/my-movie',
                        classes: 'media-header-item__link',
                        text: 'Моё',
                    },
                    componentType: LinkComponent,
                },
            ],
        },
    },

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
                classes: 'media-header__link',
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
                classes: 'media-header__link',
                img: {
                    src: '/img/profile/profile.jpg',
                    classes: 'avatar-img',
                },
            },
        },
    },
};

export default MediaHeaderData;
