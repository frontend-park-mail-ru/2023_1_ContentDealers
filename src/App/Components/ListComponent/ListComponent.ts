import IComponent from '../IComponent/IComponent';

import IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponentTemplate from './ListComponent.hbs';
import ListComponentData from './ListComponentData';
import './ListComponent.css';

class ListComponent extends IComponent {
    private items: IComponentDataWithType[];

    get getElement(): HTMLElement {
        return this.element;
    };

    constructor(parent: HTMLElement, template = '', topElement = '', data: ListComponentData) {
        super(parent, ListComponentTemplate(data.listClass), '.js-list');

        this.items = Object.assign([], data.items);

        this.renderItems(data.itemClass);
    };

    protected renderItems(itemClass?: string): void {
        this.items.forEach(({ componentType, componentData }) => {
            const li = document.createElement('li');
            li.classList.add(itemClass || '');

            const l = new componentType(li, '', '', componentData);
            l.show();
            this.element.appendChild(li);
        });
    };
};

export default ListComponent;
