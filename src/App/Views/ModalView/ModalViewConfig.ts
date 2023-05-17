import type IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

interface IModalRightData {
    title: string;
    closeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;
}

const ModalRightData: IModalRightData = {
    title: 'Вход или регистрация',
    closeButton: {
        componentType: ButtonComponent,
        componentData: {
            colorClass: 'gradient-button--grey',
            imgSrc: '/img/icons/close.svg',
            imgWidth: '22px',
        },
    },
};

export default ModalRightData;
