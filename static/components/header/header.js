import { headerHtml } from './headerTemplate.hbs.js';
import { headerActionsHtml } from "./headerActionsTemplate.hbs.js";

import { GradientButton } from "../gradientButton/gradientButton.js";

import { modalWindow } from '../../js/modal.js'

export class Header {
    #main
    #header
    #config

    constructor(main) {
        const header = document.createElement('header');
        header.classList.add('headerTop');

        this.#main = main;
        this.#header = header;
    }

    get config() {
        return this.#config;
    }

    set config(config) {
        this.#config = config;
    }

    get main() {
        return this.#main;
    }

    get header() {
        return this.#header;
    }

    get items() {
        return Object.values(this.#config.headerActions);
    }

    get findList() {
        return this.#header.querySelector('.headerTop__actions');
    }

    get findButton() {
        return this.#header.querySelector('.headerTop__button');
    }

    get findSignIn() {
        return this.#header.querySelector('#sign-in');
    }

    get findProfile() {
        return this.#header.querySelector('#profile');
    }

    #renderActions() {
        const template = Handlebars.compile(headerActionsHtml);
        return template(this.items)
    }


    #renderButton() {
        const gradientButton = new GradientButton();
        gradientButton.config = {
            text: 'Купить подписку',
            cssClass: 'button__subscription',
        };

        return gradientButton.render();
    }

    render() {
        const template = Handlebars.compile(headerHtml);
        this.#header.innerHTML = template(this.#config);

        this.findList.innerHTML = this.#renderActions();
        this.findButton.innerHTML = this.#renderButton();

        if (this.#config.isAuth === false) {
            this.#addSignInListener();
        } else {
            this.#addProfileListener();
        }

        return this.#header;
    }

    addActionListeners(urlRenderMap) {
        this.findList.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();

                console.log("action");

                const href = event.target.getAttribute('href');
                console.log(href);

                if (event.target.classList.contains('active')) {
                    return;
                }

                const render = urlRenderMap[href]; // Look up the render for the current path in the map
                render(this.#main); // Update the content of the page

                const activeLink = this.#header.querySelector('.active');
                if (activeLink) {
                    activeLink.classList.remove('active');
                }

                event.target.parentElement.classList.add('active');
            }
        });
    }

    #addSignInListener() {
        this.findSignIn.addEventListener('click', (event) => {
            event.preventDefault();
            modalWindow.open();
        });
    }

    #addProfileListener() {
        this.findProfile?.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Привет' + this.#config.email);
        });
    }
}
