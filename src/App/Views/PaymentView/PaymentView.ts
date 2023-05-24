import IView from '../IView/IView';

import PaymentTemplate from './PaymentView.hbs';

import './PaymentView.css';

import { PaymentViewSuccessData, PaymentViewFailureData } from './PaymentViewConfig';

class PaymentView extends IView {
    public constructor(parent: HTMLElement) {
        super(parent, PaymentTemplate({}));
    }

    public fillData(isSuccess: boolean): void {
        this.element.innerHTML = PaymentTemplate(isSuccess ? PaymentViewSuccessData : PaymentViewFailureData);
    }
}

export default PaymentView;
