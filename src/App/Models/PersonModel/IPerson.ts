interface IPerson {
    id: string;
    name: string;
    gender: string;
    growth: number;
    birthPlace: string;
    avatarURL: string;
    age: number;

    role: string;
}

function parsePerson(json: any): IPerson {
    return {
        id: json.Person.ID,
        name: json.Person.Name,
        gender: json.Person.Gender,
        growth: json.Person.Growth,
        birthPlace: json.Person.BirthPlace,
        avatarURL: json.Person.AvatarURL,
        age: json.Person.Age,
        role: json.Role.Title,
    };
}

function parsePersons(json: any): IPerson[] {
    return json.map((person: any) => {
        return parsePerson(person);
    })
}

export { IPerson, parsePerson, parsePersons };
