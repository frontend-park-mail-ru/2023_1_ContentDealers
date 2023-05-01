import IPerson from '../Person/IPerson';
import IGenre from '../Genre/IGenre';

interface IContent {
    id:            number;
    title?:         string;
    description?:   string;
    rating?:        number;
    year?:          number;
    isFree?:        boolean;
    persons?:       IPerson[];
    ageLimit?:      number;
    trailerURL?:    string;
    previewURL?:    string;
    type?:          string;
    genres?:        IGenre[];

    actors?:        IPerson[];      // TODO: how improve?
    directors?:     IPerson[];      // TODO: how improve?
}

export default IContent;
