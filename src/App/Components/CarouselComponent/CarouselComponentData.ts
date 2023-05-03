import type IContent from '../../Interfaces/Content/IContent';
import type IEpisode from '../../Interfaces/Episode/IEpisode';
import type IGenre from "../../Interfaces/Genre/IGenre";

export default interface CarouselComponentData {
    // items: IContent[] | IEpisode[];

    contents?: IContent[];
    episodes?: IEpisode[];

    genres?: IGenre[];
}
