import IView from '../IView/IView';

import CarouselTemplate from './CarouselView.hbs';
import CarouselData from './CarouselViewConfig';
import './CarouselView.css';

import type ListComponent from '../../Components/ListComponent/ListComponent';

import type VideoComponent from '../../Components/VideoComponent/VideoComponent';
import type VideoComponentData from '../../Components/VideoComponent/VideoComponentData';

class CarouselView extends IView {
    private items: ListComponent<VideoComponent, VideoComponentData>;
    private div: HTMLElement;
    private track: HTMLElement;
    private leftBtn: HTMLButtonElement;
    private rightBtn: HTMLButtonElement;

    public constructor(parent: HTMLElement) {
        super(parent, CarouselTemplate({}));

        this.div = document.createElement('div');
        this.items = new CarouselData.items.componentType(
            this.div,
            CarouselData.items.componentData
        );
        this.items.show();

        this.items.copyFirstLastItems();

        this.element.firstElementChild?.after(this.div);

        this.track = <HTMLElement>document.querySelector('.carousel__list');

        this.leftBtn = <HTMLButtonElement>(
            this.element.querySelector('.js-chevron-left')
        );
        this.rightBtn = <HTMLButtonElement>(
            this.element.querySelector('.js-chevron-right')
        );
    }

    public setPosition(position: number): void {
        this.div.style.transition = '1s';
        this.div.style.transform = `translateX(${position}px)`;
    }

    public jump(position: number): void {
        this.div.style.transition = 'none';
        this.div.style.transform = `translateX(${position}px)`;
    }

    public getItemsCount(): number {
        // The difference is because we add 2 elements at the beginning and at the end
        return this.items.getItemsCount() - 4;
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }

    public bindTransitionEvent(listener: any): void {
        this.div.addEventListener('transitionend', listener.bind(this));
    }
}

export default CarouselView;
