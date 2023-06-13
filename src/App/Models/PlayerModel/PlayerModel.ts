import IModel from '../IModel/IModel';
import { config } from '../../Config/Config';
import Ajax from '../../Ajax/Ajax';

interface ISeasonData {
    seasonNum: number;
    episodeNum: number;
    index: number;
    sources: string[];
}

export interface IPlayerData {
    id: number;
    isFilm: boolean;
    stopView: number;
    title: string;
    src: string;
    seasonData?: ISeasonData;
}

class PlayerModel extends IModel {
    private id: number;

    private playerData: IPlayerData;
    private isSeason: boolean;

    private isFilm: boolean = false;
    private stopView: number = 0;

    private throttleTimeout: number | null = null;


    public constructor() {
        super();

        this.isSeason = false;
    }

    public setIsFilm(isFilm: boolean): void {
        this.isFilm = isFilm;
    }

    public getIsFilm(): boolean {
        return this.isFilm;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setStopView(stopView: number): void {
        this.stopView = stopView;
    }

    public getStopView(): number {
        return this.stopView;
    }

    public setPlayerData(playerData: IPlayerData): void {
        this.playerData = playerData;

        if (playerData.seasonData) {
            this.isSeason = true;
        }
    }

    public setPrevEpisode(title: string, src: string): void {
        if (this.playerData.seasonData) {
            this.playerData.title = title;
            this.playerData.src = src;

            this.playerData.seasonData.index--;
            this.playerData.seasonData.episodeNum--;
        }
    }

    public getPlayerData(): IPlayerData | null {
        return this.playerData;
    }

    public getSrc(): string {
        return this.playerData.src;
    }

    public getTitle(): string {
        if (this.playerData.seasonData) {
            return `${this.playerData.title} ${this.playerData.seasonData.seasonNum} сезон ${this.playerData.seasonData.episodeNum} серия`;
        } else {
            return this.playerData.title;
        }
    }

    public getIsSeason(): boolean {
        return this.isSeason;
    }

    public updateInfo(index: number): void {
        if (this.playerData.seasonData) {
            this.playerData.seasonData.episodeNum = index + 1;
            this.playerData.seasonData.index = index;

            this.playerData.src = this.playerData.seasonData.sources[index];
        }
    }

    public getPrevIndex(): number {
        if (this.playerData.seasonData) {
            if (!this.isLeft()) {
                return this.playerData.seasonData?.index - 1;
            }
        }

        return 0;
    }

    public getNextIndex(): number {
        if (this.playerData.seasonData) {
            if (!this.isRight()) {
                return this.playerData.seasonData?.index + 1;
            } else {
                return this.playerData.seasonData?.sources.length;
            }
        }

        return 0;
    }

    public isLeft(): boolean {
        if (this.isSeason && this.playerData.seasonData) {
            return this.playerData.seasonData.index === 0;
        }
        return false;
    }

    public isRight(): boolean {
        if (this.isSeason && this.playerData.seasonData) {
            return (this.playerData.seasonData.index + 1) === this.playerData.seasonData.sources.length;
        }
        return false;
    }

    public clearData(): void {
        this.isSeason = false;
        this.playerData.seasonData = undefined;
    }

    public async handleTimeUpdate(data: { content_id: number, stop_view: string, duration: string }) {
        if (this.throttleTimeout === null) {
            // Execute the updateViewTime function immediately
            await this.updateViewTime(data);

            // Set the timeout to allow the next call after 10 seconds
            this.throttleTimeout = window.setTimeout(() => {
                this.throttleTimeout = null;
            }, 5000);
        }
    }

    public async updateViewTime(data: { content_id: number, stop_view: string, duration: string }) {
        const conf = Object.assign({}, config.api.updateViewsTime);

        const response = await Ajax.ajax(conf, JSON.stringify(data));
        await Ajax.checkResponseStatus(response, conf);

        return Promise.resolve(response.status);
    }
}

export default PlayerModel;
