import IModel from '../IModel/IModel';

import IFilm from '../../Interfaces/Film/IFilm';
import IContent from '../../Interfaces/Content/IContent';
import IPerson from '../../Interfaces/Person/IPerson';
import IRole from '../../Interfaces/Role/IRole';
import IGenre from '../../Interfaces/Genre/IGenre';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';
import IFavoritesAddDelete from '../../Interfaces/FavoritesAddDelete/IFavoritesAddDelete';

class FilmModel extends IModel {
    constructor() {
        super();
    };

    private parseFilm(json: any): IFilm {
        return {
            id:         json.id,
            contentURL: json.content_url,

            content:    this.parseContentForFilm(json.content),
        };
    };

    private parseContentForFilm(content: any): IContent {
        return {
            id:             content.id,
            title:          content.title,
            description:    content.description,
            rating:         content.rating,
            year:           content.year,
            persons:        this.parsePersonsForFilm(content.persons_roles),
            isFree:         content.is_free,
            ageLimit:       content.age_limit,
            trailerURL:     content.trailer_url,
            previewURL:     content.preview_url,
            type:           content.type,
            genres:         this.parseGenresForFilm(content.genres),
        };
    };

    private parsePersonsForFilm(personsWithRoles: any): IPerson[] {
        return personsWithRoles.map((personWithRole: any) => {
            return this.parsePersonForFilm(personWithRole);
        });
    };

    private parsePersonForFilm(personWithRole: any): IPerson {
        return {
          id:   personWithRole.person.id,
          name: personWithRole.person.name,
          role: personWithRole.role.title,
        };
    };

    private parseGenresForFilm(genres: any): IGenre[] {
        return genres.map((genre: any) => {
            return this.parseGenreForFilm(genre);
        });
    };

    private parseGenreForFilm(genre: any): IGenre {
        return {
            id: genre.id,
            name: genre.name,
        };
    };

    private getFilmActors(persons: IPerson[]): IPerson[] {
        const actorRole: IRole = { id: 0, title: 'ACTOR' };
        return persons.filter(person => person.role === actorRole.title);
    };

    private getFilmDirectors(persons: IPerson[]): IPerson[] {
        const directorRole: IRole = { id: 0, title: 'DIRECTOR' };
        return persons.filter(person => person.role === directorRole.title);
    };

    public async getFilm(id: number) {
        let conf = Object.assign({}, config.api.film);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const filmData = this.parseFilm(response.responseBody.body.film);

        if (filmData.content) {
            filmData.content.actors = this.getFilmActors(filmData.content.persons || []);
            filmData.content.directors = this.getFilmDirectors(filmData.content.persons || []);
        }

        return Promise.resolve(filmData);
    };

    public async getFavoritesStatus(filmId: string) {
        let conf = Object.assign({}, config.api.favoritesContentHas);

        conf.url = conf.url.replace('{:id}', filmId);

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        return Promise.resolve(response.responseBody.body.has);
    };

    public async deleteFromFavorites(data: IFavoritesAddDelete) {
        let conf = Object.assign({}, config.api.favoritesContentDelete);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        return Promise.resolve(response.status);
    };

    public async addToFavorites(data: IFavoritesAddDelete) {
        let conf = Object.assign({}, config.api.favoritesContentAdd);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        return Promise.resolve(response.status);
    };
}

export default FilmModel;
