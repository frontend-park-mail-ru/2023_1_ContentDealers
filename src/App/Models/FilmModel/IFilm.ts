import { IPerson, parsePersons } from '../PersonModel/IPerson';
import { IGenre, parseGenres } from "./IGenre";
import { ICounty, parseCountries } from "./ICounty";

interface IFilm {
    ID:             string;
    contentURL:     string;
    // content:        IContent;

    id:             string;
    title:          string;
    description:    string;
    rating:         number;
    year:           number;
    isFree:         boolean;
    ageLimit:       number;
    trailerURL:     string;
    previewURL:     string;
    type:           string;
    persons: IPerson[];
    genres: IGenre[];
    countries: ICounty[];

    actors?: IPerson[];
    directors?: IPerson[];
}

function parseFilm(json: any): IFilm {
    return {
        ID: json.ID,
        contentURL: json.ContentURL,
        // content: this.parseContent(json.Content),

        id: json.id,
        title: json.title,
        description: json.description,
        rating: json.rating,
        year: json.year,
        isFree: json.is_free,
        ageLimit: json.age_limit,
        trailerURL: json.trailer_url,
        previewURL: json.preview_url,
        type: json.type,

        persons: parsePersons(json.persons_roles),
        genres: parseGenres(json.genres),
        countries: parseCountries(json.countries),
    };
}

export { IFilm, parseFilm };
