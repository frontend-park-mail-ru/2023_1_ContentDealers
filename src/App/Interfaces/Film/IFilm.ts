import IContent from '../Content/IContent';

interface IFilm {
    id:             number;
    contentURL?:    string;

    content?:       IContent;
}

export default IFilm;
