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

    get findList() {
        return this.#parent.querySelector('.carousel__right__ul');
    }

    render() {
        const template = Handlebars.compile(categoriesListHtml);
        this.#parent.innerHTML = template('');
        this.#renderItems();
    }

    #renderItems() {
        const template = Handlebars.compile(categoriesListItemHtml);
        this.findList.innerHTML = template(this.items);
    }
}
