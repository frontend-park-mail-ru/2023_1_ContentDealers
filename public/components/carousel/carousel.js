import { carouselHtml } from "./carouselTemplate.hbs.js";
import { carouselItemsHtml } from "./carouselItemsTemplate.hbs.js";

export class Carousel {
    #parent
    #config

    // #chevrons = { // Mb render ?
    //     chevronLeft: '/svg-icons/chevron/chevron-left.svg',
    //     chevronRight: '/svg-icons/chevron/chevron-right.svg',
    // };
    constructor(parent) {
        this.#parent = parent;
    }

    get config() {
        return this.#config;
    }

    set config(config) {
        this.#config = config;
    }

    get findCarouselItems() {
        return this.#parent.querySelector('.carousel__ul');
    }

    render() {
        const template = Handlebars.compile(carouselHtml);
        this.#parent.innerHTML = template(this.#config);

        this.renderItems();
    }

    renderItems() {
        const template = Handlebars.compile(carouselItemsHtml);
        this.findCarouselItems.innerHTML = template(this.#config.images);
    }
}
