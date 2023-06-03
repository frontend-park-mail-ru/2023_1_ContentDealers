import './App.css';

import RootComponent from './Components/RootComponent/RootComponent';

import HeaderView from './Views/HeaderView/HeaderView';
import HeaderController from './Controllers/HeaderController/HeaderController';

import MediaHeaderView from './Views/MediaHeaderView/MediaHeaderView';
import MediaHeaderController from './Controllers/MediaHeaderController/MediaHeaderController';

import ModalView from './Views/ModalView/ModalView';
import ModalController from './Controllers/ModalController/ModalController';

import ContentView from './Views/ContentView/ContentView';
import ContentController from './Controllers/ContentController/ContentController';

import SettingsView from './Views/SettingsView/SettingsView';
import SettingsController from './Controllers/SettingsController/SettingsController';

import PersonView from './Views/PersonView/PersonView';
import PersonController from './Controllers/PersonController/PersonController';

import MainView from './Views/MainView/MainView';
import MainController from './Controllers/MainController/MainController';

import NotFoundView from './Views/NotFoundView/NotFoundView';
import NotFoundController from './Controllers/NotFoundController/NotFoundController';

import FavoritesView from './Views/FavoritesView/FavoritesView';
import FavoritesController from './Controllers/FavoritesController/FavoritesController';

import GenreView from './Views/GenreView/GenreView';
import GenreController from './Controllers/GenreController/GenreController';


import PaymentView from './Views/PaymentView/PaymentView';
import PaymentController from './Controllers/PaymentController/PaymentController';

import PlayerView from './Views/PlayerView/PlayerView';
import PlayerController from './Controllers/PlayerController/PlayerController';

import UserModel from './Models/UserModel/UserModel';
import ContentModel from './Models/ContentModel/ContentModel';
import PersonModel from './Models/PersonModel/PersonModel';
import SelectionModel from './Models/SelectionModel/SelectionModel';
import FavoritesModel from './Models/FavoritesModel/FavoritesModel';
import GenreModel from './Models/GenreModel/GenreModel';
import CardsModel from './Models/CardsModel/CardsModel';
import PlayerModel from './Models/PlayerModel/PlayerModel';
import PaymentModel from "./Models/PaymentModel/PaymentModel";

import type { IPlayerData } from './Models/PlayerModel/PlayerModel';

import router from './Router/Router';
import paths from './Router/RouterPaths';

import EventDispatcher from './EventDispatcher/EventDispatcher';
import AlertComponent from './Components/AlertComponent/AlertComponent';

class App {
    // Views
    private headerView: HeaderView;
    private mediaHeaderView: MediaHeaderView;

    private modalRightView: ModalView;
    private contentView: ContentView;
    private settingsView: SettingsView;
    private personView: PersonView;
    private mainView: MainView;
    private notFoundView: NotFoundView;
    private favoritesView: FavoritesView;
    private genreView: GenreView;
    private paymentView: PaymentView;

    private playerView: PlayerView;

    // Controllers
    private headerController: HeaderController;
    private mediaHeaderController: MediaHeaderController;
    private modalRightController: ModalController;
    private contentController: ContentController;
    private settingsController: SettingsController;
    private personController: PersonController;
    private mainController: MainController;
    private notFoundController: NotFoundController;
    private favoritesController: FavoritesController;
    private genreController: GenreController;
    private paymentController: PaymentController;

    private playerController: PlayerController;

    // Models
    private userModel: UserModel;
    private filmModel: ContentModel;
    private personModel: PersonModel;
    private selectionModel: SelectionModel;
    private favoritesModel: FavoritesModel;
    private genreModel: GenreModel;
    private paymentModel: PaymentModel;
    private cardsModel: CardsModel;
    private playerModel: PlayerModel;


    // Elements
    private root: HTMLElement;
    private alert: HTMLElement;
    private header: HTMLElement;
    private main: HTMLElement;
    private footer: HTMLElement;
    private modal: HTMLElement;

    public constructor() {
        this.initPage();
        this.initViews();
        this.initModels();
        this.initControllers();
        this.initRoutes();

        EventDispatcher.subscribe('start-player', (playerData: IPlayerData) => {
            this.newPlayer(playerData);
        });
    }


    private newPlayer(playerData: IPlayerData): void {
        let title = playerData.title;
        if (playerData.seasonData) {
            title += ` ${playerData.seasonData.seasonNum} сезон ${playerData.seasonData.episodeNum} серия`;
        }

        this.playerView = new PlayerView(this.root, title);
        this.playerModel.setId(playerData.id);
        this.playerModel.setIsFilm(playerData.isFilm);
        this.playerModel.setStopView(playerData.stopView)
        this.playerModel.setPlayerData(playerData);
        this.playerController = new PlayerController(this.playerView, this.playerModel);

        this.playerController.mountComponent();
    }

    public run(url: string): void {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then()
                .catch();
        }
        router.start(url);

        // mount
        this.headerController.mountComponent();
        this.mediaHeaderController.mountComponent();

        this.userModel
            .authUserByCookie()
            .then(() => EventDispatcher.emit('user-changed', this.userModel.getCurrentUser()))
            .catch(() => EventDispatcher.emit('render-signInButton'));
    }

    /**
     * Функция инициализирует базовую вёрстку страницы
     * (приватное поле класса)
     * @return {void}
     */
    private initPage(): void {
        const rootComponent = new RootComponent(document.body);
        rootComponent.show();

        this.root = rootComponent.querySelector('.ts-root');

        this.alert = rootComponent.querySelector('.ts-alert');
        this.header = rootComponent.querySelector('.ts-header');
        this.main = rootComponent.querySelector('.ts-main');
        this.footer = rootComponent.querySelector('.ts-footer');

        this.modal = rootComponent.querySelector('.ts-modal');
    }

    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    private initViews(): void {
        new AlertComponent(this.root);

        this.headerView = new HeaderView(this.header);
        this.mediaHeaderView = new MediaHeaderView(this.header);

        this.contentView = new ContentView(this.main);
        this.settingsView = new SettingsView(this.main);
        this.personView = new PersonView(this.main);
        this.mainView = new MainView(this.main);
        this.favoritesView = new FavoritesView(this.main);
        this.genreView = new GenreView(this.main);
        this.notFoundView = new NotFoundView(this.main);
        this.paymentView = new PaymentView(this.main);

        this.modalRightView = new ModalView(this.modal);
    }

    /**
     * Функция инициализирует все моедели (models)
     * (приватное поле класса)
     * @return {void}
     */
    private initModels(): void {
        this.userModel = new UserModel();
        this.filmModel = new ContentModel();
        this.personModel = new PersonModel();
        this.selectionModel = new SelectionModel();
        this.favoritesModel = new FavoritesModel();
        this.genreModel = new GenreModel();
        this.paymentModel = new PaymentModel();
        this.cardsModel = new CardsModel();
        this.playerModel = new PlayerModel();
    }

    /**
     * Функция инициализирует все контроллеры (controllers)
     * (приватное поле класса)
     * @return {void}
     */
    private initControllers(): void {
        this.headerController = new HeaderController(this.headerView, { user: this.userModel, payment: this.paymentModel });
        this.mediaHeaderController = new MediaHeaderController(this.mediaHeaderView);

        this.modalRightController = new ModalController(this.modalRightView, this.userModel);
        this.contentController = new ContentController(this.contentView, {
            user: this.userModel,
            content: this.filmModel,
            cards: this.cardsModel,
            player: this.playerModel,
            payment: this.paymentModel
        });
        this.settingsController = new SettingsController(this.settingsView, { user: this.userModel, payment: this.paymentModel });
        this.personController = new PersonController(this.personView, this.personModel);
        this.mainController = new MainController(this.mainView, {
            genres: this.genreModel,
            selections: this.selectionModel,
            cards: this.cardsModel,
        });

        this.notFoundController = new NotFoundController(this.notFoundView);
        this.favoritesController = new FavoritesController(this.favoritesView, this.favoritesModel);
        this.genreController = new GenreController(this.genreView, this.genreModel);
        this.paymentController = new PaymentController(this.paymentView);
    }

    /**
     * Функция задаёт связи между страницами (URL -> обработчик)
     * (приватное поле класса)
     * @return {void}
     */
    private initRoutes(): void {
        router.setUnknownPageHandler(this.handleRedirectToNotFound.bind(this));

        const routes = [
            { path: paths.main, handler: this.handleRedirectToMain },
            { path: paths.catalog, handler: this.handleRedirectToCatalog },
            { path: paths.store, handler: this.handleRedirectToStore },
            { path: paths.myMovie, handler: this.handleRedirectToFavorites },

            { path: paths.signIn, handler: this.handleRedirectToSignIn },
            { path: paths.signUp, handler: this.handleRedirectToSignUp },
            { path: paths.logout, handler: this.handleRedirectToLogout },
            { path: paths.settings, handler: this.handleRedirectToSettings },

            { path: paths.films, handler: this.handleRedirectToFilm },
            { path: paths.series, handler: this.handleRedirectToSeries },
            { path: paths.persons, handler: this.handleRedirectToPerson },

            { path: paths.genres, handler: this.handleRedirectToGenre },
            { path: paths.selections, handler: this.handleRedirectToSelections },

            { path: paths.search, handler: this.handleRedirectToSearchResults },

            { path: paths.paymentSuccess, handler: this.handleRedirectToSuccessPayment },
            { path: paths.paymentFailure, handler: this.handleRedirectToFailurePayment },
        ];

        routes.forEach(({ path, handler }) => {
            router.addRule(path, handler.bind(this));
        });
    }

    private async handleRedirectToMain() {
        EventDispatcher.emit('unmount-all');

        // mount
        this.mainView.clearSelections();

        try {
            await this.userModel.authUserByCookie();

            await this.mainController.mountViews();
            await this.mainController.mountComponent();
            await this.mainController.mountRatings();
        } catch {
            await this.mainController.mountComponent();
        }

        // states
        this.headerView.changeActiveHeaderListItem('/');
    }

    private handleRedirectToSignIn(): void {
        this.userModel
            .authUserByCookie()
            .then(() => {
                router.goToPath(router.getNearestNotAuthUrl());
            })
            .catch(() => {
                EventDispatcher.emit('modal-setSignIn', this.userModel);
                this.modalRightController.mountComponent();
            });
    }

    private handleRedirectToSignUp(): void {
        this.userModel
            .authUserByCookie()
            .then(() => {
                router.goToPath(router.getNearestNotAuthUrl());
            })
            .catch(() => {
                EventDispatcher.emit('modal-setSignUp', this.userModel);
                this.modalRightController.mountComponent();
            });
    }

    private handleRedirectToCatalog(): void {
        EventDispatcher.emit('unmount-all');

        // states
        this.headerView.changeActiveHeaderListItem('/catalog');
    }

    private handleRedirectToStore(): void {
        EventDispatcher.emit('unmount-all');

        // states
        this.headerView.changeActiveHeaderListItem('/store');
    }

    private handleRedirectToFavorites(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel
            .authUserByCookie()
            .then(() => {
                // mount
                this.favoritesController.mountComponent({
                    forFavorites: true,
                });

                // states
                this.headerView.changeActiveHeaderListItem('/my-movie');
            })
            .catch(() => {
                router.goToPath(paths.signIn);
            });
    }

    private handleRedirectToSettings(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel
            .authUserByCookie()
            .then(() => {
                // mount
                this.settingsController.mountComponent();

                // states
                this.headerView.changeActiveHeaderListItem('#');

                EventDispatcher.emit('user-changed', this.userModel.getCurrentUser());
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
                router.goToPath(router.getNearestNotAuthUrl());
            });
    }

    private async handleRedirectToFilm(data: any): Promise<void> {
        EventDispatcher.emit('unmount-all');

        if (!data?.[0]) {
            router.showUnknownPage();
            return;
        }

        const filmId = data[0];

        // mount
        await this.contentController.mountComponent({
            id: filmId.toString(),
            type: 'film',
        });

        // states
        this.headerView.changeActiveHeaderListItem('#');


        try {
            await this.userModel.authUserByCookie();
            this.contentController.addWatchButton(this.userModel.getCurrentUser());
            await this.contentController.addFavoritesButton();

            await this.contentController.addAbout();
        } catch {
            this.contentController.addWatchButton(this.userModel.getCurrentUser());
        }

        // this.userModel.authUserByCookie().then(() => {
        //     this.contentController.addFavoritesButton();
        //     this.contentController.addAbout();
        // });
        //
        // this.contentController.addWatchButton(this.userModel.getCurrentUser());

        return;
    }

    private async handleRedirectToSeries(data: any): Promise<void> {
        EventDispatcher.emit('unmount-all');

        if (!data?.[0]) {
            router.showUnknownPage();
            return;
        }

        const filmId = data[0];

        // mount
        await this.contentController.mountComponent({
            id: filmId.toString(),
            type: 'series',
        });

        // states
        this.headerView.changeActiveHeaderListItem('#');

        this.userModel.authUserByCookie().then(() => {
            this.contentController.addFavoritesButton();
            this.contentController.addAbout();
        });

        this.contentController.addWatchButton(this.userModel.getCurrentUser());

        return;
    }

    private handleRedirectToPerson(data: any): void {
        EventDispatcher.emit('unmount-all');

        if (!data?.[0]) {
            router.showUnknownPage();
            return;
        }

        const personId = data[0];

        // mount
        this.personController.mountComponent({ id: personId.toString() });

        // states
        this.headerView.changeActiveHeaderListItem('#');
    }

    private async handleRedirectToLogout() {

        await this.userModel.logoutUser();
        router.goToPath(paths.main);
    }

    private handleRedirectToNotFound(): void {
        EventDispatcher.emit('unmount-all');

        // mount
        this.notFoundController.mountComponent();
    }

    private handleRedirectToGenre(data: any): void {
        EventDispatcher.emit('unmount-all');

        if (!data?.[0]) {
            router.showUnknownPage();
            return;
        }

        const genreId = data[0];

        // mount
        this.genreController.mountComponent({
            id: genreId.toString(),
            forGenre: true,
        });

        // states
        this.headerView.changeActiveHeaderListItem('#');
    }

    private handleRedirectToSelections(data: any): void {
        EventDispatcher.emit('unmount-all');

        if (!data?.[0]) {
            router.showUnknownPage();
            return;
        }

        const genreId = data[0];

        // mount
        this.genreController.mountComponent({
            id: genreId.toString(),
            forSelections: true,
        });

        // states
        this.headerView.changeActiveHeaderListItem('#');
    }

    private handleRedirectToSearchResults(data: any): void {
        EventDispatcher.emit('unmount-all');

        if (!data?.[0]) {
            router.showUnknownPage();
            return;
        }

        const searchPattern = data[0];

        this.favoritesController.mountComponent({
            forSearch: true,
            pattern: searchPattern,
        });

        this.headerView.changeActiveHeaderListItem('#');
    }

    private handleRedirectToSuccessPayment(): void {
        EventDispatcher.emit('unmount-all');

        this.headerController.mountComponent();
        this.paymentController.mountComponent({
            success: true,
        })
    }

    private handleRedirectToFailurePayment(): void {
        EventDispatcher.emit('unmount-all');

        this.headerController.mountComponent();
        this.paymentController.mountComponent({
            failure: true,
        })
    }
}

export default App;
