import { mainVideoHtml } from "./mainVideoTemplate.hbs.js";

export class MainVideo {
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

    render() {
        const template = Handlebars.compile(mainVideoHtml);
        this.#parent.innerHTML = template(this.#config);
    }
}
