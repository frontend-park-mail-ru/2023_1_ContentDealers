import { modalWindowHtml } from "./modalWindowTemplate.hbs.js";

export class ModalWindow {
    #parent

    #config

    constructor(parent) {
        this.#parent = parent;
    }

    set config(config) {
        this.#config = config;
    }

    get config() {
        return this.#config;
    }

    render() {
        const template = Handlebars.compile(modalWindowHtml);
        this.#parent.innerHTML = template(this.#config);
    }
};
