/*jslint es6: true*/

import { Header } from '../components/header/header.js';
import { Carousel } from '../components/carousel/carousel.js';
import { CategoriesList } from '../components/categories/categoriesList.js';
import { Subscription } from '../components/subscription/subscription.js';
import { MainVideo } from '../components/mainVideo/mainVideo.js';
import { Category } from '../components/category/category.js';

// Root //
const root = document.getElementById('root');

export const headerObject = new Header();

// UPLs
const URLs = {
    PROFILE_URL: 'http://89.208.199.170/api/profile',
    SELECTIONS_URL: 'http://89.208.199.170/api/selections',
};

function renderHeader(parent, main) {
    const headerUrlRenderMap = {
        '/':            renderMainPage,
        '/catalog':     renderCatalogPage,
        '/store':       renderStorePage,
        '/my-movies':   renderMyMoviesPage,
    };

    // Render //
    // const headerObject = new Header(main);
    headerObject.main = main;
    // headerObject.config = headerData;
    const header = headerObject.render();

    headerObject.addActionListeners(headerUrlRenderMap);

    parent.prepend(header);
    return header;
}

function createMainContainer(parent) {
    const main = document.createElement('main');
    main.classList.add('main');
    parent.appendChild(main);

    return main;
}

// Renders for pages //
function renderMainPage(parent) {
    // Hardcode data //
    const mainVideos = {
        images: [
            'media/previews/avatar.jpg',
            'media/previews/mad-max.jpg',
            'media/previews/interstellar.jpg',
            'media/previews/king-kong.jpg',
            'media/previews/thor.jpg',
        ]
    };
    const categoriesInfo = {
        cat1: {
            name: 'Фильмы',
            href: '/films',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat2: {
            name: 'Сериалы',
            href: '/serials',
            src: 'static/img/svg-icons/youtube.svg' // Icon
        },
        cat3: {
            name: 'Мультфильмы',
            href: '/cartoons',
            src: 'static/img/svg-icons/candy-cane.svg' // Icon
        },
        cat4: {
            name: 'Фитнес',
            href: '/fitness',
            src: 'static/img/svg-icons/heart-pulse.svg' // Icon
        },
        cat5: {
            name: 'Природа',
            href: '/nature',
            src: 'static/img/svg-icons/leaf.svg' // Icon
        },
        cat6: {
            name: 'Лекции',
            href: '/lectures',
            src: 'static/img/svg-icons/graduation-cap.svg' // Icon
        },
        cat7: {
            name: 'Кулинария',
            href: '/cooking',
            src: 'static/img/svg-icons/utensils.svg' // Icon
        },
        cat8: {
            name: 'Программы',
            href: '/programs',
            src: 'static/img/svg-icons/newspaper-regular.svg' // Icon
        },
        cat9: {
            name: 'Концерты',
            href: '/concerts',
            src: 'static/img/svg-icons/music.svg' // Icon
        },
        cat10: {
            name: 'Видеокурсы',
            href: '/video-courses',
            src: 'static/img/svg-icons/circle-play-regular.svg' // Icon
        },
    };
    const subscriptionInfo = {
        backgroundImage: 'static/img/subscription/subscription.png',
        name: 'Подписка Оптимум',
        text: 'Смотрите кино, сериалы, мультфильмы и спорт',
        price: '399₽/месяц',
    };

    // Render articles //
    const articles = [
        { className: 'news',            templateType: Carousel,         config: mainVideos },
        { className: 'categories',      templateType: CategoriesList,   config: categoriesInfo },
        { className: 'subscription',    templateType: Subscription,     config: subscriptionInfo },
        { className: 'main-video',      templateType: MainVideo,        config: '' },
    ];

    parent.innerHTML = '';
    articles.forEach(({className, templateType, config}) => {
        const article = document.createElement('article');
        article.classList.add(className);

        const block = new templateType(article);
        block.config = config;
        block.render();

        parent.appendChild(article);
    });

    fetch(URLs.SELECTIONS_URL)
        .then(response => response.json())
        .then(data => {
            data.body['movie_selections'].forEach(selection => {
                const categoryArticle = document.createElement('article');
                categoryArticle.classList.add('category');

                const categoryBlock = new Category(categoryArticle);
                categoryBlock.config = selection;
                categoryBlock.render();

                parent.appendChild(categoryArticle);
            });
        })
        .catch(error => {
            console.error('Problem with the fetch operation:', error);
        });

    return parent;
}

// Stubs //
function renderCatalogPage(parent) {
    parent.innerHTML = `
        <span style="color: white">Nice, this is catalog page</span>
    `;

    return parent;
}
function renderStorePage(parent) {
    parent.innerHTML = `
        <span style="color: white">Nice, this is store page</span>
    `;

    return parent;
}
function renderMyMoviesPage(parent) {
    parent.innerHTML = `
        <span style="color: white">Nice, this is my-movies page</span>
    `;

    return parent;
}

// Initial state //
function InitialState() {
    const main = createMainContainer(root); // Render tag main //
    renderHeader(root, main); // Render header //
    renderMainPage(main); // Render MainPage to tag main //
}

// Rendering //
InitialState();
