import IModel from '../IModel/IModel';

import type IPaymentLink from '../../Interfaces/PaymentLink/IPaymentLink';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class HeaderModel extends IModel {
    public constructor() {
        super();
    }

    private parsePaymentLink(json: any): IPaymentLink {
        return {
            link: json.link,
        }
    }

    public async getPaymentLink(): Promise<IPaymentLink> {
        const conf = Object.assign({}, config.api.payment);

        const response = await Ajax.ajax(conf);

        const result = this.parsePaymentLink(response.responseBody.body);

        return Promise.resolve(result);
    }
}

export default HeaderModel;
