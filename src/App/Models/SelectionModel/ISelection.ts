import { IContent, parseContents } from '../FilmModel/IContent';

interface ISelection {
    title: string;
    content: IContent[];
}

function parseSelection(json: any) {
    return {
        title: json.title,
        content: parseContents(json.content),
    };
}

function parseSelections(json: any) {
    return json.map((selection: any) => {
        return parseSelection(selection);
    });
}

export { ISelection, parseSelection, parseSelections };
