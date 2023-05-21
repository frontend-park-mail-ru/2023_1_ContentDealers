import IComponent from '../IComponent/IComponent';

import type SeriesComponentData from './SeriesComponentData';
import SeriesComponentTemplate from './SeriesComponent.hbs';
import './SeriesComponent.css';

import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponent from '../ListComponent/ListComponent';

import LinkComponent from '../Link/LinkComponent';
import type LinkComponentData from '../Link/LinkComponentData';
import CardCarouselComponent from '../CardCarouselComponent/CardCarouselComponent';
import type CardComponentData from '../CardComponent/CardComponentData';

class SeriesComponent extends IComponent {
    private readonly numbersListData: { listClass: string, itemClass: string, linkClass: string } = {
        listClass: 'series__numbers',
        itemClass: 'series__number series-number',
        linkClass: 'series-number__link'
    };
    private readonly numbersListLessClass = 'less-960';
    private readonly numbersListMoreClass = 'more-960';

    private readonly activeNumberClass = 'series__number_active';
    private activeNumberId: number | null;

    // HTMLElements //
    private readonly headerContainer: HTMLElement;
    private readonly seriesCardsContainer: HTMLElement;

    private seriesCardCarouselComponent: CardCarouselComponent;

    constructor(parent: HTMLElement, data: SeriesComponentData) {
        super(parent, SeriesComponentTemplate({}));

        this.headerContainer = <HTMLElement>this.element.querySelector('.ts-series-header');
        this.seriesCardsContainer = <HTMLElement>this.element.querySelector('.ts-series-cards');

        const numbersData = this.receiveNumbersData(data);

        new ListComponent(this.headerContainer, {
            listClass: `${this.numbersListData.listClass} ${this.numbersListLessClass}`,
            itemClass: this.numbersListData.itemClass,
            items: numbersData
        }).show();

        new ListComponent(this.headerContainer, {
            listClass: `${this.numbersListData.listClass} ${this.numbersListMoreClass}`,
            itemClass: this.numbersListData.itemClass,
            items: numbersData
        }).show();

        this.changeActiveItem(1);
        this.activeNumberId = 1;
    }

    private receiveNumbersData({ id, count }: SeriesComponentData): IComponentDataWithType<LinkComponent, LinkComponentData>[] {
        return Array.from({ length: count }, (_, i) => {
            return {
                componentType: LinkComponent,
                componentData: {
                    href: `/series/${id}/seasons/${i + 1}`,
                    text: String(i + 1),
                    classes: this.numbersListData.linkClass
                }
            };
        });
    }

    public createCarousel(cardsData: CardComponentData[]): void {
        this.seriesCardsContainer.innerHTML = '';

        console.log('createCarousel', )
        this.seriesCardCarouselComponent = new CardCarouselComponent(this.seriesCardsContainer, cardsData);
        this.seriesCardCarouselComponent.show();
    }

    public changeActiveItem(id: number): void {
        const toActiveLinks = this.headerContainer.querySelectorAll(`[href$="/seasons/${id}"]`);
        toActiveLinks.forEach((link) => {
            (<HTMLElement>link.parentElement).classList.add(this.activeNumberClass)
        });

        if (this.activeNumberId) {
            const toInactiveLinks = this.headerContainer.querySelectorAll(`[href$="/seasons/${this.activeNumberId}"]`);
            toInactiveLinks.forEach((link) => {
                (<HTMLElement>link.parentElement).classList.remove(this.activeNumberClass)
            });
        }

        this.activeNumberId = id;
    }

    public bindHeaderClick(listener: any): void {
        this.headerContainer.addEventListener('click', listener);
    }
}

export default SeriesComponent;
