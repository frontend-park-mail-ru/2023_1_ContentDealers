import IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

interface IFavoritesViewData {
    firstTitle:    string,
    secondTitle:   string,
    contentButton: ButtonComponentData;
    actorsButton:  ButtonComponentData;
}

const FavoritesViewData: IFavoritesViewData = {
    firstTitle: 'Фильмы и сериалы',
    secondTitle: 'Актеры',
    contentButton: {
        text: 'Показать больше',
        className: 'subscribe-button',
        dataAction: 'loadContent',
    },
    actorsButton: {
        text: 'Показать больше',
        className: 'subscribe-button',
        dataAction: 'loadActors',
    }
};

export default FavoritesViewData;
