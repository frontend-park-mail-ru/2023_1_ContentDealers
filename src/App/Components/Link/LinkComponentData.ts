import type ImageComponentData from '../ImageComponent/ImageComponentData';

export default interface LinkComponentData {
    href?: string;
    classes?: string;
    dataAction?: string;
    text?: string;

    img?: ImageComponentData;
}
