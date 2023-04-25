import IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';


interface IFilmData {
    trailerButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    subscribeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
}

const FilmData: IFilmData = {
    subscribeButton:
        {
            componentData: {
                text: 'Оформить подписку',
                className: 'subscribe-button',
                dataAction: 'subscribe',
            },
            componentType: ButtonComponent,
        },
    trailerButton:
        {
            componentData: {
                text: 'Трейлер',
                colorClass: 'gradient-button--grey',
                className: 'trailer-button',
                dataAction: 'trailer',
            },
            componentType: ButtonComponent,
        },
};

export default FilmData;
