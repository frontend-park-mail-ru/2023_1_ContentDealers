import type IContent from '../../Interfaces/Content/IContent';
import type IEpisode from '../../Interfaces/Episode/IEpisode';

export default interface CarouselComponentData {
    // items: IContent[] | IEpisode[];

    contents?: IContent[];
    episodes?: IEpisode[];
}
