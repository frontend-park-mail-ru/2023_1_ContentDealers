import IContentSearch from "../ContentSearch/IContentSearch";
import IActorSearch from "../ActorSearch/IActorSearch";

interface ISearch {
    content:         IContentSearch[];
    actors:          IActorSearch[];
}

export default ISearch;