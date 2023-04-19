import IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

interface INotFoundData {
    homeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
}

const NotFoundData: INotFoundData = {
    homeButton: {
        componentType: ButtonComponent,
        componentData: { className: 'home-button', text: 'Вернуться на главную'},
    },
};

export default NotFoundData;
