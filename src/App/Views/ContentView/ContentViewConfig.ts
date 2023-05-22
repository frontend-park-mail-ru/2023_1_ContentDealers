import type IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

interface IContentData {
    trailerButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    subscribeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    watchButtonFree: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    watchButtonPay: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    favoritesLink: IComponentDataWithType<LinkComponent, LinkComponentData>;
}

const ContentData: IContentData = {
    subscribeButton: {
        componentData: {
            text: 'Оформить подписку',
            className: 'subscribe-button',
            dataAction: 'subscribe',
        },
        componentType: ButtonComponent,
    },
    trailerButton: {
        componentData: {
            text: 'Трейлер',
            colorClass: 'gradient-button--grey',
            className: 'trailer-button',
        },
        componentType: ButtonComponent,
    },
    watchButtonFree: {
        componentData: {
            text: 'Смотреть',
            colorClass: 'gradient-button--grey',
            className: 'film-button',
        },
        componentType: ButtonComponent,
    },
    watchButtonPay: {
        componentData: {
            text: 'Смотреть по подписке',
            colorClass: 'gradient-button--grey',
            className: 'film-button',
        },
        componentType: ButtonComponent,
    },
    favoritesLink: {
        componentData: {
            linkClass: 'favorites',
            linkImageSrc: '/img/icons/bookmark-regular.svg',
        },
        componentType: LinkComponent,
    },
};

export default ContentData;
