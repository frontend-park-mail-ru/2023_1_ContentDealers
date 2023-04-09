import paths from "./RouterPaths";

type RouteHandler = (route: IRoute) => void;

interface IRoute {
    rule: string;
    handler: RouteHandler;
}

class Router {
    private routes: IRoute[];
    private unknownPageHandler: Function;
    private nearestNotAuthUrl: string | null;

    constructor() {
        this.routes = [];
        this.unknownPageHandler = () => {};
        this.nearestNotAuthUrl = null;
    };

    public start(entryPath: string): void {
        history.replaceState({ path: entryPath }, '', entryPath);

        window.addEventListener('popstate', (e) => {
            e.preventDefault();
            this.route();
        });

        this.route();
    };

    public goToPath(path: string): void {
        history.pushState({ path: path }, '', path);
        this.route();
    };

    private route(): void {
        const path = history.state?.path;
        if (!path) {
            return;
        }

        if (path !== paths.signIn && path !== paths.signUp) {
            this.nearestNotAuthUrl = path;
        }

        const rt = this.routes.find((r) => r.rule === path);
        if (rt) {
            rt.handler(rt);
        }
    };

    public showUnknownPage(): void {
        this.unknownPageHandler();
    };

    public setUnknownPageHandler(handler: Function) {
        this.unknownPageHandler = handler;
    };

    public addRule(rule: string, handler: RouteHandler) {
        this.routes.push({
            rule: rule,
            handler: handler,
        });
    };

    public getNearestNotAuthUrl(): string {
        return this.nearestNotAuthUrl || '/';
    };
}

const router = new Router();
export default router;
