import IView from '../IView/IView';

import PaymentTemplate from './PaymentView.hbs';

import './PaymentView.css';

import { PaymentViewSuccessData, PaymentViewFailureData } from './PaymentViewConfig';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

class PaymentView extends IView {
    private homeButton: ButtonComponent;

    public constructor(parent: HTMLElement) {
        super(parent, PaymentTemplate({}));
    }

    public fillData(isSuccess: boolean): void {
        if (isSuccess) {
            this.element.innerHTML = PaymentTemplate(PaymentViewSuccessData);
            this.homeButton = new PaymentViewSuccessData.button.componentType(
                <HTMLElement>this.element.querySelector('.js-payment'),
                PaymentViewSuccessData.button.componentData
            );
        } else {
            this.element.innerHTML = PaymentTemplate(PaymentViewFailureData);
            this.homeButton = new PaymentViewFailureData.button.componentType(
                <HTMLElement>this.element.querySelector('.js-payment'),
                PaymentViewFailureData.button.componentData
            );
        }

        this.homeButton.show();
    }

    public bindHomeButtonClick(listener: any): void {
        this.homeButton.bindClickEvent(listener);
    }
}

export default PaymentView;
