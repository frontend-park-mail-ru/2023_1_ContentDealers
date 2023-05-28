import IController from '../IController/IController';

import PaymentView from '../../Views/PaymentView/PaymentView';
import IModel from '../../Models/IModel/IModel';

import router from '../../Router/Router';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';
import paths from '../../Router/RouterPaths';

interface status {
    success?: boolean;
    failure?: boolean;
}

class PaymentController extends IController<PaymentView, IModel> {
    public constructor(view: PaymentView) {
        super(view, IModel);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    public async mountComponent(opts?: status): Promise<void> {
        if (!opts) {
            router.showUnknownPage();
        }

        if (!this.isMounted) {
            if (opts?.success) {
                this.view.fillData(true);
            } else {
                this.view.fillData(false);
            }

            this.view.bindHomeButtonClick(this.handleClick.bind(this));

            super.mountComponent();
        }
    }

    private handleClick(e: Event): void {
        e.preventDefault();
        if (this.isMounted) {
            router.goToPath(paths.main);

            return;
        }
    }
}

export default PaymentController;
