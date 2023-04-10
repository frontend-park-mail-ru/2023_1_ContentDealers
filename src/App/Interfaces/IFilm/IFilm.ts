import IContent from '../IContent/IContent';

interface IFilm {
    id:             number;
    contentURL?:    string;

    content?:       IContent;
}

export default IFilm;
