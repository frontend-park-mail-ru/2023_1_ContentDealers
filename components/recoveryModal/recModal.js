import { recModalHtmlForm } from "./recModalTemplateForm.hbs.js";

export class RecModal {
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
        const template = Handlebars.compile(recModalHtmlForm);
        this.#parent.innerHTML = template(this.#config);
    }
};