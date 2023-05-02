import type IContent from '../Content/IContent';
import type IEpisode from '../Episode/IEpisode';

export default interface ISeries {
    id: string;
    content: IContent;
    episodes: IEpisode[];
}
