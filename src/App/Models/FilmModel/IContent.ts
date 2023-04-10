interface IContent {
    id:             string;
    title:          string;
    description:    string;
    rating:         number;
    year:           number;
    isFree:         boolean;
    ageLimit:       number;
    trailerURL:     string;
    previewURL:     string;
    type:           string;
}

function parseContent(json: any): IContent {
    return {
        id: json.id,
        title: json.title,
        description: json.description,
        rating: json.rating,
        year: json.year,
        isFree: json.is_free,
        ageLimit: json.age_limit,
        trailerURL: json.trailer_url,
        previewURL: json.preview_url,
        type: json.type,
    };
}

function parseContents(json: any): IContent[] {
    return json.map((content: any) => {
       return parseContent(content);
    });
}

export { IContent, parseContent, parseContents };
