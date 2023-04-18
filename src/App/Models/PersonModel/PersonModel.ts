import IModel from '../IModel/IModel';

import IPerson from '../../Interfaces/Person/IPerson';
import IRole from '../../Interfaces/Role/IRole';
import IGenre from '../../Interfaces/Genre/IGenre';
import IContent from '../../Interfaces/Content/IContent';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class PersonModel extends IModel {
    private genderMap: { [gender: string]: string } = {
        F: 'Женский',
        M: 'Мужской',
    };

    private roleMap: { [role: string]: string } = {
        DIRECTOR:   'Режиссёр',
        COMPOSER:   'Композитор',
        DESIGN:     'Дизайнер',
        EDITOR:     'Редактор',
        ACTOR:      'Актёр',
        OPERATOR:   'Оператор',
        PRODUCER:   'Продюссер',
        WRITER:     'Сценарист',
    };

    constructor() {
        super();
    };

    private parsePerson(json: any): IPerson {
        return {
            id:             json.id,
            name:           json.name,
            gender:         this.transformGender(json.gender),
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
            title:  this.transformRole(role.title),
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

    private transformGender(gender: string): string {
        return this.genderMap[gender];
    };

    private transformRole(role: string): string {
        return this.roleMap[role];
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