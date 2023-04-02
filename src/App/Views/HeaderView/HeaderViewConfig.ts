import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import VerticalSpacerComponent from '../../Components/VerticalSpacerComponent/VerticalSpacerComponent';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

import ListComponent from '../../Components/ListComponent/ListComponent';
import '../../Components/Css/HeaderActionList/HeaderActionList.css';

import DropdownButtonComponent from '../../Components/DropdownButtonComponent/DropdownButtonComponent';
import '../../Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css';

import IComponentDataWithType from '../../Interfaces/interfaces';

interface IHeaderData {
    leftSide: IComponentDataWithType;
    actionsList: IComponentDataWithType;
    rightSide: IComponentDataWithType[];
    profile: IComponentDataWithType;
};

const HeaderData: IHeaderData = {
    leftSide: {
        componentData: {
            linkHref: '/',
            linkClass: 'logo',
            linkImageSrc: '/img/logo/logo.svg',
            linkImageWidth: '40px',

        },
        componentType: LinkComponent,
    },
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
    rightSide: [
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
    }
};

export default HeaderData;
