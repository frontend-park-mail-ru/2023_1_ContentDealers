import IModel from '../IModel/IModel';

// What
import type IContent from '../../Interfaces/Content/IContent';

// Into
import type CardComponentData from '../../Components/CardComponent/CardComponentData';
import type { FigureOrientationClass } from '../../Components/CardComponent/CardComponentData';
import type IEpisode from '../../Interfaces/Episode/IEpisode';

class CardsModel extends IModel {
    public constructor() {
        super();
    }

    public contentToCard(
        { href, title, previewURL }: IContent,
        orientationClass: FigureOrientationClass
    ): CardComponentData {
        return {
            href,
            title,
            imageSrc: previewURL as string,
            figureOrientationClass: orientationClass,
            action: '',
            onClick: (): void => {
                console.log('Nothing');
            },
        };
    }

    public contentsToCards(
        contents: IContent[],
        orientationClass: FigureOrientationClass
    ): CardComponentData[] {
        return contents.map(content => {
            return this.contentToCard(content, orientationClass);
        });
    }

    public seasonToCard(
        { previewURL, title, contentURL }: IEpisode,
        orientationClass: FigureOrientationClass
    ): CardComponentData {
        return {
            imageSrc: previewURL,
            figureOrientationClass: orientationClass,
            action: contentURL,
            footer: {
                title: title as string,
            },
            onClick: (): void => {
                console.log('Nothing');
            },
        };
    }

    public seasonsToCards(
        seasons: IEpisode[],
        orientationClass: FigureOrientationClass
    ): CardComponentData[] {
        return seasons.map(episode => {
            return this.seasonToCard(episode, orientationClass);
        });
    }
}

export default CardsModel;
