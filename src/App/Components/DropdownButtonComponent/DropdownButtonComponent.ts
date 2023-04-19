import IComponent from '../IComponent/IComponent';

import DropdownButtonComponentTemplate from './DropdownButtonComponent.hbs';
import DropdownButtonComponentData from './DropdownButtonComponentData';
import './DropdownButtonComponent.css';

import LinkComponent from '../LinkComponent/LinkComponent';

class DropdownButtonComponent extends IComponent {
    private readonly dropdownContentItems: HTMLElement;

    constructor(parent: HTMLElement, data: DropdownButtonComponentData) {
        super(parent, DropdownButtonComponentTemplate({ dataAction: data.dataAction, avatar: data.avatar }));

        this.dropdownContentItems = <HTMLElement>this.element.querySelector('.js-dropdown-content-container__items');

        data.items?.forEach(item => {
            const link = new LinkComponent(this.dropdownContentItems, item);
            link.show();
        });

        // this.bindClickEvent(this.handleClick.bind(this));
    };

    // /**
    //  * Функция добавления обработчика события нажатия на компонент
    //  * @param  {any} listener - Callback функция для события
    //  * @returns {void}
    //  */
    // public bindClickEvent(listener: any): void {
    //     this.element.addEventListener('click', listener.bind(this));
    // };

    private handleClick(e: Event): void {
        // this.querySelector('.dropdown__content')?.classList.toggle('dropdown__content__show');
        // e.preventDefault();
        // e.stopPropagation();

        // TODO: How to check it I clicked somewhere not to this. Add transparent div and handleClick on it?
        // if (!(<HTMLElement>e.target).matches('.dropdown__button')) {
        //     const dropdownItems = document.getElementsByClassName('dropdown__content');
        //     console.log(dropdownItems);
        //
        //     for (let item of dropdownItems) {
        //         if (item.classList.contains('dropdown__content__show')) {
        //             item.classList.remove('dropdown__content__show');
        //         }
        //     }
        // }
    };
}

export default DropdownButtonComponent;
