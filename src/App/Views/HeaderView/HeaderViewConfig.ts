import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import VerticalSpacerComponent from '../../Components/VerticalSpacerComponent/VerticalSpacerComponent';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import ListComponent from '../../Components/ListComponent/ListComponent';
import DropdownButtonComponent from '../../Components/DropdownButtonComponent/DropdownButtonComponent';

import '../../Components/Css/HeaderActionList/HeaderActionList.css';
import '../../Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css';
import '../../Components/Css/HeaderSignIn/HeaderSignIn.css';

import IComponentDataWithType from '../../Interfaces/interfaces';

interface IHeaderData {
    leftItems: IComponentDataWithType[];
    actionsList: IComponentDataWithType;
    rightItems: IComponentDataWithType[];
    profile: IComponentDataWithType;
    signIn: IComponentDataWithType;

    [key: string]: IComponentDataWithType | IComponentDataWithType[];
};

const HeaderData: IHeaderData = {
    leftItems: [
        {
            componentData: {
                linkHref: '/',
                linkClass: 'logo',
                linkImageSrc: '/img/logo/logo.svg',
                linkImageWidth: '40px',
            },
            componentType: LinkComponent,
        },
    ],
    actionsList: {
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
                {
                    componentData:
                        {
                            linkHref: '/catalog',
                            linkClass: 'header-container-action__link',
                            linkText: 'Каталог',
                            linkTextClass: 'header-container-action-link__text',
                        },
                    componentType: LinkComponent
                },
                {
                    componentData:
                        {
                            linkHref: '/store',
                            linkClass: 'header-container-action__link',
                            linkText: 'Магазин',
                            linkTextClass: 'header-container-action-link__text',
                        },
                    componentType: LinkComponent
                },
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
        },
        componentType: ListComponent,
    },
    rightItems: [
        {
            componentData: {
                linkHref: '#',
                linkClass: 'search',
                linkImageSrc: '/img/icons/search.svg',
                linkImageWidth: '24px',
            },
            componentType: LinkComponent,
        },
        {
            componentData: {
                size: '24',
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
                size: '24',
            },
            componentType: VerticalSpacerComponent,
        },
    ],
    profile: {
        componentData: {
            dataAction: 'profile',
            avatar: '/img/profile/profile.jpg',
            items: [
                {
                    linkHref: '/settings',
                    linkClass: 'profile-link',
                    linkImageSrc: '/img/icons/settings.svg',
                    linkImageClass: 'profile-link__image',
                    linkImageWidth: '24px',
                    linkText: 'Настройки',
                    linkTextClass: 'profile-link__text',
                },
            ],
        },
        componentType: DropdownButtonComponent,
    },
    signIn: {
        componentData: {
            dataAction: 'signIn',
            linkHref: '/signIn',
            linkClass: 'header__signIn-link',
            linkImageSrc: '/img/icons/circle-user.svg',
            linkImageWidth: '30px',
            linkText: 'Войти',
        },
        componentType: LinkComponent,
    },
};

export default HeaderData;
