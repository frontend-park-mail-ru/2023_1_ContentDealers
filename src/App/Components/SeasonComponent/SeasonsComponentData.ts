import type CarouselComponentData from '../CarouselComponent/CarouselComponentData';

export default interface SeasonsComponentData {
    id?: string;
    title?: string;
    count?: number;
    data: CarouselComponentData;
}
