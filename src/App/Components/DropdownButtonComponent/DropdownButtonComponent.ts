import IComponent from '../IComponent/IComponent';

import DropdownButtonComponentTemplate from './DropdownButtonComponent.hbs';
import type DropdownButtonComponentData from './DropdownButtonComponentData';
import './DropdownButtonComponent.css';

class DropdownButtonComponent extends IComponent {
    // private readonly dropdownContentItems: HTMLElement;

    public constructor(parent: HTMLElement, data: DropdownButtonComponentData) {
        super(
            parent,
            DropdownButtonComponentTemplate({
                dataAction: data.dataAction,
                avatar: data.avatar,
                href: data.items?.at(0)?.linkHref,
            })
        );

        // this.dropdownContentItems = <HTMLElement>this.element.querySelector('.js-dropdown-content-container__items');

        // data.items?.forEach(item => {
        //     const link = new LinkComponent(this.dropdownContentItems, item);
        //     link.show();
        // });

        // this.bindClickEvent(this.handleClick.bind(this));
    }

    /**
     * Функция добавления обработчика события нажатия на компонент
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public unbindClickEvent(listener: any): void {
        this.element.removeEventListener('click', listener);
    }

    // private handleClick(e: Event): void {
    //     this.element.querySelector('.dropdown__content')?.classList.toggle('dropdown__content_show');
    //     e.preventDefault();
    //
    //     e.preventDefault();
    //
    //     const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
    //     if (href !== undefined && href !== null) {
    //         router.goToPath(href);
    //     }
    // }
}

export default DropdownButtonComponent;
