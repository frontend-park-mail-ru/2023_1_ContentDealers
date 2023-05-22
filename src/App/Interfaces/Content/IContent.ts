import type IPerson from '../Person/IPerson';
import type IGenre from '../Genre/IGenre';

export type ContentType = 'film' | 'series';

export default interface IContent {
    href?: string;

    id: number;
    title: string;
    description?: string;
    rating?: number;
    year?: number;
    isFree?: boolean;
    persons?: IPerson[];
    ageLimit?: number;
    trailerURL?: string;
    previewURL?: string;
    type?: ContentType;
    genres?: IGenre[];

    actors?: IPerson[]; // TODO: how improve?
    directors?: IPerson[]; // TODO: how improve?
}
