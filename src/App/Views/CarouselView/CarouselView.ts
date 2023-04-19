import IView from '../IView/IView';

import CarouselTemplate from './CarouselView.hbs';
import CarouselData from './CarouselViewConfig';
import './CarouselView.css';

import ListComponent from '../../Components/ListComponent/ListComponent';

import VideoComponent from '../../Components/VideoComponent/VideoComponent';
import VideoComponentData from '../../Components/VideoComponent/VideoComponentData';

class CarouselView extends IView {
    private items: ListComponent<VideoComponent, VideoComponentData>;

    constructor(parent: HTMLElement) {
        super(parent, CarouselTemplate({}));

        const div = document.createElement('div');
        this.items = new CarouselData.items.componentType(div, CarouselData.items.componentData);
        this.items.show();

        this.element.firstElementChild?.after(div);
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default CarouselView;
