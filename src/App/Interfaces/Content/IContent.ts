import IPerson from '../Person/IPerson';

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

    actors?:        IPerson[];      // TODO: how improve?
    directors?:     IPerson[];      // TODO: how improve?
}

export default IContent;
