import IModel from '../IModel/IModel';

import { config } from "../../Config/Config";

import Ajax from "../../Ajax/Ajax";

import type ISelection from '../../Interfaces/Selection/ISelection';
import type IContent from '../../Interfaces/Content/IContent';

class SelectionModel extends IModel {
    constructor() {
        super();
    };

    private parseSelections(json: any): ISelection[] {
        return json.map((selection: any) => {
            return this.parseSelection(selection);
        })
    }

    private parseSelection(selection: any): ISelection {
        return {
            id:         selection.id,
            title:      selection.title,
            content:    this.parseSelectionContents(selection.content),
        };
    };

    private parseSelectionContents(selectionContents: any): IContent[] {
        return selectionContents.map((selectionContent: any) => {
           return this.parseSelectionContent(selectionContent);
        });
    };

    private parseSelectionContent(selectionContent: any): IContent {
        return {
            id:             selectionContent.id,
            title:          selectionContent.title,
            description:    selectionContent.description,
            rating:         selectionContent.rating,
            year:           selectionContent.year,
            isFree:         selectionContent.is_free,
            ageLimit:       selectionContent.age_limit,
            trailerURL:     selectionContent.trailer_url,
            previewURL:     selectionContent.preview_url,
            type:           this.parseContentType(selectionContent.type),
        };
    };

    private parseContentType(type: string): string {
        return (type === 'film') ? `${type}s` : type;
    };

    public async getSelections() {
        const response = await Ajax.ajax(config.api.selections);
        await Ajax.checkResponseStatus(response, config.api.selections);

        const selectionData = this.parseSelections(response.responseBody.body.selections);

        return Promise.resolve(selectionData);
    };
}

export default SelectionModel;
