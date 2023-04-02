interface IRoute {
    rule: string;
    handler: Function;
}

class Router {
    private routes: IRoute[];
    private unknownPageHandler: Function;
    constructor() {
        this.routes = [];
        this.unknownPageHandler = () => {};
    }

    public start(entryPath: string): void {
        history.replaceState({ path: entryPath }, '', entryPath);
        this.route();
    }

    public goToPath(path: string): void {
        history.pushState({ path: path }, '', path);
        this.route();
    }

    private route(): void {
        const path = history.state?.path;
        if (!path) {
            return;
        }

        const rt = this.routes.find((r) => r.rule === path);
        if (rt) {
            rt.handler(rt);
        }
    }

    public showUnknownPage(): void {
        this.unknownPageHandler();
    }

    public setUnknownPageHandler(handler: Function) {
        this.unknownPageHandler = handler;
    }

    public addRule(rule: string, handler: Function) {
        this.routes.push({
            rule: rule,
            handler: handler,
        })
    }
}

const router = new Router();
export default router;
