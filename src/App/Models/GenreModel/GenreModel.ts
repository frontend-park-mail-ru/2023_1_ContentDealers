import IModel from "../IModel/IModel";

import type IContentSearch from "../../Interfaces/ContentSearch/IContentSearch";
import type IGrid from '../../Interfaces/Grid/IGrid';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class FavoritesModel extends IModel {
    constructor() {
        super();
    };

    private parseData(json: any): IGrid {
        return {
            title:       json.title,
            content:     this.parseContent(json.content),
        }
    };

    private parseContent(content: any): IContentSearch[] {
        return content.map((item: any) => {
            return this.parseContentItem(item);
        });
    };

    private parseContentItem(item: any): IContentSearch {
        return {
            contentId:        item.id,
            src:              item.preview_url,
            title:            item.title,
            isSerial:         item.type == 'series',
        };
    };

    public async getSelectionsContent(id: number) {
        let conf = Object.assign({}, config.api.selectionsById);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const content = this.parseData(response.responseBody.body.selection);

        return Promise.resolve(content);
    };

    public async getGenreContent(id: number) {
          let conf = Object.assign({}, config.api.genres);
          conf.url = conf.url.replace('{:id}', id.toString());

          const response = await Ajax.ajax(conf);
          await Ajax.checkResponseStatus(response, conf);

          const content = this.parseData(response.responseBody.body);

          return Promise.resolve(content);
    };
}

export default FavoritesModel;
