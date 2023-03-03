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

    get findCategoryList() {
        return this.#parent.querySelector('.category__container__items');
    }

    render() {
        const template = Handlebars.compile(categoryHtml);
        this.#parent.innerHTML = template(this.#config);

        this.renderItems();
    }

    renderItems() {
        const template = Handlebars.compile(categoryItemHtml);
        this.findCategoryList.innerHTML = template(this.#config);
    }
}
