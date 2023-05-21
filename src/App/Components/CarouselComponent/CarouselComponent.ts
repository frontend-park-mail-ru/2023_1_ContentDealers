import IComponent from '../IComponent/IComponent';

import CarouselComponentTemplate from './CarouselComponent.hbs';
import type CarouselComponentData from './CarouselComponentData';
import './CarouselComponent.css';

import ListComponent from '../ListComponent/ListComponent';
import LinkComponent from '../LinkComponent/LinkComponent';

class CarouselComponent extends IComponent {
    private listContainer: HTMLElement;
    private position: number;
    private readonly slidesToShow: number;
    private readonly slidesToScroll: number;
    private readonly container: HTMLElement | null;
    private readonly track: HTMLElement | null;
    private readonly item: HTMLElement | null;
    private readonly btnPrev: HTMLButtonElement;
    private readonly btnNext: HTMLButtonElement;
    private itemWidth: number;
    private movePosition: number;
    private readonly itemsCount: number;

    private readonly boundClickEvent = this.onClick.bind(this);

    public constructor(parent: HTMLElement, data?: CarouselComponentData) {
        super(parent, CarouselComponentTemplate({}));

        this.listContainer = <HTMLElement>(
            this.element.querySelector('.js-category__container__list')
        );

        if (data) {
            this.renderList(data);
        }

        this.position = 0;
        this.slidesToShow = 4;
        this.slidesToScroll = 4;

        this.container = this.element.querySelector('.js-category__container');
        this.track = this.element.querySelector('.js-category__container__list');
        this.item = this.element.querySelector('li');

        this.btnPrev = this.element.querySelector(
            '.js-category__container__button-left'
        ) as HTMLButtonElement;
        this.btnNext = this.element.querySelector(
            '.js-category__container__button-right'
        ) as HTMLButtonElement;

        setTimeout(() => {
            this.itemWidth = <number>this.item?.offsetWidth + 15;
            this.movePosition = this.slidesToScroll * this.itemWidth;
        }, 0);

        // this.itemWidth = 262 + 15;
        // this.movePosition = this.slidesToScroll * this.itemWidth;
        this.itemsCount = this.element.querySelectorAll('li').length;

        // console.log(this.item!.offsetWidth);
        // console.log(this.element);
        // console.log(this.item);
        // console.log(this.item?.getBoundingClientRect().width);
        // console.log(this.item!.offsetWidth);
        // console.log('--------------');

        this.element.addEventListener('click', this.boundClickEvent);

        this.checkBtns();

        // setTimeout(() => {
        //     this.itemWidth = this.item!.offsetWidth + 15;
        // }, 0);
    }

    private setPosition(): void {
        if (this.track) {
            this.track.style.transform = `translateX(${this.position}px)`;
        }

        this.checkBtns();
    }

    private checkBtns(): void {
        this.btnNext.style.display =
            this.position <= -(this.itemsCount - this.slidesToShow) * this.itemWidth
                ? 'none'
                : 'block';
        this.btnPrev.style.display = this.position === 0 ? 'none' : 'block';
    }

    public renderList(data: CarouselComponentData): void {
        this.listContainer.innerHTML = '';

        if (data.contents) {
            const listItems = data.contents.map(({ id, type, previewURL }) => {
                return {
                    componentType: LinkComponent,
                    componentData: {
                        linkHref: type ? `/${type}/${id}` : '',

                        linkImageSrc: previewURL ? previewURL : '/img/notfound/question.jpg',
                        linkImageClass: 'mw-100',
                    },
                };
            });

            new ListComponent(this.listContainer, {
                listClass: 'category__container__items',
                itemClass: 'category__container__item',
                items: listItems,
            }).show();
        }

        if (data.episodes) {
            const listItems = data.episodes.map(({ episodeNum, contentURL }) => {
                return {
                    componentType: LinkComponent,
                    componentData: {
                        dataAction: contentURL,

                        linkClass: 'season-text',

                        linkImageSrc: '/img/notfound/question.jpg',
                        linkImageClass: 'mw-100',

                        linkText: `${episodeNum} Серия`,
                        linkTextClass: 'season-text__text',
                    },
                };
            });

            new ListComponent(this.listContainer, {
                listClass: 'category__container__items',
                itemClass: 'category__container__item w-10vh',
                items: listItems,
            }).show();
        }

        if (data.genres) {
            const listItems = data.genres.map(({ id, name }) => {
                return {
                    componentType: LinkComponent,
                    componentData: {
                        linkHref: `/genres/${id}`,
                        linkClass: 'genres-list-item__link',

                        linkText: name,
                        linkTextClass: 'genres-list-item__text',
                    },
                };
            });

            new ListComponent(this.listContainer, {
                listClass: 'genres__list',
                itemClass: 'genres-list__item',
                items: listItems,
            }).show();
        }
    }

    private onClick(e: Event): void {
        console.log('onClick');

        const action = (<HTMLElement>(<HTMLElement>e.target).closest('[data-action]'))?.dataset[
            'action'
        ];

        switch (action) {
            case 'btn-left': {
                const itemsLeft: number = Math.abs(this.position) / this.itemWidth;

                this.position +=
                    itemsLeft >= this.slidesToScroll
                        ? this.movePosition
                        : itemsLeft * this.itemWidth;

                this.setPosition();

                e.stopPropagation();
                break;
            }

            case 'btn-right': {
                const itemsRight: number =
                    this.itemsCount -
                    (Math.abs(this.position) + this.slidesToShow * this.itemWidth) / this.itemWidth;

                this.position -=
                    itemsRight >= this.slidesToScroll
                        ? this.movePosition
                        : itemsRight * this.itemWidth;

                this.setPosition();

                e.stopPropagation();
                break;
            }
        }
    }
}

export default CarouselComponent;
