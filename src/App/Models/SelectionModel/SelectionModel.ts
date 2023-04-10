import IModel from '../IModel/IModel';

import { config } from "../../Config/Config";

import Ajax from "../../Ajax/Ajax";

import { parseSelections } from "./ISelection";

class SelectionModel extends IModel {
    constructor() {
        super();
    };

    public async getSelections() {
        const response = await Ajax.ajax(config.api.selections);
        await Ajax.checkResponseStatus(response, config.api.selections);

        const selectionData = await parseSelections(response.responseBody.body.selections);

        return Promise.resolve(selectionData);
    };
}

export default SelectionModel;
