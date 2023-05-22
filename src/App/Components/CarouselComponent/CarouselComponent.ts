import IComponent from '../IComponent/IComponent';

import CarouselComponentTemplate from './CarouselComponent.hbs';
import type CarouselComponentData from './CarouselComponentData';
import './CarouselComponent.css';

import ListComponent from '../ListComponent/ListComponent';
import LinkComponent from "../LinkComponent/LinkComponent";

class CarouselComponent extends IComponent {
    private listContainer: HTMLElement;

    constructor(parent: HTMLElement, data?: CarouselComponentData) {
        super(parent, CarouselComponentTemplate({}));

        this.listContainer = <HTMLElement>this.element.querySelector('.js-category__container__list');

        if (data) {
            this.renderList(data);
        }
    };

    public renderList(data: CarouselComponentData): void {
        this.listContainer.innerHTML = '';

        if (data.contents) {
            const listItems = data.contents.map(({id, type, previewURL}, index) => {
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
            const listItems = data.episodes.map(({id, episodeNum, contentURL}, index) => {
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
                itemClass: 'category__container__item',
                items: listItems,
            }).show();
        }

    };
}

export default CarouselComponent;
