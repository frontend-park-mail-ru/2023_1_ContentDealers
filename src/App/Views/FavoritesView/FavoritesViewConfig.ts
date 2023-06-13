import type IComponentDataWithType from '../../Interfaces/interfaces';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

interface IFavoritesViewData {
    firstTitle: string;
    secondTitle: string;
    forFavorites: boolean;
    isEmpty?: boolean;
    contentButton: ButtonComponentData;
    actorsButton: ButtonComponentData;
    emptyButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
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
    emptyButton: {
        componentType: ButtonComponent,
        componentData: {
            text: 'На главную',
            className: 'subscribe-button',
            dataAction: 'goToMain',
        }
    },
};

export default FavoritesViewData;
