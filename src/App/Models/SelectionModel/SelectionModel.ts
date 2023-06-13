import IModel from '../IModel/IModel';

import { config } from '../../Config/Config';

import Ajax from '../../Ajax/Ajax';

import type ISelection from '../../Interfaces/Selection/ISelection';
import type IContent from '../../Interfaces/Content/IContent';
import type { ContentType } from '../../Interfaces/Content/IContent';

class SelectionModel extends IModel {
    private selections: ISelection[];

    private views: IContent[];
    private ratings: IContent[];

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

    private parseViews(views: any): IContent[] {
        return views.map((view: any) => {
            return  this.parseSelectionContent(view.content);
        })
    }

    private parseSelectionContents(selectionContents: any): IContent[] {
        return selectionContents.map((selectionContent: any) => {
            return this.parseSelectionContent(selectionContent);
        });
    }

    private parseSelectionsWithRating(selectionsWithRating: any): IContent[] {
        return selectionsWithRating.map((selectionsWithRating: any) => {
            return this.parseSelectionContent(selectionsWithRating.content);
        })
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
            rating: this.parseRating(selectionContent.rating),
            year: selectionContent.year,
            isFree: selectionContent.is_free,
            ageLimit: selectionContent.age_limit,
            trailerURL: selectionContent.trailer_url,
            previewURL: selectionContent.preview_url,
            type: <ContentType>selectionContent.type,
        };
    }

    private parseRating(rating: string): string {
        let transformedRating: string;
        if (Number.isInteger(rating)) {
            transformedRating = parseInt(rating).toFixed(1);
        } else {
            transformedRating = rating;
        }

        return transformedRating;
    }

    private receiveContentHref(id: number, type: ContentType): string {
        return type === 'film' ? `/${type}s/${id}` : `/${type}/${id}`;
    }

    public async getSelections(): Promise<ISelection[]> {
        const response = await Ajax.ajax(config.api.selections);
        await Ajax.checkResponseStatus(response, config.api.selections);

        this.selections = this.parseSelections(response.responseBody.body.selections);

        return Promise.resolve(this.selections);
    }

    public async getViews(): Promise<IContent[]> {
        const conf = Object.assign({}, config.api.views);

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.views = this.parseViews(response.responseBody.body.content_with_views);

        return Promise.resolve(this.views);
    }

    public async getRating(): Promise<IContent[]> {
        const conf = Object.assign({}, config.api.rating);

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.ratings = this.parseSelectionsWithRating(response.responseBody.body.content_with_ratings);

        return Promise.resolve(this.ratings);
    }
}

export default SelectionModel;
