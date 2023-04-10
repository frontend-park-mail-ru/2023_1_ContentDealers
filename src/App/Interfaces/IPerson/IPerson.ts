import IRole from '../IRole/IRole';
import IGenre from '../IGenre/IGenre';
import IContent from '../IContent/IContent';

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
