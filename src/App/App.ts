import './App.css';

import BaseComponent from './Components/BaseComponent/BaseComponent';

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

import { UserModel } from './Models/UserModel/UserModel';
import { FilmModel } from './Models/FilmModel/FilmModel';
import PersonModel from './Models/PersonModel/PersonModel';

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

    // Controllers
    private headerController: HeaderController;
    private modalRightController: ModalRightController;
    private filmController: FilmController;
    private settingsController: SettingsController;
    private personController: PersonController;

    // Models
    private userModel: UserModel;
    private filmModel: FilmModel;
    private personModel: PersonModel;


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
    }

    /**
     * Функция инициализирует базовую вёрстку страницы
     * (приватное поле класса)
     * @return {void}
     */
    private initPage(): void {
        const baseComponent = new BaseComponent(document.body);
        baseComponent.show();

        this.root = <HTMLElement>baseComponent.querySelector('.js-root');
        this.header = <HTMLElement>baseComponent.querySelector('.js-header');
        this.footer = <HTMLElement>baseComponent.querySelector('.js-footer');
        this.content = <HTMLElement>baseComponent.querySelector('.js-content');
        this.modalRight = <HTMLElement>baseComponent.querySelector('.js-modal--right');
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
    };

    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    private initControllers(): void {
        this.headerController = new HeaderController(this.headerView);
        this.modalRightController = new ModalRightController(this.modalRightView);
        this.filmController = new FilmController(this.filmView, this.filmModel);
        this.settingsController = new SettingsController(this.settingsView, this.userModel);
        this.personController = new PersonController(this.personView, this.personModel);
    };

    /**
     * Функция задаёт связи между страницами (URL -> обработчик)
     * (приватное поле класса)
     * @return {void}
     */
    private initRoutes(): void {
        router.addRule(paths.main, this.handleRedirectToMain.bind(this));
        router.addRule(paths.catalog, this.handleRedirectToCatalog.bind(this));
        router.addRule(paths.store, this.handleRedirectToStore.bind(this));
        router.addRule(paths.myMovie, this.handleRedirectToMyMovie.bind(this));

        router.addRule(paths.signIn, this.handleRedirectToSignIn.bind(this));
        router.addRule(paths.signUp, this.handleRedirectToSignUp.bind(this));

        router.addRule(paths.settings, this.handleRedirectToSettings.bind(this));

        router.addRule(paths.person, this.handleRedirectToPerson.bind(this));
    };


    private handleRedirectToMain(): void {
        // EventDispatcher.emit('unmount-all');

        this.userModel.authUserByCookie()
            .then(() => {
                EventDispatcher.emit('render-profileButton');
            })
            .catch(() => {
                EventDispatcher.emit('render-signInButton');
            });

        // mount
        console.log('Mount header')
        this.headerController.mountComponent();

        const film = this.filmController.mountComponent({ id: 1 });
        // console.log('Film', film)

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
        console.log('handleRedirectToSettings')
        EventDispatcher.emit('unmount-all');

        // this.userModel.authUserByCookie()
        //     .then(() => {
        //         // mount
        //         this.headerController.mountComponent();
        //         this.settingsController.mountComponent();
        //
        //         // states
        //         this.headerView.changeActiveHeaderListItem('#');
        //         this.settingsView.changeActiveLeftMenuItem('/settings');
        //     })
        //     .catch(() => {
        //         router.goToPath(router.getNearestNotAuthUrl());
        //     });

        // mount
        this.headerController.mountComponent();
        this.settingsController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('#');
        this.settingsView.changeActiveLeftMenuItem('/settings');
    };


    private handleRedirectToPerson(data: any): void {
        console.log('handleRedirectToPerson');
        EventDispatcher.emit('unmount-all');

        // mount
        this.headerController.mountComponent();

        if (!data || !data[0]) {
            router.showUnknownPage();
            return;
        }

        const personId = data[0];
        const person = this.personController.mountComponent({ id: personId.toString() });

        // states
        this.headerView.changeActiveHeaderListItem('#');
    }
}

export default App;
