import { headerHtml } from './headerTemplate.hbs.js';
import { headerActionsHtml } from './headerActionsTemplate.hbs.js';
import { headerUserProfileHtml } from './headerUserProfileTemplate.hbs.js';

import { GradientButton } from '../gradientButton/gradientButton.js';

import { modalWindow } from '../../js/modal.js';

export class Header {
    #main;
    #header;

    #headerActions = {
        main: {
            name: 'Главная',
            href: '/'
        },
        catalog: {
            name: 'Каталог',
            href: '/catalog'
        },
        store: {
            name: 'Магазин',
            href: '/store'
        },
        movies: {
            name: 'Моё',
            href: '/my-movies'
        }
    };
    #headerData = {
        logoIcon: 'static/img/logo/logo.svg',
        headerActions: this.#headerActions,
        searchIcon: 'static/img/svg-icons/search.svg',
        profileIcon: 'static/img/profile/profile.jpg',
    };

    constructor(main) {
        const header = document.createElement('header');
        header.classList.add('headerTop');

        this.#main = main;
        this.#header = header;
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

    #findList() {
        return this.#header.querySelector('.headerTop__actions');
    }

    #findButton() {
        return this.#header.querySelector('.headerTop__button');
    }

    #findSignIn() {
        return this.#header.querySelector('#sign-in');
    }

    #findProfile() {
        return this.#header.querySelector('#profile');
    }

    #findUserProfile() {
        return this.#header.querySelector('.userProfile');
    }

    #findLogout() {
        return this.#header.querySelector('.logout');
    }

    #renderActions() {
        const template = Handlebars.compile(headerActionsHtml);
        return template(this.#headerActions);
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
        this.#header.innerHTML = template(this.#headerData);

        this.#findList().innerHTML = this.#renderActions();
        this.#findButton().innerHTML = this.#renderButton();

        this.renderUserProfile();

        return this.#header;
    }

    renderUserProfile() {
        let isAuth = false;
        let email = '';

        fetch('http://89.208.199.170/api/profile')
            .then(response => response.json())
            .then(data => {
                switch (data.status) {
                    case 200:
                        isAuth = true;
                        email = data.body['user'].email;
                        break;
                    default:
                }
            }).then(() => {
                const template = Handlebars.compile(headerUserProfileHtml);

                this.#findUserProfile().innerHTML = template({ isAuth, email, profileIcon: this.#headerData.profileIcon });

                if (isAuth) {
                    this.#addLogoutListener();
                } else {
                    this.#addSignInListener();
                }
            });
    }

    #changeActionListener(urlRenderMap, event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();

            const href = event.target.getAttribute('href');

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
    }

    addActionListeners(urlRenderMap) {
        this.#findList().addEventListener('click', (event) => this.#changeActionListener(urlRenderMap, event));
    }

    removeActionListeners(urlRenderMap) {
        this.#findList().removeEventListener('click', (event) => this.#changeActionListener(urlRenderMap, event));
    }

    #signInListener(event) {
        event.preventDefault();
        modalWindow.open(this);
    }

    #addSignInListener() {
        this.#findSignIn()?.addEventListener('click', this.#signInListener);
    }

    #removeSignInListener() {
        this.#findSignIn()?.removeEventListener('click', this.#signInListener);
    }

    #addLogoutListener() {
        this.#findLogout()?.addEventListener('click', (event) => {
            event.preventDefault();
            fetch('http://89.208.199.170/api/logout', {
                method: 'POST',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        // this.#config.isAuth = false;
                        this.renderUserProfile();
                    }
                });
        });
    }
}
