import { Header } from "../components/header/header.js";
import { Carousel } from "../components/carousel/carousel.js";
import { CategoriesList } from "../components/categories/categoriesList.js";
import { Subscription } from "../components/subscription/subscription.js";
import { MainVideo } from "../components/mainVideo/mainVideo.js";
import { Category } from "../components/category/category.js";

// Root //
const root = document.getElementById('root');

export const headerObject = new Header(); // TODO

// UPLs
const URLs = {
    PROFILE_URL: 'http://89.208.199.170/api/profile',
    SELECTIONS_URL: 'http://89.208.199.170/api/selections',
}

function renderHeader(parent, main) {
    // Mb move some to header.js template ?
    const headerActions = {
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
    }
    const headerData = {
        logoIcon: 'static/img/logo/logo.svg',
        headerActions,
        searchIcon: 'static/img/svg-icons/search.svg',
        profileIcon: 'static/img/profile/profile.jpg',
    }
    const headerUrlRenderMap = {
        '/':            renderMainPage,
        '/catalog':     renderCatalogPage,
        '/store':       renderStorePage,
        '/my-movies':   renderMyMoviesPage,
    };

    // Render //
    // const headerObject = new Header(main);
    headerObject.main = main;
    headerObject.config = headerData;
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
    // Hardcode data // : TODO get fetch
    const mainVideos = {
        images: [
            'media/test-images/test1.jpg',
            'media/test-images/test2.jpg',
            'media/test-images/test3.jpg',
            'media/test-images/test4.jpg',
            'media/test-images/test5.jpg',
        ]
    }
    const categoriesInfo = {
        cat1: {
            name: 'cat1cat1cat1',
            href: '/cat1',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat2: {
            name: 'cat1cat1cat2',
            href: '/cat2',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat3: {
            name: 'cat1cat1cat3',
            href: '/cat3',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat4: {
            name: 'cat1cat1cat4',
            href: '/cat4',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat5: {
            name: 'cat1cat1cat5',
            href: '/cat5',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat6: {
            name: 'cat1cat1cat6',
            href: '/cat6',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat7: {
            name: 'cat1cat1cat7',
            href: '/cat7',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat8: {
            name: 'cat1cat1cat8',
            href: '/cat8',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat9: {
            name: 'cat1cat1cat9',
            href: '/cat9',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
        cat10: {
            name: 'cat1cat1cat10',
            href: '/cat10',
            src: 'static/img/svg-icons/clapperboard.svg' // Icon
        },
    }
    const subscriptionInfo = {
        backgroundImage: 'static/img/subscription/subscription.png',
        name: 'Подписка Оптимум',
        text: 'Смотрите кино, сериалы, мультфильмы и спорт',
        price: '399₽/месяц',
    }

    // Render //

    // One article
    const newVideosArticle = document.createElement('article');
    newVideosArticle.classList.add('news');
    const newVideosBlock = new Carousel(newVideosArticle);
    newVideosBlock.config = mainVideos;
    newVideosBlock.render();

    // Second
    const categoriesArticle = document.createElement('article');
    categoriesArticle.classList.add('categories');
    const categoriesBlock = new CategoriesList(categoriesArticle);
    categoriesBlock.config = categoriesInfo;
    categoriesBlock.render();

    // Third
    const subscriptionArticle = document.createElement('article');
    subscriptionArticle.classList.add('subscription');
    const subscriptionBlock = new Subscription(subscriptionArticle);
    subscriptionBlock.config = subscriptionInfo;
    subscriptionBlock.render();

    // Fourth
    const mainVideoArticle = document.createElement('article');
    mainVideoArticle.classList.add('main-video');
    const mainVideoBlock = new MainVideo(mainVideoArticle);
    mainVideoBlock.config = '';
    mainVideoBlock.render();


    parent.innerHTML = '';
    parent.appendChild(newVideosArticle);
    parent.appendChild(categoriesArticle);
    parent.appendChild(subscriptionArticle);
    parent.appendChild(mainVideoArticle);


    fetch(URLs.SELECTIONS_URL)
        .then(response => response.json())
        .then(data => {
            data.body['movie_selections'].forEach(selection => {
                console.log(selection)

                const  categoryArticle = document.createElement('article');
                categoryArticle.classList.add('category');

                const categoryBlock = new Category(categoryArticle);
                categoryBlock.config = selection;
                categoryBlock.render();

                parent.appendChild(categoryArticle);
            })
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

const button = document.querySelector('.button__subscription');
button.addEventListener('click', (event) => {
    headerObject.renderUserProfile();
});
