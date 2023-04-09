import IComponentData from './IComponentData';

class IComponent {
    /**
     * Родительский элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    protected parent: HTMLElement;

    /**
     * Корневой элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    protected element: HTMLElement;

    constructor(parent: HTMLElement, template: string, topElement: string, data?: IComponentData) {
        this.parent = parent;

        const parser = new DOMParser();
        const element: HTMLElement | null = parser.parseFromString(template, 'text/html').querySelector(topElement);
        if (!element) {
            throw Error('Невозможно найти элемент в шаблоне!');
        }

        this.element = element;
    };

    public toHTMLElement(): HTMLElement {
        return this.element;
    };

    public querySelector(element: string): HTMLElement | null {
        return this.parent.querySelector(element);
    };

    public show(): void {
        this.parent.appendChild(this.element);
    };

    public hide(): void {
        this.parent.removeChild(this.element);
    };
};

export default IComponent;
