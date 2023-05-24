import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

interface IFavoritesViewData {
    firstTitle: string;
    secondTitle: string;
    forFavorites: boolean;
    contentButton: ButtonComponentData;
    actorsButton: ButtonComponentData;
}

const FavoritesViewData: IFavoritesViewData = {
    firstTitle: 'Фильмы и сериалы',
    secondTitle: 'Актеры',
    forFavorites: true,
    contentButton: {
        text: 'Показать больше',
        className: 'subscribe-button',
        dataAction: 'loadContent',
    },
    actorsButton: {
        text: 'Показать больше',
        className: 'subscribe-button',
        dataAction: 'loadActors',
    },
};

export default FavoritesViewData;
