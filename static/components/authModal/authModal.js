import { authModalHtmlForm } from './authModalTemplateForm.hbs.js';

export class AuthModal {
    #parent;

    #config;

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
        const template = Handlebars.compile(authModalHtmlForm);
        this.#parent.innerHTML = template(this.#config);
    }
}
