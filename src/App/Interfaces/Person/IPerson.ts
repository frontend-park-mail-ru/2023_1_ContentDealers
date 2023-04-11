import IRole from '../Role/IRole';
import IGenre from '../Genre/IGenre';
import IContent from '../Content/IContent';

interface IPerson {
    id:                 number;
    name?:              string;
    gender?:            string;
    genres?:            IGenre[];
    growth?:            number;
    birthPlace?:        string;
    avatarURL?:         string;
    age?:               number;

    role?:              IRole;
    roles?:             IRole[];
    participatedIn?:    IContent[],
}

export default IPerson;
