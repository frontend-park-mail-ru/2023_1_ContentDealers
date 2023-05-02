import IComponent from '../IComponent/IComponent';

import SeasonComponentTemplate from './SeasonComponent.hbs';
import type SeasonsComponentData from './SeasonsComponentData';
import './SeasonComponent.css';

import ListComponent from '../ListComponent/ListComponent';
import type ListComponentData from '../ListComponent/ListComponentData';

import LinkComponent from '../LinkComponent/LinkComponent';
import type LinkComponentData from '../LinkComponent/LinkComponentData';

import CarouselComponent from '../CarouselComponent/CarouselComponent';
import type CarouselComponentData from '../CarouselComponent/CarouselComponentData';

class SeasonComponent extends IComponent {
    private readonly numberListContainer: HTMLElement;
    private readonly itemsListContainer: HTMLElement;

    private currentItemId: number;
    // private itemsList: ListComponent<any, any>

    private numberListData: ListComponentData<LinkComponent, LinkComponentData> = {
        listClass: 'seasons__list',
        itemClass: 'seasons-list__item',
        items: [],
    };

    constructor(parent: HTMLElement, data?: SeasonsComponentData) {
        super(parent, SeasonComponentTemplate({ title: data?.title, count: data?.count }));

        this.numberListContainer = <HTMLElement>this.element.querySelector('.js-number-list');
        this.itemsListContainer = <HTMLElement>this.element.querySelector('.js-items-list');

        if (data?.count) {
            this.renderNumbers(data?.count);
        }

        if (data?.data) {
            this.renderCarousel(data.data);
        }

        if (data?.count) {
            // this.bindNumberListClick(this.onNumberListClick.bind(this));
        }
    };

    private renderNumbers(count: number): void {
        const numberItems = Array.from({ length: count }, (_, index) => ({
            componentType: LinkComponent,
            componentData: {
                linkClass: 'seasons-list-item__link',
                linkText: (index + 1).toString(),
                dataAction: (index + 1).toString(),
            },
        }));

        this.numberListData.items = this.numberListData.items?.concat(numberItems);

        new ListComponent(this.numberListContainer, this.numberListData).show();

        this.changeActiveItem(1);
    };

    public changeActiveItem(id: number): void {
        this.numberListContainer.querySelector(`[data-action="${this.currentItemId}"]`)?.parentElement?.classList.remove('seasons-list__item--active');
        this.currentItemId = id;
        this.numberListContainer.querySelector(`[data-action="${id}"]`)?.parentElement?.classList.add('seasons-list__item--active');
    }

    public renderCarousel(data: CarouselComponentData): void {
        this.itemsListContainer.innerHTML = '';

        new CarouselComponent(this.itemsListContainer, data).show();
    };

    private onNumberListClick(e: Event): void {
          // e.preventDefault();
          // e.stopPropagation();
          //
          // const target = <HTMLElement>e.target;
          // const id = <number>(target.closest('[data-action]')?.getAttribute('data-action') as unknown);
          // if (id) {
          //     this.changeActiveItem(id);
          //     // this.renderCarousel();
          // }
    };

    private bindNumberListClick(listener: any): void {
        this.numberListContainer.addEventListener('click', listener);
    };
}

export default SeasonComponent;
