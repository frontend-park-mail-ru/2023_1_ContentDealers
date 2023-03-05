import { subscriptionHtml } from "./subscriptionTemplate.hbs.js";

import { GradientButton } from "../gradientButton/gradientButton.js";

export class Subscription {
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

    get findButtons() {
        return this.#parent.querySelector('.buttons');
    }

    render() {
        const template = Handlebars.compile(subscriptionHtml);
        this.#parent.innerHTML = template(this.#config);

        this.#renderButtons();
    }

    #renderButtons() {
        const buttons = this.findButtons;

        const buttonsInfo = {
            buttonSubscription: {
                text: 'Оформить подписку',
                cssClass: 'button__subscription',
            },
            buttonDetails: {
                text: 'Подробнее',
                cssClass: 'button__details',
            }
        };

        Object.entries(buttonsInfo).map(([key, value]) => {
            const div = document.createElement('div');
            const button = new GradientButton(div);
            button.config = value;
            button.render();
            buttons.appendChild(div);
        });
    }
}
