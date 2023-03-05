import { headerHtml } from './headerTemplate.hbs.js';
import { headerActionsHtml } from "./headerActionsTemplate.hbs.js";

import { GradientButton } from "../gradientButton/gradientButton.js";

import { modalWindow } from '../../js/modal.js'
import { profileHtml } from "./profileTemplate.hbs.js";
import { signinHtml } from "./signinTemplate.hbs.js";

export class Header {
    #main
    #header
    #config
    #email

    #testBool

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

    set main(main) {
        this.#main = main;
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

    get findUserProfile() {
        return this.#header.querySelector('.userProfile');
    }

    get findLogout() {
        return this.#header.querySelector('.logout');
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

        // if (this.#config.isAuth === false) {
        //     this.#addSignInListener();
        // } else {
        //     this.#addProfileListener();
        // }
        this.renderUserProfile();

        return this.#header;
    }

    renderUserProfile() {
        fetch('http://89.208.199.170/api/profile')
            .then(response => response.json())
            .then(data => {
                console.log('In fetch', data)
                switch (data.status) {
                    case 200:
                        // If user data
                        this.#config.isAuth = true;
                        this.#email = data.body['user'].email;
                        console.log('In fetch 200',  this.#config.isAuth, this.#email)
                        break;
                    default:
                        // If not user data
                        this.#config.isAuth = false;
                        this.#email = '';
                        console.log('In fetch not 200',  this.#config.isAuth, this.#email)
                }
            }).then(() => {
                if (this.#config.isAuth === true) {
                    console.log('We auth')
                    const template = Handlebars.compile(profileHtml);
                    this.findUserProfile.innerHTML = template(this.#config);
                    this.#addProfileListener();
                    this.#addLogoutListener();
                } else {
                    console.log('We not auth')
                    const template = Handlebars.compile(signinHtml);
                    this.findUserProfile.innerHTML = template(this.#config);
                    this.#addSignInListener();
                }
            }).catch(error => { const mute = error });
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
        this.findSignIn?.addEventListener('click', (event) => {
            event.preventDefault();
            modalWindow.open(this);
        });
    }

    #addProfileListener() {
        this.findProfile?.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Привет ' + this.#email);
        });
    }

    #addLogoutListener() {
        this.findLogout?.addEventListener('click', (event) => {
            event.preventDefault();
            fetch('http://89.208.199.170/api/logout', {
                method: 'POST',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        this.#config.isAuth = false;
                        this.renderUserProfile();
                    }
                });
        });
    }
}
