import type IComponentDataWithType from '../../Interfaces/interfaces';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

interface IPaymentViewData {
    src:             string,
    status:          string,
    description:     string,
    button:          IComponentDataWithType<ButtonComponent, ButtonComponentData>
}

const PaymentViewSuccessData: IPaymentViewData = {
    src: 'success.svg',
    status: 'Подписка оформлена',
    description: 'Доступ к контенту появится в течение нескольких минут',
    button: {
        componentType: ButtonComponent,
        componentData: {
            text: 'Перейти к просмотру',
            className: 'subscribe-button',
        }
    },
}

const PaymentViewFailureData: IPaymentViewData = {
    src: 'failure.svg',
    status: 'Произошла ошибка оплаты',
    description: 'Попробуйте позже',
    button: {
        componentType: ButtonComponent,
        componentData: {
            text: 'На главную',
            className: 'subscribe-button',
        }
    },
}

export { PaymentViewSuccessData, PaymentViewFailureData };
