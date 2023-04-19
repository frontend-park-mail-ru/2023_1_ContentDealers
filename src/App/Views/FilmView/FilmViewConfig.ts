import IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';


interface IFilmData {
    trailerButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
    subscribeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
}

const FilmData: IFilmData = {
    trailerButton:
        {
            componentData: {
                text: 'Оформить подписку',
                className: 'trailer-button',
                dataAction: 'subscribe',
            },
            componentType: ButtonComponent,
        },
    subscribeButton:
        {
            componentData: {
                text: 'Трейлер',
                className: 'subscribe-button',
                dataAction: 'trailer',
            },
            componentType: ButtonComponent,
        },
};

export default FilmData;
