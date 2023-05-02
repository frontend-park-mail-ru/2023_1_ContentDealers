import type IContent from '../Content/IContent';

export default interface IFilm {
    id:             number;
    contentURL?:    string;

    content?:       IContent;
}
