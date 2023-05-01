import IModel from "../IModel/IModel";

import IContentSearch from "../../Interfaces/ContentSearch/IContentSearch";

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class FavoritesModel extends IModel {
    constructor() {
        super();
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

    public async getGenreContent(id: number) {
          let conf = Object.assign({}, config.api.genres);
          conf.url = conf.url.replace('{:id}', id.toString());

          const response = await Ajax.ajax(conf);
          await Ajax.checkResponseStatus(response, conf);

          const content = this.parseContent(response.responseBody.body.content);

          return Promise.resolve(content);
    };
}

export default FavoritesModel;
