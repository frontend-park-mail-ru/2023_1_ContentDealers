import { Header } from "../components/header/header.js";
import { Carousel } from "../components/carousel/carousel.js";
import { CategoriesList } from "../components/categories/categoriesList.js";
import { Subscription } from "../components/subscription/subscription.js";
import { MainVideo } from "../components/mainVideo/mainVideo.js";
import { Category } from "../components/category/category.js";

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
    logoIcon: 'img/logo/logo.svg',
    headerActions,
    searchIcon: 'img/svg-icons/search.svg',
    profileIcon: 'img/profile/profile.jpg',
}

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
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat2: {
        name: 'cat1cat1cat2',
        href: '/cat2',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat3: {
        name: 'cat1cat1cat3',
        href: '/cat3',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat4: {
        name: 'cat1cat1cat4',
        href: '/cat4',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat5: {
        name: 'cat1cat1cat5',
        href: '/cat5',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat6: {
        name: 'cat1cat1cat6',
        href: '/cat6',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat7: {
        name: 'cat1cat1cat7',
        href: '/cat7',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat8: {
        name: 'cat1cat1cat8',
        href: '/cat8',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat9: {
        name: 'cat1cat1cat9',
        href: '/cat9',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
    cat10: {
        name: 'cat1cat1cat10',
        href: '/cat10',
        src: 'img/svg-icons/clapperboard.svg' // Icon
    },
}

const subscriptionInfo = {
    backgroundImage: 'img/subscription/subscription.png',
    name: 'Подписка Оптимум',
    text: 'Смотрите кино, сериалы, мультфильмы и спорт',
    price: '399₽/месяц',
}

const root = document.getElementById('root');

function renderHeader(parent) {
    console.log("Hello renderHeader");

    const header = document.createElement('header');
    header.classList.add('headerTop');

    const headerContent = new Header(header);
    headerContent.config = headerData;
    headerContent.render();

    parent.prepend(header);
}

function renderMain(parent) {
    console.log("Hello renderMain");

    const main = document.createElement('main');
    main.classList.add('main');
    parent.appendChild(main);

    const mainContent = {
        items: [
            { className: 'news', config: mainVideos },

        ]
    };

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


    main.appendChild(newVideosArticle);
    main.appendChild(categoriesArticle);
    main.appendChild(subscriptionArticle);
    main.appendChild(mainVideoArticle);
}

// Renders
renderHeader(root);
renderMain(root);


fetch('http://89.208.199.170/api/selections')
    .then(response => response.json())
    .then((data) => {
        const main = document.querySelector('.main');
        console.log(main);

        data.body['movie_selections'].forEach(selection => {
            console.log(selection)

            const  categoryArticle = document.createElement('article');
            categoryArticle.classList.add('category');

            const categoryBlock = new Category(categoryArticle);
            categoryBlock.config = selection;
            categoryBlock.render();

            main.appendChild(categoryArticle);
        })
    });
