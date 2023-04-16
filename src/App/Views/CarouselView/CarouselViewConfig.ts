import ListComponentData from '../../Components/ListComponent/ListComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import VideoComponent from '../../Components/VideoComponent/VideoComponent';

interface ICarouselData {
    list: ListComponentData;
}

const CarouselData: ICarouselData = {
    list: {
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
};

export default CarouselData;
