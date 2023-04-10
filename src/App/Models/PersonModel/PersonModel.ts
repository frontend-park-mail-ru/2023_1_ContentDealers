import IModel from '../IModel/IModel';

import IPerson from '../../Interfaces/IPerson/IPerson';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';
import IRole from "../../Interfaces/IRole/IRole";
import IGenre from "../../Interfaces/IGenre/IGenre";
import IFilm from "../../Interfaces/IFilm/IFilm";
import IContent from "../../Interfaces/IContent/IContent";

class PersonModel extends IModel {
    constructor() {
        super();
    };

    private parsePerson(json: any): IPerson {
        return {
            id:             json.id,
            name:           json.name,
            gender:         json.gender,
            genres:         this.parseGenres(json.genres),
            growth:         json.growth,
            birthPlace:     json.birthplace,
            avatarURL:      json.avatar_url,
            age:            json.age,

            roles:          this.parsePersonRoles(json.roles),
            participatedIn: this.parseParticipatedContents(json.participated_in),
        };
    };

    private parseGenres(genres: any): IGenre[] {
        return genres.map((genre: any) => {
            return this.parseGenre(genre);
        });
    };

    private parseGenre(genre: any): IGenre {
        return {
            id:     genre.id,
            name:   genre.name,
        }
    };

    private parsePersonRoles(roles: any): IRole[] {
        return roles.map((role: any) => {
           return this.parsePersonRole(role);
        });
    };

    private parsePersonRole(role: any): IRole {
        return {
            id:     role.id,
            title:  role.title,
        };
    };

    private parseParticipatedContents(contents: any): IContent[] {
        return contents.map((content: any) => {
            return this.parseParticipatedContent(content);
        });
    };

    private parseParticipatedContent(content: any): IContent {
        return {
            id:     content.id,
            title:  content.title,
        };
    };

    public async getPerson(id: number) {
        let conf = Object.assign({}, config.api.person);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const personData = await this.parsePerson(response.responseBody.body.person);

        return Promise.resolve(personData);
    };
}

export default PersonModel;
