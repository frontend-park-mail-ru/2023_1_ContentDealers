import IComponent from '../IComponent/IComponent';

import type IComponentDataWithType from '../../Interfaces/interfaces';

import ListComponentTemplate from './ListComponent.hbs';
import type ListComponentData from './ListComponentData';
import './ListComponent.css';

class ListComponent<Type extends IComponent, Data> extends IComponent {
    private items: IComponentDataWithType<Type, Data>[];
    private itemClass: string | undefined;

    public constructor(
        parent: HTMLElement,
        data: ListComponentData<Type, Data>
    ) {
        super(parent, ListComponentTemplate({ listClass: data.listClass }));

        this.items = Object.assign([], data.items);
        this.itemClass = data.itemClass;

        this.renderItems();
    }

    public getElement(): HTMLElement {
        return this.element;
    }

    public copyFirstLastItems(): void {
        this.addElementToEdge(this.items[0], false);
        this.addElementToEdge(this.items[this.items.length - 1], true);

        this.items = [
            this.items[this.items.length - 1],
            ...this.items,
            this.items[0],
        ];

        const middleIndex = Math.floor(this.items.length / 2);
        this.addElementToEdge(this.items[middleIndex], false);
        this.addElementToEdge(this.items[middleIndex], true);

        this.items = [
            this.items[middleIndex],
            ...this.items,
            this.items[middleIndex],
        ];
    }

    public getItemsCount(): number {
        return this.items.length;
    }

    public addElementToEdge(
        elem: IComponentDataWithType<Type, Data>,
        toStart: boolean
    ): void {
        const { componentType, componentData } = elem;

        const li = document.createElement('li');
        this.itemClass?.split(' ').forEach(className => {
            li.classList.add(className);
        });
        // li.classList.add(this.itemClass || '');

        const l = new componentType(li, componentData);
        l.show();
        toStart ? this.element.prepend(li) : this.element.appendChild(li);
    }

    protected renderItems(): void {
        this.items.forEach(item => {
            this.addElementToEdge(item, false);
        });
    }
}

export default ListComponent;
