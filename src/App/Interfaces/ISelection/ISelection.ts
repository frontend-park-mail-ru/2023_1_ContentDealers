import IContent from '../IContent/IContent';

interface ISelection {
    id:         number;
    title?:     string;
    content?:   IContent[];
}

export default ISelection;
