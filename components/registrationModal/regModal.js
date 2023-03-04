import { regModalHtmlForm } from "./regModalTemplateForm.hbs.js";

export class RegModal {
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
        const template = Handlebars.compile(regModalHtmlForm);
        this.#parent.innerHTML = template(this.#config);
    }
};
