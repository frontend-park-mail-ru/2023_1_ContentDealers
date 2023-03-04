import { categoriesListHtml } from "./categoriesListTemplate.hbs.js";
import { categoriesListItemHtml } from "./categoriesListItemTemplate.hbs.js";

export class CategoriesList {
    #parent
    #config

    constructor(parent) {
        this.#parent = parent;
    }

    get config() {
        return this.#config;
    }

    set config(config) {
        this.#config = config;
    }

    get items() {
        return Object.entries(this.#config).map(([key, value]) => ({
            key,
            ...value
        }))
        return
    }

    get findCarouselItems() {
        return this.#parent.querySelector('.carousel__right__ul');
    }

    render() {
        const template = Handlebars.compile(categoriesListHtml);
        this.#parent.innerHTML = template(this.#config); // Nothing to render in this template and another

        this.renderItems();
        // const template = Handlebars.compile(carouselHtml);
        // this.#parent.innerHTML = template(this.#config);
        //
        // this.renderItems();
    }

    renderItems() {
        // const template = Handlebars.compile(carouselItemsHtml);
        // this.findCarouselItems.innerHTML = template(this.config.images);
        const template = Handlebars.compile(categoriesListItemHtml);
        console.log(this.items);
        console.log(this.findCarouselItems);
        this.findCarouselItems.innerHTML = template(this.items);
    }
}
