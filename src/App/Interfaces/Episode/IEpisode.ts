import type IContent from '../Content/IContent';

export default interface IEpisode {
    id: number;

    contentURL?: string;

    releaseDate: string;

    episodeNum: number;
    seasonNum: number;

    title?: string;
}