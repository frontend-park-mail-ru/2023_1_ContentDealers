import IModel from '../IModel/IModel';

import { IFilm, parseFilm } from './IFilm';
import { IPerson } from '../PersonModel/IPerson';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class FilmModel extends IModel {
    constructor() {
        super();
    };

    private getFilmActors(persons: IPerson[]): IPerson[] {
        return persons.filter(person => person.role === 'ACTOR');
    }

    private getFilmDirectors(persons: IPerson[]): IPerson[] {
        return persons.filter(person => person.role === 'DIRECTOR');
    }

    public async getFilm(id: number) {
        let conf = Object.assign({}, config.api.film);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        console.log('Film body', response.responseBody.body);
        const filmData = await parseFilm(response.responseBody.body.film);
        filmData.actors = this.getFilmActors(filmData.persons);
        filmData.directors = this.getFilmDirectors(filmData.persons);

        return Promise.resolve(filmData);
    };
}

export { IFilm, FilmModel };
