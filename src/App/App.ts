import './App.css';

import RootComponent from './Components/RootComponent/RootComponent';

import HeaderView from './Views/HeaderView/HeaderView';
import HeaderController from './Controllers/HeaderController/HeaderController';

import ModalRightView from './Views/ModalRightView/ModalRightView';
import ModalRightController from './Controllers/ModalRightController/ModalRightController';

import FilmView from './Views/FilmView/FilmView';
import FilmController from './Controllers/FilmController/FilmController';

import SettingsView from './Views/SettingsView/SettingsView';
import SettingsController from './Controllers/SettingsController/SettingsController';

import PersonView from './Views/PersonView/PersonView';
import PersonController from './Controllers/PersonController/PersonController';

import MainView from './Views/MainView/MainView';
import MainController from './Controllers/MainController/MainController';

import NotFoundView from './Views/NotFoundView/NotFoundView';
import NotFoundController from './Controllers/NotFoundController/NotFoundController';

import UserModel from './Models/UserModel/UserModel';
import FilmModel from './Models/FilmModel/FilmModel';
import PersonModel from './Models/PersonModel/PersonModel';
import SelectionModel from "./Models/SelectionModel/SelectionModel";

import router from './Router/Router';
import paths from './Router/RouterPaths';

import EventDispatcher from './EventDispatcher/EventDispatcher';

class App {
    // Views
    private headerView: HeaderView;
    private modalRightView: ModalRightView;
    private filmView: FilmView;
    private settingsView: SettingsView;
    private personView: PersonView;
    private mainView: MainView;
    private notFoundView: NotFoundView;

    // Controllers
    private headerController: HeaderController;
    private modalRightController: ModalRightController;
    private filmController: FilmController;
    private settingsController: SettingsController;
    private personController: PersonController;
    private mainController: MainController;
    private notFoundController: NotFoundController;

    // Models
    private userModel: UserModel;
    private filmModel: FilmModel;
    private personModel: PersonModel;
    private selectionModel: SelectionModel;


    // Elements
    private root: HTMLElement;
    private header: HTMLElement;
    private footer: HTMLElement;
    private content: HTMLElement;
    private modalRight: HTMLElement;

    constructor() {
        this.initPage();
        this.initViews();
        this.initModels();
        this.initControllers();
        this.initRoutes();
    }

    public run(url: string) {
        router.start(url);

        // Сделать один запрос на profile
    }

    /**
     * Функция инициализирует базовую вёрстку страницы
     * (приватное поле класса)
     * @return {void}
     */
    private initPage(): void {
        const rootComponent = new RootComponent(document.body);
        rootComponent.show();

        this.root = rootComponent.querySelector('.js-root');
        this.header = rootComponent.querySelector('.js-header');
        this.footer = rootComponent.querySelector('.js-footer');
        this.content = rootComponent.querySelector('.js-content');
        this.modalRight = rootComponent.querySelector('.js-modal--right');
    };

    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    private initViews(): void {
        this.headerView = new HeaderView(this.header);
        this.modalRightView = new ModalRightView(this.modalRight);
        this.filmView = new FilmView(this.content);
        this.settingsView = new SettingsView(this.content);
        this.personView = new PersonView(this.content);
        this.mainView = new MainView(this.content);

        this.notFoundView = new NotFoundView(this.content);
    };

    /**
     * Функция инициализирует все моедели (models)
     * (приватное поле класса)
     * @return {void}
     */
    private initModels(): void {
        this.userModel = new UserModel();
        this.filmModel = new FilmModel();
        this.personModel = new PersonModel();
        this.selectionModel = new SelectionModel();
    };

    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    private initControllers(): void {
        this.headerController = new HeaderController(this.headerView);
        this.modalRightController = new ModalRightController(this.modalRightView, this.userModel);
        this.filmController = new FilmController(this.filmView, this.filmModel);
        this.settingsController = new SettingsController(this.settingsView, this.userModel);
        this.personController = new PersonController(this.personView, this.personModel);
        this.mainController = new MainController(this.mainView, { selections: this.selectionModel });

        this.notFoundController = new NotFoundController(this.notFoundView);
    };

    /**
     * Функция задаёт связи между страницами (URL -> обработчик)
     * (приватное поле класса)
     * @return {void}
     */
    private initRoutes(): void {
        router.setUnknownPageHandler(this.handleRedirectToNotFound.bind(this));

        const routes = [
            { path: paths.main,     handler: this.handleRedirectToMain },
            { path: paths.catalog,  handler: this.handleRedirectToCatalog },
            { path: paths.store,    handler: this.handleRedirectToStore },
            { path: paths.myMovie,  handler: this.handleRedirectToMyMovie },

            { path: paths.signIn,   handler: this.handleRedirectToSignIn },
            { path: paths.signUp,   handler: this.handleRedirectToSignUp },
            { path: paths.logout,   handler: this.handleRedirectToLogout },
            { path: paths.settings, handler: this.handleRedirectToSettings },

            { path: paths.films,    handler: this.handleRedirectToFilm },
            { path: paths.persons,  handler: this.handleRedirectToPerson },
        ];

        routes.forEach(({ path, handler }) => {
            router.addRule(path, handler.bind(this));
        });
    };


    private handleRedirectToMain(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        // mount
        this.headerController.mountComponent();
        this.mainController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/');
    };

    private handleRedirectToSignIn(): void {
        this.userModel.authUserByCookie()
            .then(() => {
                router.goToPath(router.getNearestNotAuthUrl());
            })
            .catch(() => {
                EventDispatcher.emit('modalRight-setSignIn', this.userModel);
                this.modalRightController.mountComponent();
            });
    };

    private handleRedirectToSignUp(): void {
        this.userModel.authUserByCookie()
            .then(() => {
                router.goToPath(router.getNearestNotAuthUrl());
            })
            .catch(() => {
                EventDispatcher.emit('modalRight-setSignUp', this.userModel);
                this.modalRightController.mountComponent();
            });
    };

    private handleRedirectToCatalog(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/catalog');
    };

    private handleRedirectToStore(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/store');
    };

    private handleRedirectToMyMovie(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/my-movie');
    };

    private handleRedirectToSettings(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                // mount
                this.headerController.mountComponent();
                this.settingsController.mountComponent();

                // states
                this.headerView.changeActiveHeaderListItem('#');
                this.settingsView.changeActiveLeftMenuItem(paths.settings);

                EventDispatcher.emit('user-changed', this.userModel.getCurrentUser());
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
                router.goToPath(router.getNearestNotAuthUrl());
            });
    };

    private handleRedirectToFilm(data: any): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        if (!data || !data[0]) {
            router.showUnknownPage();
            return;
        }

        const filmId = data[0];

        // mount
        this.headerController.mountComponent();

        EventDispatcher.emit('new-player');
        this.filmController.mountComponent({ id: filmId.toString() });

        // states
        this.headerView.changeActiveHeaderListItem('#');
    };

    private handleRedirectToPerson(data: any): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        if (!data || !data[0]) {
            router.showUnknownPage();
            return;
        }

        const personId = data[0];

        // mount
        this.headerController.mountComponent();
        this.personController.mountComponent({ id: personId.toString() });

        // states
        this.headerView.changeActiveHeaderListItem('#');
    };

    private handleRedirectToLogout(): void {
        EventDispatcher.emit('redirect', paths.logout);

        this.userModel.logoutUser();
        router.goToPath(paths.main);
    };

    private handleRedirectToNotFound(): void {
        EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        this.headerController.mountComponent();
        this.notFoundController.mountComponent();
    };
}

export default App;