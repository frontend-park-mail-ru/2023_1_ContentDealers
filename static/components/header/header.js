import { headerHtml } from './headerTemplate.hbs.js';
import { headerActionsHtml } from "./headerActionsTemplate.hbs.js";

import { GradientButton } from "../gradientButton/gradientButton.js";

export class Header {
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
        return Object.values(this.#config.headerActions);
    }

    get findList() {
        return this.#parent.querySelector('.headerTop__actions');
    }

    render() {
        const template = Handlebars.compile(headerHtml);
        this.#parent.innerHTML = template(this.#config);
        this.#renderActions();
        this.#renderButton();
    }

    #renderActions() {
        const template = Handlebars.compile(headerActionsHtml);
        this.findList.innerHTML = template(this.items);
    }


    #renderButton() {
        const button = this.#parent.querySelector('.headerTop__button');
        const gradientButton = new GradientButton(button);
        gradientButton.config = {
            text: 'Купить подписку',
            cssClass: 'button__subscription',
        };
        gradientButton.render();
    }
}
