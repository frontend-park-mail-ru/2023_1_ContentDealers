import { gradientButtonHtml } from './gradientButtonTemplate.hbs.js';

export class GradientButton {
    #config;

    get config() {
        return this.#config;
    }

    set config(config) {
        this.#config = config;
    }

    render() {
        const template = Handlebars.compile(gradientButtonHtml);
        return template(this.#config);
    }
}
