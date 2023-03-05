import { categoryHtml } from "./categoryTemplate.hbs.js";
import { categoryItemHtml } from "./categotyItemTemplate.hbs.js";

export class Category {
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

    get movies() {
        return this.#config.movies;
    }

    get findList() {
        return this.#parent.querySelector('.category__container__items');
    }

    render() {
        const template = Handlebars.compile(categoryHtml);
        this.#parent.innerHTML = template(this.#config); // TODO : update and render only with title data
        this.#renderItems();
    }

    #renderItems() {
        const template = Handlebars.compile(categoryItemHtml);
        const movies = this.movies;
        this.findList.innerHTML = template({ movies });
    }
}
