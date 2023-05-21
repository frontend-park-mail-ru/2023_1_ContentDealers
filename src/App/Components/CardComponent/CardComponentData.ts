export type FigureOrientationClass = 'card__h-radius' | 'card__v-radius';

export default interface CardComponentData {
    href?: string;
    title?: string;

    figureOrientationClass: FigureOrientationClass;
    imageSrc: string;

    footer?: {
        title: string;
        description?: string;
    };

    action: string;
    onClick: Function;
}
