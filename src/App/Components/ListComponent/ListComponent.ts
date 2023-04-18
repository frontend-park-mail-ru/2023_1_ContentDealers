import IComponent from '../IComponent/IComponent';

import IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponentTemplate from './ListComponent.hbs';
import ListComponentData from './ListComponentData';
import './ListComponent.css';

class ListComponent<Type extends IComponent, Data> extends IComponent {
    private items: IComponentDataWithType<Type, Data>[];

    public getElement(): HTMLElement {
        return this.element;
    };

    constructor(parent: HTMLElement, data: ListComponentData<Type, Data>) {
        super(parent, ListComponentTemplate({ listClass: data.listClass }));

        this.items = Object.assign([], data.items);

        this.renderItems(data.itemClass);
    };

    protected renderItems(itemClass?: string): void {
        this.items.forEach(({ componentType, componentData }) => {
            const li = document.createElement('li');
            li.classList.add(itemClass || '');

            const l = new componentType(li, componentData);
            l.show();
            this.element.appendChild(li);
        });
    };
}

export default ListComponent;
