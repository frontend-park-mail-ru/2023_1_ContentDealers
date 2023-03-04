import { subscriptionHtml } from "./subscriptionTemplate.hbs.js";

import { GradientButton } from "../gradientButton/gradientButton.js";

export class Subscription {
    #parent
    #config

    // #chevrons = { // Mb render ?
    //     chevronLeft: '/svg-icons/chevron/chevron-left.svg',
    //     chevronRight: '/svg-icons/chevron/chevron-right.svg',
    // };
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
        const template = Handlebars.compile(subscriptionHtml);
        this.#parent.innerHTML = template(this.#config);

        this.renderButtons();
    }

    renderButtons() {
        // Mb create list of buttons and info and iterate
        const buttons = this.#parent.querySelector('.buttons');

        const div1 = document.createElement('div');
        const buttonSubscription = new GradientButton(div1);
        buttonSubscription.config = {
            text: 'Оформить подписку',
            cssClass: 'button__subscription',
        };
        buttonSubscription.render();

        const div2 = document.createElement('div');
        const buttonDetails = new GradientButton(div2);
        buttonDetails.config = {
            text: 'Подробнее',
            cssClass: 'button__details',
        };
        buttonDetails.render();

        buttons.appendChild(div1);
        buttons.appendChild(div2);
    }
}
