import IView from '../IView/IView';

import CarouselTemplate from './CarouselView.hbs';
import CarouselData from './CarouselViewConfig';
import './CarouselView.css';

import ListComponent from '../../Components/ListComponent/ListComponent';

class CarouselView extends IView {
    private list: ListComponent;

    constructor(parent: HTMLElement) {
        super(parent, CarouselTemplate({}), '.js-carousel');

        const div = document.createElement('div');
        this.list = new ListComponent(div, '', '', CarouselData.list);
        this.list.show();

        this.element.firstElementChild?.after(div);
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default CarouselView;
