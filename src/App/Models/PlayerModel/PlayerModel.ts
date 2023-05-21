import IModel from '../IModel/IModel';

interface ISeasonData {
    seasonNum: number;
    episodeNum: number;
    index: number;
    sources: string[];
}

export interface IPlayerData {
    title: string;
    src: string;
    seasonData?: ISeasonData;
}

class PlayerModel extends IModel {
    private playerData: IPlayerData;
    private isSeason: boolean;

    public constructor() {
        super();

        this.isSeason = false;
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

    // public getPrevEpisode(): { title: string, src: string } {
    //     if (this.playerData.seasonData) {
    //         return {
    //             title: `${this.playerData.title} ${this.playerData.seasonData.seasonNum} сезон ${this.playerData.seasonData.episodeNum-1} серия`,
    //             src: this.playerData.seasonData.sources[this.playerData.seasonData.index - 1],
    //         };
    //     }
    //     return { title: '', src: '' };
    // }

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

    // public async
}

export default PlayerModel;
