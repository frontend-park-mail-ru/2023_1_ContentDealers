import IModel from '../IModel/IModel';

import { parsePerson } from './IPerson';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class PersonModel extends IModel {
    constructor() {
        super();
    };

    public async getPerson(id: number) {
        let conf = Object.assign({}, config.api.person);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const personData = await parsePerson(response.responseBody.body.film);

        return Promise.resolve(personData);
    };
}

export default PersonModel;
