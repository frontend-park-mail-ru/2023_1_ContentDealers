import type IRole from '../Role/IRole';
import type IGenre from '../Genre/IGenre';
import type IContent from '../Content/IContent';

export default interface IPerson {
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
