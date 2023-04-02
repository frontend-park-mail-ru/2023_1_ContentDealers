/**
 * Базовый класс для отображения компонента приложения
 * @class
 * @param {HTMLElement} parent - родительский элемент для отображения
 */
class IView {
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

    constructor(parent: HTMLElement, template: string, topElement: string) {
        this.parent = parent;

        const parser = new DOMParser();
        const element: HTMLElement | null = parser.parseFromString(template, 'text/html').querySelector(topElement);
        if (!element) {
            throw Error('Can not find element from template!');
        }

        this.element = element;
    };

    /**
     * Функция для отрисовки вида
     * @method
     * @returns {void}
     */
    public show(): void{
        this.parent.appendChild(this.element);
    };

    /**
     * Функция для скрытия вида
     * @method
     * @returns {void}
     */
    public hide(): void{
        this.parent.removeChild(this.element);
    };
};

export default IView;
