import IModel from '../IModel/IModel';

import type IActorSearch from '../../Interfaces/ActorSearch/IActorSearch';
import type IContentSearch from '../../Interfaces/ContentSearch/IContentSearch';
import type ISearch from '../../Interfaces/Search/ISearch';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class FavoritesModel extends IModel {
    public constructor() {
        super();
    }

    private parseContent(content: any): IContentSearch[] {
        return content.map((item: any) => {
            return this.parseContentItem(item);
        });
    }

    private parseContentItem(item: any): IContentSearch {
        return {
            contentId: item.id,
            src: item.preview_url,
            title: item.title,
            isSerial: item.type == 'series',
        };
    }

    private parseActors(actors: any): IActorSearch[] {
        return actors.map((actor: any) => {
            return this.parseActor(actor);
        });
    }

    private parseActor(actor: any): IActorSearch {
        return {
            personId: actor.id,
            name: actor.name,
            description: actor.birthplace,
        };
    }

    public async getFavoritesContent(order: string): Promise<IContentSearch[]> {
        const conf = Object.assign({}, config.api.favoritesContent);
        conf.url = conf.url.replace('{order}', order);

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const favoritesContent = this.parseContent(response.responseBody.body.content);

        return Promise.resolve(favoritesContent);
    }

    // public async getFavoritesActors() {
    //
    // }

    private parseSearchResult(json: any): ISearch {
        return {
            content: this.parseContentForSearch(json.content.content),
            actors: this.parseActorsForSearch(json.persons.persons),
        };
    }

    private parseContentForSearch(content: any): IContentSearch[] {
        return content.map((item: any) => {
            return this.parseContentItemForSearch(item);
        });
    }

    private parseContentItemForSearch(item: any): IContentSearch {
        return {
            contentId: item.id,
            src: item.preview_url,
            title: item.title,
            isSerial: item.type == 'series',
        };
    }

    private parseActorsForSearch(actors: any): IActorSearch[] {
        return actors.map((actor: any) => {
            return this.parseActorForSearch(actor);
        });
    }

    private parseActorForSearch(actor: any): IActorSearch {
        return {
            personId: actor.id,
            name: actor.name,
            description: actor.birthplace,
        };
    }

    public async getSearchResult(query: string): Promise<ISearch> {
        const conf = Object.assign({}, config.api.search);
        conf.url = conf.url.replace('{query}', query);
        conf.url = conf.url.replace('{limit}', '20');

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const searchResult = this.parseSearchResult(response.responseBody.body.search);

        return Promise.resolve(searchResult);
    }
}

export default FavoritesModel;
