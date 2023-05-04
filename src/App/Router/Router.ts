import paths from './RouterPaths';

interface IRoute {
    rule: RegExp;
    handler: RouteHandler;
}

type RouteHandler = (params: string[]) => void;
type UnknownHandler = () => void;

class Router {
    private routes: IRoute[];
    private unknownPageHandler: UnknownHandler;
    private nearestNotAuthUrl: string;

    public constructor() {
        this.routes = [];
        this.unknownPageHandler = (): void => console.error('No unknown page handler!');
        this.nearestNotAuthUrl = paths.main;
    }

    public start(entryPath: string): void {
        history.replaceState({ path: entryPath }, '', entryPath);

        window.addEventListener('popstate', e => {
            e.preventDefault();
            this.route();
        });

        this.route();
    }

    public goToPath(path: string): void {
        history.pushState({ path: path }, '', path);
        this.route();
    }

    private route(): void {
        const rawPath = history.state?.path;

        if (!rawPath) {
            return;
        }

        const path = this.sanitizeUrl(rawPath);

        const tmpPath: string = '/' + path;
        if (
            tmpPath !== paths.signIn &&
            tmpPath !== paths.signUp &&
            tmpPath !== paths.settings &&
            tmpPath !== paths.myMovie
        ) {
            this.nearestNotAuthUrl = tmpPath;
        }

        const foundedPath = this.routes.find(({ rule, handler }) => {
            const match = path.match(rule);
            if (match) {
                handler(match.slice(1));
            }
            return match;
        });

        if (!foundedPath) {
            this.unknownPageHandler();
            return;
        }
    }

    public showUnknownPage(): void {
        this.unknownPageHandler();
    }

    public setUnknownPageHandler(handler: UnknownHandler): void {
        this.unknownPageHandler = handler;
    }

    public addRule(rule: string, handler: RouteHandler): IRoute {
        const newRoute = {
            rule: this.parseRule(rule),
            handler: handler,
        };
        this.routes.push(newRoute);
        return newRoute;
    }

    public removeRule(rule: string): void {
        const index = this.routes.findIndex(
            route => route.rule.source === this.parseRule(rule).source
        );
        if (index > -1) {
            this.routes.splice(index, 1);
        }
    }

    public getNearestNotAuthUrl(): string {
        return this.nearestNotAuthUrl;
    }

    private parseRule(rule: string): RegExp {
        // const uri = this.sanitizeUrl(rule)
        // .replace(/{\:number}/g, '(\\d+)')
        // .replace(/{\:word}/g, '(\\w+)')
        // .replace(/{\:\w+}/g, '(\\w+)');
        const uri = this.sanitizeUrl(rule)
            .replace(/{:number}/g, '(\\d+)')
            .replace(/{:word}/g, '(\\w+)')
            .replace(/{:\w+}/g, '(\\w+)');

        return new RegExp(`^${uri}$`, 'i');
    }

    private sanitizeUrl(rule: string): string {
        return rule.replace(/\/$/, '').replace(/^\//, '');
    }
}

const router = new Router();
export default router;
