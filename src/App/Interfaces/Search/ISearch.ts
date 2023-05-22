import type IContentSearch from "../ContentSearch/IContentSearch";
import type IActorSearch from "../ActorSearch/IActorSearch";

export default interface ISearch {
    content:         IContentSearch[];
    actors:          IActorSearch[];
}
