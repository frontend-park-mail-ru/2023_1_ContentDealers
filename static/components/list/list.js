import { listHtml } from "./listTemplate.hbs.js";

export class List {
    #parent
    #config

    constructor(parent, config) {
        this.#parent = parent;
        this.#config = config;
        // this.#items = items;
        // this.#classListUl = classListUl;
        // this.#classListLi = classListLi;
    }

    render() {
        const template = Handlebars.compile(listHtml);
        this.#parent.innerHTML = template(this.#config);
    }
}
