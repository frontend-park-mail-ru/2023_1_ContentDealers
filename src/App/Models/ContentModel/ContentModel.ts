import IModel from '../IModel/IModel';

import type IContent from '../../Interfaces/Content/IContent';
import type { ContentType } from '../../Interfaces/Content/IContent';

import type IFilm from '../../Interfaces/Film/IFilm';
import type IPerson from '../../Interfaces/Person/IPerson';
import type IRole from '../../Interfaces/Role/IRole';
import type IEpisode from '../../Interfaces/Episode/IEpisode';
import type ISeries from '../../Interfaces/Series/ISeries';
import type IGenre from '../../Interfaces/Genre/IGenre';
import type IHas from '../../Interfaces/Has/IHas';

import Ajax from '../../Ajax/Ajax';

import { config } from '../../Config/Config';

import type IFavoritesAddDelete from '../../Interfaces/FavoritesAddDelete/IFavoritesAddDelete';
import type SeriesComponentData from '../../Components/SeriesComponent/SeriesComponentData';

class ContentModel extends IModel {
    private readonly ContentTypes: { [key in ContentType]: string } = {
        film: 'film',
        series: 'series',
    };

    private type: ContentType;
    private content: IContent;
    private isHas: boolean;

    private filmData: IFilm;
    private seriesData: ISeries;

    private myRating: number | null = null;

    public constructor() {
        super();
    }

    // Getters //
    public getId(): number {
        return this.content.id;
    }

    public getTrailerUrl(): string {
        return <string>this.content.trailerURL;
    }

    public getWatchUrl(): string {
        if (this.isFilm()) {
            return this.filmData.contentURL;
        }

        if (this.isSeries()) {
            return this.seriesData.episodes[0].contentURL;
        }

        return '';
    }

    public getMyRating(): number | null {
        return this.myRating;
    }

    public getDefaultRating(): string {
        return this.content.rating as string;
    }

    public getDefaultCount(): number {
        return this.content.count as number;
    }

    public isFree(): boolean {
        return <boolean>this.content.isFree;
    }

    public toggleHas(): boolean {
        return (this.isHas = !this.isHas);
    }

    public has(): boolean {
        return this.isHas;
    }

    // Check type functions //
    public isFilm(): boolean {
        return this.type === this.ContentTypes.film;
    }

    public isSeries(): boolean {
        return this.type === this.ContentTypes.series;
    }

    public getSources(seasonId: number): string[] {
        const episodes = this.getSeason(seasonId);

        const sources: string[] = [];
        episodes.forEach(({ contentURL }) => {
            sources.push(contentURL);
        });

        return sources;
    }

    public getSeriesData(): SeriesComponentData {
        return {
            id: this.getId(),
            count: this.getSeasonsCount(),
        };
    }

    private parseFilm(json: any): IFilm {
        return {
            id: json.id,
            contentURL: json.content_url,

            content: this.parseContentForFilm(json.content),
        };
    }

    private parseSeries(json: any): ISeries {
        return {
            id: json.id,

            content: this.parseContentForFilm(json.content),
            episodes: this.parseEpisodes(json.episodes),
        };
    }

    private parseEpisodes(episodes: any): IEpisode[] {
        return episodes.map((episode: any) => {
            return this.parseEpisode(episode);
        });
    }

    private parseEpisode(episode: any): IEpisode {
        return {
            id: episode.id,
            contentURL: episode.content_url,
            releaseDate: episode.release_date,
            episodeNum: episode.episode_num,
            seasonNum: episode.season_num,
            previewURL: episode.preview_url,
            // title: episode.title,
            title: `${episode.episode_num} серия`,
        };
    }

    private parseContentForFilm(content: any): IContent {
        return {
            id: content.id,
            title: content.title,
            description: content.description,
            rating: this.parseRating(content.rating),
            count: content.count_ratings,
            year: content.year,
            persons: this.parsePersonsForFilm(content.persons_roles),
            isFree: content.is_free,
            ageLimit: content.age_limit,
            trailerURL: content.trailer_url,
            previewURL: content.preview_url,

            type: content.type,
            genres: this.parseGenresForFilm(content.genres),
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

    private parsePersonsForFilm(personsWithRoles: any): IPerson[] {
        return personsWithRoles.map((personWithRole: any) => {
            return this.parsePersonForFilm(personWithRole);
        });
    }

    private parsePersonForFilm(personWithRole: any): IPerson {
        return {
            id: personWithRole.person.id,
            name: personWithRole.person.name,
            role: personWithRole.role.title,
        };
    }

    private parseGenresForFilm(genres: any): IGenre[] {
        return genres.map((genre: any) => {
            return this.parseGenreForFilm(genre);
        });
    }

    private parseGenreForFilm(genre: any): IGenre {
        return {
            id: genre.id,
            name: genre.name,
        };
    }

    private getContentActors(persons: IPerson[]): IPerson[] {
        const actorRole: IRole = { id: 0, title: 'ACTOR' };
        return persons.filter(person => person.role === actorRole.title);
    }

    private getContentDirectors(persons: IPerson[]): IPerson[] {
        const directorRole: IRole = { id: 0, title: 'DIRECTOR' };
        return persons.filter(person => person.role === directorRole.title);
    }

    public async getContent(id: number, type: ContentType): Promise<IFilm | ISeries> {
        switch (type) {
            case 'film':
                return await this.getFilm(id);

            case 'series':
                return await this.getSeries(id);
        }
    }

    private fillContentData(contentData: IContent): void {
        this.content = contentData;
        if (this.content?.type) {
            this.type = this.content.type;
        }

        this.content.actors = this.getContentActors(this.content.persons || []);
        this.content.directors = this.getContentDirectors(this.content.persons || []);
    }

    private async getFilm(id: number): Promise<IFilm> {
        const conf = Object.assign({}, config.api.film);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.filmData = this.parseFilm(response.responseBody.body.film);

        this.fillContentData(this.filmData.content);
        this.filmData.content = this.content;

        return Promise.resolve(this.filmData);
    }

    private async getSeries(id: number): Promise<ISeries> {
        const conf = Object.assign({}, config.api.series);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.seriesData = this.parseSeries(response.responseBody.body.series);

        this.fillContentData(this.seriesData.content);
        this.seriesData.content = this.content;

        return Promise.resolve(this.seriesData);
    }

    public async getFavoritesStatus(filmId: string): Promise<any> {
        const conf = Object.assign({}, config.api.favoritesContentHas);
        conf.url = conf.url.replace('{:id}', filmId);

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        this.isHas = response.responseBody.body.has;

        return Promise.resolve(this.isHas);
    }

    private getSeasonsCount(): number {
        return this.seriesData.episodes.reduce((max, { seasonNum }) => {
            return seasonNum > max ? seasonNum : max;
        }, Number.NEGATIVE_INFINITY);
    }

    public getSeason(seasonId: number): IEpisode[] {
        return this.seriesData.episodes.filter(({ seasonNum }) => seasonNum == seasonId);
    }

    public getTitle(): string {
        return <string>this.content.title;
    }

    public async deleteFromFavorites(data: IFavoritesAddDelete): Promise<number> {
        const conf = Object.assign({}, config.api.favoritesContentDelete);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        this.isHas = false;

        return Promise.resolve(response.status);
    }

    public async addToFavorites(data: IFavoritesAddDelete): Promise<number> {
        const conf = Object.assign({}, config.api.favoritesContentAdd);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        this.isHas = true;

        return Promise.resolve(response.status);
    }

    public async hasRating(id: number): Promise<number | null> {
        const conf = Object.assign({}, config.api.hasRating);
        conf.url = conf.url.replace('{:id}', id.toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        if (response.responseBody.body.has) {
            this.myRating = response.responseBody.body.rating;
        } else {
            this.myRating = null;
        }

        return Promise.resolve(this.myRating);
    }

    public async addRating(data: { content_id: number,  rating: number }): Promise<{ status: number, rating: number, count: number }> {
        const conf = Object.assign({}, config.api.addRating);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        this.myRating = data.rating;

        return Promise.resolve({
            status: response.status,
            rating: response.responseBody.body.new_rating,
            count:  response.responseBody.body.count_ratings
        });
    }

    public async deleteRating(data: { content_id: number }): Promise<number> {
        const conf = Object.assign({}, config.api.deleteRating);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        this.myRating = null;

        return Promise.resolve(response.status);
    }


    private stringToNumber(timeString: string): number {
        let timeValue = 0;

        if (timeString.includes("ms")) {
            const milliseconds = parseInt(timeString.split("ms")[0]);
            timeValue += milliseconds / 1000;
        } else {
            if (timeString.includes("m")) {
                const minutes = parseInt(timeString.split("m")[0]);
                timeValue += minutes * 60;

                timeString = timeString.split("m")[1];
            }

            if (timeString.includes("s")) {
                const seconds = parseInt(timeString.split("s")[0]);
                timeValue += seconds;
            }
        }

        return timeValue;
    }

    private parseHas(data: any): IHas {
        return {
            has: data.has,
            view: {
                contentId: data.view.content_id,
                duration: this.stringToNumber(data.view.duration),
                stopView: this.stringToNumber(data.view.stop_view)
            }
        }
    }

    public async getViewHas(): Promise<IHas> {
        const conf = Object.assign({}, config.api.viewsHas);
        conf.url = conf.url.replace('{:id}', this.getId().toString());

        const response = await Ajax.ajax(conf);
        await Ajax.checkResponseStatus(response, conf);

        const has = this.parseHas(response.responseBody.body);

        return Promise.resolve(has);
    }
}

export default ContentModel;
