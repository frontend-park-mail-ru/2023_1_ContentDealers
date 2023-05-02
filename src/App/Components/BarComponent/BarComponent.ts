import IComponent from '../IComponent/IComponent';

import BarComponentTemplate from './BarComponent.hbs';
import type BarComponentData from './BarComponentData';
import './BarComponent.css';

import DivComponent from '../DivComponent/DivComponent';

type UpdateFunction = (value: number) => void;

/**
 * Реализует шкалу (прогресса, звука) приложения
 * @category Bar
 * @extends {IComponent}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class BarComponent extends IComponent {
    /**
     * Составляющие класса
     * @member
     * @private
     * @type {HTMLElement}
     */
    private fullBar : HTMLElement;
    private loadBar: HTMLElement;
    private loadProgressBar: HTMLElement;
    private currentBar: HTMLElement;


    /**
     * Составляющие класса
     * @member
     * @private
     * @type {HTMLElement}
     */
    protected barHelper: DivComponent;
    protected currentBarCircle: DivComponent;


    /**
     * Флаг, отвечающий за перетаскивание
     * @member
     * @private
     * @type {boolean}
     */
    private isDragging: boolean;


    /**
     * Максимальное и минимальное значения в процентах
     * @member
     * @private readonly
     * @type {number}
     */
    private readonly minPercentageValue: number = 0;
    private readonly maxPercentageValue: number = 100;


    /**
     * Максимальное и минимальное значения шкалы
     * @member
     * @private
     * @type {number}
     */
    private minValue: number;
    private maxValue: number;


    /**
     * Текущее значение шкалы в процентах
     * @member
     * @private
     * @type {number}
     */
    private currentPercentage: number;


    /**
     * Забинженные хендлеры событий
     * @member
     * @private readonly
     * @type {(MouseEvent) => void}
     */
    private readonly boundMouseDown = this.onMouseDown.bind(this);
    private readonly boundMouseMove = this.onMouseMove.bind(this);
    private readonly boundMouseUp = this.onMouseUp.bind(this);
    private readonly boundMouseOver = this.onMouseOver.bind(this);
    private readonly boundMouseLeave = this.onMouseLeave.bind(this);


    /**
     * Прокси хендлер, обрабатывающий изменение поля currentPercentage
     * @member
     * @private
     * @type {any}
     */
    private currentPercentageHandler = {
        set: (target: any, key: string, value: any) => {
            if (key === 'currentPercentage') {
                this.updateBarNotDragging(value);
            }
            return true;
        },
    };


    /**
     * Прокси для поля currentPercentage
     * @member
     * @private
     * @type {any}
     */
    private currentValueProxy = new Proxy(this, this.currentPercentageHandler);


    /**
     * Функция, обновляющая видео
     * @member
     * @private
     * @type {UpdateFunction}
     */
    private updateVideoFunction: UpdateFunction;


    /**
     * Функция, обновляющая содержимое хелпера
     * @member
     * @private
     * @type {UpdateFunction}
     */
    private updateHelperFunction: UpdateFunction;

    constructor(parent: HTMLElement, data?: BarComponentData) {
        super(parent, BarComponentTemplate(data));

        this.isDragging = false;

        this.initElements();
        this.initHiddenElements();

        this.bindEvents();
    };


    private initElements(): void {
        this.fullBar = <HTMLElement>this.element.querySelector('.bar__full');
        this.loadBar = <HTMLElement>this.element.querySelector('.bar__load');
        this.loadProgressBar = <HTMLElement>this.element.querySelector('.bar-load__progress');
        this.currentBar = <HTMLElement>this.element.querySelector('.bar__current');
    };

    private initHiddenElements(): void {
        const barHelperDiv = <HTMLElement>this.element.querySelector('#bar__helper');
        this.barHelper = new DivComponent(barHelperDiv, { divClass: 'bar__helper' });

        const currentBarCircleDiv = <HTMLElement>this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new DivComponent(currentBarCircleDiv, { divClass: 'bar__current-circle' });
    };


    // Call update function //
    public callUpdateVideoFunction(value: number): void {
        this.setCurrentPercentage(value);
        this.updateVideoFunction(value);
    };

    public callUpdateHelperFunction(percentage: number): void {
        this.updateHelperFunction(this.toValue(percentage));
    };

    // Setter Functions //
    public setCurrentPercentage(value: number): void {
        this.currentPercentage = this.toPercentage(value);
        this.currentValueProxy.currentPercentage = this.currentPercentage;
    };

    public setUpdateVideoFunc(func: UpdateFunction): void {
        this.updateVideoFunction = func;
    };

    public setUpdateHelperFunc(func: UpdateFunction): void {
        this.updateHelperFunction = func;
    };

    public setMaxMinValues(min: number, max: number): void {
        this.minValue = min;
        this.maxValue = max;
    };

    public setHelperText(text: string) {
        this.barHelper.div.innerText = text;
    };


    // Getter Functions //
    public getCurrentValue(): number {
        return this.toValue(this.currentPercentage);
    };

    public getInterval(): number {
        return (this.maxValue - this.minValue);
    };


    // Update functions //
    private updateBarElements(percentage: number): void {
        const truncPercentage = this.truncatePercentage(percentage);

        this.currentBarCircle.div.style.left = `${truncPercentage}%`;
        this.currentBar.style.width = `${truncPercentage}%`;
    };

    public updateBarDragging(percentage: number): void {
        if (this.isDragging) {
            const truncPercentage = this.truncatePercentage(percentage);

            this.updateBarElements(truncPercentage);
            this.callUpdateVideoFunction(this.toValue(truncPercentage));
        }
    };

    public updateBarNotDragging(percentage: number): void {
        if (!this.isDragging) {
            this.updateBarElements(percentage);
        }
    };

    private updateHelper(percentage: number): void {
        this.barHelper.div.style.left = `${percentage}%`;
        this.callUpdateHelperFunction(percentage);
    };

    public updateLoadProgressBar(percentage: number): void {
        this.loadProgressBar.style.width = `${percentage}%`;
    };

    // Calculate functions //
    private toValue(percentage: number): number {
        return (percentage / this.maxPercentageValue) * this.getInterval();
    };

    public toPercentage(value: number): number {
        return (value / this.getInterval()) * this.maxPercentageValue;
    };

    private truncatePercentage(percentage: number): number {
        let truncPercentage = percentage;
        if (percentage < this.minPercentageValue) {
            truncPercentage = this.minPercentageValue;
        }

        if (percentage > this.maxPercentageValue) {
            truncPercentage = this.maxPercentageValue;
        }

        return truncPercentage;
    }

    private positionToPercentage(cursorX: number): number {
        const barRect = this.fullBar.getBoundingClientRect();
        const barLeft = barRect.left + window.scrollX;
        const barWidth = barRect.width;

        const position = cursorX - barLeft;
        const percentage = (position < 0) ? 0 : (position / barWidth * this.maxPercentageValue);

        return parseFloat(percentage.toFixed(2));
    };


    // Check functions //
    private isElement(className: string): boolean {
        return Boolean(this.element.querySelector(`${className}`));
    };

    private isHelper(): boolean {
        return this.isElement('.bar__helper');
    };

    private isCircle(): boolean {
        return this.isElement('.bar__current-circle');
    };


    // Show / hide functions //
    private showHelper(): void {
        if (!this.isHelper()) {
            this.barHelper.show();
        }
    };

    private hideHelper(): void {
        if (this.isHelper()) {
            this.barHelper.hide();
        }
    };

    private showCircle(): void {
        if (!this.isCircle()) {
            this.currentBarCircle.show();
        }
    };

    private hideCircle(): void {
        if (this.isCircle()) {
            this.currentBarCircle.hide();
        }
    };


    // Events //
    private onMouseDown(e: MouseEvent): void {
        // e.preventDefault();
        // e.stopPropagation();
        console.log('onMouseDown');

        this.isDragging = true;
        this.updateBarDragging(this.positionToPercentage(e.clientX)); // Update bar

        this.bindMouseDraggingEvents();
    };

    private onMouseMove(e: MouseEvent): void {
        // e.preventDefault();
        // e.stopPropagation();

        this.updateBarDragging(this.positionToPercentage(e.clientX));
    };

    private onMouseUp(e: MouseEvent): void {
        // e.preventDefault();
        // e.stopPropagation();
        console.log('onMouseUp');

        this.isDragging = false;

        this.unbindMouseDraggingEvents();
    };

    private onMouseOver(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();

        this.showCircle();
    };

    private onMouseLeave(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();

        console.log('onMouseLeave')

        this.hideHelper();

        if (!this.isDragging) {
            this.hideCircle();
        }
    };

    private onMouseClick(e: MouseEvent): void {
        e.stopPropagation();
    };

    // private on


    private bindMouseDraggingEvents(): void {
        document.addEventListener('mousemove', this.boundMouseMove);
        document.addEventListener('mouseup', this.boundMouseUp);
    };

    private unbindMouseDraggingEvents(): void {
        document.removeEventListener('mousemove', this.boundMouseMove);
        document.removeEventListener('mouseup', this.boundMouseUp);
    };


    private bindEvents(): void {
        this.element.addEventListener('mousemove', (e: MouseEvent) => {
            this.updateHelper(this.positionToPercentage(e.clientX));
            this.showHelper();
        });

        this.element.addEventListener('mousedown', this.boundMouseDown);
        this.element.addEventListener('mouseover', this.boundMouseOver);
        this.element.addEventListener('mouseleave', this.boundMouseLeave);

        this.element.addEventListener('click', this.onMouseClick.bind(this));
    };

    private unbindEvents(): void {
        this.element.removeEventListener('mousedown', this.boundMouseDown);
        this.element.removeEventListener('mouseover', this.boundMouseOver);
        this.element.removeEventListener('mouseout', this.boundMouseLeave);
    };
}

export default BarComponent;
