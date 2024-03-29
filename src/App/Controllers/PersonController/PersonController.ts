import IController from '../IController/IController';

import type PersonView from '../../Views/PersonView/PersonView';
import type PersonModel from '../../Models/PersonModel/PersonModel';

import EventDispatcher from '../../EventDispatcher/EventDispatcher';

import router from '../../Router/Router';

interface IId {
    id: number;
}

class PersonController extends IController<PersonView, PersonModel> {
    private personId: number | null;

    public constructor(view: PersonView, model: PersonModel) {
        super(view, model);

        this.personId = null;

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    }

    public async mountComponent(opts?: IId): Promise<void> {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.id) {
                this.personId = opts.id;

                this.model
                    .getPerson(this.personId)
                    .then(data => {
                        this.view.fillPerson(data);
                        super.mountComponent();
                    })
                    .catch(error => console.error(error));
            }
        }

        return;
    }

    public unmountComponent(): void {
        if (this.isMounted) {
            super.unmountComponent();

            this.personId = null;
        }
    }

    private handleClick(e: Event): void {
        e.preventDefault();

        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            return;
        }
    }
}

export default PersonController;
