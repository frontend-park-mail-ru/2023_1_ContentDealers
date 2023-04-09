interface ICounty {
    id: string;
    name: string;
}

function parseCountry(json: any): ICounty {
    return {
        id: json.ID,
        name: json.Name,
    }
}

function parseCountries(json: any): ICounty[] {
    return json.map((country: any) => {
       return parseCountry(country);
    });
}

export { ICounty, parseCountry, parseCountries };
