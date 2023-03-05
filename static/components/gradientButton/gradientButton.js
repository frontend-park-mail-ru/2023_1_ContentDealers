import { gradientButtonHtml } from "./gradientButtonTemplate.hbs.js";

export class GradientButton {
    // #parent
    #config

    // constructor(parent) {
    //     this.#parent = parent;
    // }

    get config() {
        return this.#config;
    }

    set config(config) {
        this.#config = config;
    }

    render() {
        const template = Handlebars.compile(gradientButtonHtml);
        // this.#parent.innerHTML = template(this.#config);

        return template(this.#config)
    }
}
