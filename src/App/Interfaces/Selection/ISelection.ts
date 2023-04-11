import IContent from '../Content/IContent';

interface ISelection {
    id:         number;
    title?:     string;
    content?:   IContent[];
}

export default ISelection;
