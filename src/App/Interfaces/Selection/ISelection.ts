import type IContent from '../Content/IContent';

export default interface ISelection {
    id:         number;
    title?:     string;
    content?:   IContent[];
}
