export default interface IEpisode {
    id: number;

    contentURL: string;

    releaseDate: string;

    episodeNum: number;
    seasonNum: number;
    previewURL: string;

    title?: string;
}
