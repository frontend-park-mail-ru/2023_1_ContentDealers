import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponent from '../../Components/ListComponent/ListComponent';
import type ListComponentData from '../../Components/ListComponent/ListComponentData';

import VideoComponent from '../../Components/VideoComponent/VideoComponent';
import type VideoComponentData from '../../Components/VideoComponent/VideoComponentData';

interface ICarouselData {
    items: IComponentDataWithType<ListComponent<VideoComponent, VideoComponentData>, ListComponentData<VideoComponent, VideoComponentData>>;
}

const CarouselData: ICarouselData = {
    items: {
        componentType: ListComponent,
        componentData: {
            listClass: 'carousel__list',
            itemClass: 'carousel-list__item',
            items: [
                {
                    componentData: { href: '/films/11', src: '/img/test/2.jpg' },
                    componentType: VideoComponent
                },
                {
                    componentData: { href: '/films/63', src: '/img/test/1.jpg' },
                    componentType: VideoComponent
                },
                {
                    componentData: { href: '/films/95', src: '/img/test/3.jpg' },
                    componentType: VideoComponent
                },
            ],
        }
    }
};

export default CarouselData;
