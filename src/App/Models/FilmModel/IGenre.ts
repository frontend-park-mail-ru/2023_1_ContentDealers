interface IGenre {
    id: string;
    name: string;
}

function parseGenre(json: any): IGenre {
    return {
        id: json.ID,
        name: json.Name,
    }
}

function parseGenres(json: any): IGenre[] {
    return json.map((genre: any) => {
        return parseGenre(genre);
    });
}

export { IGenre, parseGenre, parseGenres };
