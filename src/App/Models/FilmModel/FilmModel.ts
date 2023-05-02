import IModel from '../IModel/IModel';

import type IFilm from '../../Interfaces/Film/IFilm';
import type IContent from '../../Interfaces/Content/IContent';
import type IPerson from '../../Interfaces/Person/IPerson';
import type IRole from '../../Interfaces/Role/IRole';
import type IEpisode from '../../Interfaces/Episode/IEpisode';
import type ISeries from '../../Interfaces/Series/ISeries';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

class FilmModel extends IModel {
    private title: string | undefined;

    private seriesData: ISeries;

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

    private parseSeries(json: any): ISeries {
        return {
            id:         json.id,

            content:    this.parseContentForFilm(json.content),
            episodes:   this.parseEpisodes(json.episodes),
        };
    };

    private parseEpisodes(episodes: any): IEpisode[] {
        return episodes.map((episode: any) => {
            return this.parseEpisode(episode);
        });
    };

    private parseEpisode(episode: any): IEpisode {
        return {
            id:             episode.id,
            contentURL:     episode.content_url,
            releaseDate:    episode.release_date,
            episodeNum:     episode.episode_num,
            seasonNum:      episode.season_num,
            title:          episode.title,
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
            type:           this.parseContentType(content.type),
        };
    };

    private parseContentType(type: string): string {
        return (type === 'film') ? `${type}s` : type;
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

    private getFilmActors(persons: IPerson[]): IPerson[] {
        const actorRole: IRole = { id: 0, title: 'ACTOR' };
        return persons.filter(person => person.role === actorRole.title);
    }

    private getFilmDirectors(persons: IPerson[]): IPerson[] {
        const directorRole: IRole = { id: 0, title: 'DIRECTOR' };
        return persons.filter(person => person.role === directorRole.title);
    }

    public async getFilm(id: number) {
        let conf = Object.assign({}, config.api.film);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const filmData = this.parseFilm(response.responseBody.body.film);

        this.title = filmData.content?.title;

        if (filmData.content) {
            filmData.content.actors = this.getFilmActors(filmData.content.persons || []);
            filmData.content.directors = this.getFilmDirectors(filmData.content.persons || []);
        }

        return Promise.resolve(filmData);
    };

    public async getSeries(id: number) {
        let conf = Object.assign({}, config.api.series);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.seriesData = this.parseSeries(response.responseBody.body.series);

        this.title = this.seriesData.content?.title;

        if (this.seriesData.content) {
            this.seriesData.content.actors = this.getFilmActors(this.seriesData.content.persons || []);
            this.seriesData.content.directors = this.getFilmDirectors(this.seriesData.content.persons || []);
        }

        return Promise.resolve(this.seriesData);
    };

    public getSeasonsCount(): number {
        return this.seriesData.episodes.reduce((max, { seasonNum }) => {
            return seasonNum > max ? seasonNum : max;
        }, Number.NEGATIVE_INFINITY);
    };

    public getEpisodes(num: number): IEpisode[] {
        return (this.seriesData.episodes.filter(({ seasonNum }) => seasonNum == num));
    };

    public getFilmTitle(): string {
        return <string>this.title;
    };
}

export default FilmModel;
