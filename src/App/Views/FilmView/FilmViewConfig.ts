import type IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

interface IFilmData {
    trailerButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    subscribeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    filmButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    favoritesLink: IComponentDataWithType<LinkComponent, LinkComponentData>;
}

const FilmData: IFilmData = {
    subscribeButton: {
        componentData: {
            text: 'Оформить подписку',
            className: 'subscribe-button',
            dataAction: 'subscribe',
        },
        componentType: ButtonComponent,
    },
    filmButton: {
        componentData: {
            text: 'Смотреть',
            // colorClass: 'gradient-button--grey',
            className: 'film-button',
            dataAction: 'film',
        },
        componentType: ButtonComponent,
    },
    trailerButton: {
        componentData: {
            text: 'Трейлер',
            colorClass: 'gradient-button--grey',
            className: 'trailer-button',
            dataAction: 'trailer',
        },
        componentType: ButtonComponent,
    },
    favoritesLink: {
        componentData: {
            linkClass: 'favorites',
            dataAction: 'addToFavorites',
            linkImageSrc: '/img/icons/bookmark-regular.svg',
        },
        componentType: LinkComponent,
    },
};

export default FilmData;
