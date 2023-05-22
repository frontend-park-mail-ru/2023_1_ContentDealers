import IModel from '../IModel/IModel';

import { config } from '../../Config/Config';

import Ajax from '../../Ajax/Ajax';

import type ISelection from '../../Interfaces/Selection/ISelection';
import type IContent from '../../Interfaces/Content/IContent';
import type { ContentType } from '../../Interfaces/Content/IContent';

class SelectionModel extends IModel {
    private selections: ISelection[];

    private views: IContent[];

    public constructor() {
        super();
    }

    private parseSelections(json: any): ISelection[] {
        return json.map((selection: any) => {
            return this.parseSelection(selection);
        });
    }

    private parseSelection(selection: any): ISelection {
        return {
            id: selection.id,
            title: selection.title,
            contents: this.parseSelectionContents(selection.content),

            href: `/selections/${selection.id}`,
        };
    }

    private parseSelectionContents(selectionContents: any): IContent[] {
        return selectionContents.map((selectionContent: any) => {
            return this.parseSelectionContent(selectionContent);
        });
    }

    private parseSelectionContent(selectionContent: any): IContent {
        return {
            href: this.receiveContentHref(
                selectionContent.id as number,
                selectionContent.type as ContentType
            ),
            id: selectionContent.id,
            title: selectionContent.title,
            description: selectionContent.description,
            rating: selectionContent.rating,
            year: selectionContent.year,
            isFree: selectionContent.is_free,
            ageLimit: selectionContent.age_limit,
            trailerURL: selectionContent.trailer_url,
            previewURL: selectionContent.preview_url,
            type: <ContentType>selectionContent.type,
        };
    }

    private receiveContentHref(id: number, type: ContentType): string {
        return type === 'film' ? `/${type}s/${id}` : `/${type}/${id}`;
    }

    public async getSelections(): Promise<ISelection[]> {
        const response = await Ajax.ajax(config.api.selections);
        await Ajax.checkResponseStatus(response, config.api.selections);

        this.selections = this.parseSelections(response.responseBody.body.selections);
        console.log(this.selections);

        return Promise.resolve(this.selections);
    }

    public async getViews(): Promise<IContent[]> {
        const conf = Object.assign({}, config.api.views);

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.views = this.parseSelectionContents(response.responseBody.body.content);

        return Promise.resolve(this.views);
    }
}

export default SelectionModel;
