import './App.css';

import BaseComponent from './Components/BaseComponent/BaseComponent';

import HeaderView from './Views/HeaderView/HeaderView';
import HeaderController from './Controllers/HeaderController/HeaderController';

import router from './Router/Router';
import paths from './Router/RouterPaths';

class App {
    // Views
    private headerView: HeaderView;

    // Controllers
    private headerController: HeaderController;

    // Elements
    private root: HTMLElement;
    private header: HTMLElement;
    private footer: HTMLElement;
    private content: HTMLElement;

    constructor() {
        this.initPage();
        this.initViews();
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
    };

    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    private initViews(): void {
        this.headerView = new HeaderView(this.header);
    };

    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    private initControllers(): void {
        this.headerController = new HeaderController(this.headerView);
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

        router.addRule(paths.settings, this.handleRedirectToSettings.bind(this));
    };


    private handleRedirectToMain(): void {
        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/');
    };

    private handleRedirectToCatalog(): void {
        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/catalog');
    };

    private handleRedirectToStore(): void {
        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/store');
    };

    private handleRedirectToMyMovie(): void {
        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('/my-movie');
    };

    private handleRedirectToSettings(): void {
        // mount
        this.headerController.mountComponent();

        // states
        this.headerView.changeActiveHeaderListItem('#');
    };
};

export default App;
