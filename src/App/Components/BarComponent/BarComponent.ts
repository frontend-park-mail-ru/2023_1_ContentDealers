import IComponent from '../IComponent/IComponent';

import BarComponentTemplate from './BarComponent.hbs';
import BarComponentData from './BarComponentData';
import './BarComponent.css';

import DivComponent from '../DivComponent/DivComponent';

type UpdateVideoFunction = (val: number) => void;

class BarComponent extends IComponent {
    private fullBar : HTMLElement;
    private loadBar: HTMLElement;
    private loadProgressBar: HTMLElement;
    private currentBar: HTMLElement;

    protected barHelper: DivComponent;
    protected currentBarCircle: DivComponent;

    private isDragging: boolean;

    private readonly minPercentageValue: number = 0;
    private readonly maxPercentageValue: number = 100;

    private minValue: number;
    private maxValue: number;

    private currentValue: number;

    private boundMouseMove = this.onMouseMove.bind(this);
    private boundMouseUp = this.onMouseUp.bind(this);

    private currentValueHandler = {
        set: (target: any, key: string, value: any) => {
            if (key === 'currentValue') {
                this.updateBar(value);
            }
            return true;
        },
    };

    private currentValueProxy = new Proxy(this, this.currentValueHandler);

    public setCurrentValue(value: number): void {
        this.currentValueProxy.currentValue = this.toPercentage(value);
    };

    public getCurrentValue(): number {
        return this.currentValue;
    };

    public updateVideo: UpdateVideoFunction;

    constructor(parent: HTMLElement, data?: BarComponentData) {
        super(parent, BarComponentTemplate(data));

        this.isDragging = false;

        this.fullBar = <HTMLElement>this.element.querySelector('.bar__full');
        this.loadBar = <HTMLElement>this.element.querySelector('.bar__load');
        this.loadProgressBar = <HTMLElement>this.element.querySelector('.bar-load__progress');
        this.currentBar = <HTMLElement>this.element.querySelector('.bar__current');

        this.initHiddenElements();

        this.bindEvents();
    };

    private initHiddenElements(): void {
        const barHelperDiv = <HTMLElement>this.element.querySelector('#bar__helper');
        this.barHelper = new DivComponent(barHelperDiv, { divClass: 'bar__helper' });

        const currentBarCircleDiv = <HTMLElement>this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new DivComponent(currentBarCircleDiv, { divClass: 'bar__current-circle' });
    };

    // Getter Functions //
    public getInterval(): number {
        return (this.maxValue - this.minValue);
    };

    private toValue(percentage: number): number {
        return (percentage / this.maxPercentageValue) * this.getInterval();
    };

    private toPercentage(value: number): number {
        return (value / this.getInterval()) * this.maxPercentageValue;
    };


    // Setter Functions //
    public setUpdateVideoFunc(func: UpdateVideoFunction): void {
        this.updateVideo = func;
    };

    public setMaxMinValues(min: number, max: number): void {
        this.minValue = min;
        this.maxValue = max;
    };

    public setHelperText(text: string) {
        this.barHelper.div.innerText = text;
    };


    // Update functions //
    public updateBarDragging(percentage: number): void {
        if (this.isDragging) {
            const truncPercentage = this.truncatePercentage(percentage);

            this.updateCurrentBar(truncPercentage);
            this.updateVideo(this.toValue(truncPercentage)); // Update video
        }
    };

    private updateCurrentBar(percentage: number): void {
        const truncPercentage = this.truncatePercentage(percentage);

        this.currentBar.style.width = `${truncPercentage}%`;
        this.currentBarCircle.div.style.left = `${truncPercentage}%`;
    };

    public updateBar(percentage: number): void {
        if (!this.isDragging) {
            this.updateCurrentBar(percentage);
        }
    };

    private updateHelper(percentage: number): void {
        this.barHelper.div.style.left = `${percentage}%`;
    };


    // Calculate functions //
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


    // Events
    private onMouseDown(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();
        console.log('onMouseDown');

        this.isDragging = true;
        this.updateBarDragging(this.positionToPercentage(e.clientX)); // Update bar

        this.bindMouseDraggingEvents();
    };

    private onMouseMove(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();
        console.log('onMouseMove')

        this.updateBarDragging(this.positionToPercentage(e.clientX));
    };

    private onMouseUp(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();
        console.log('onMouseUp');

        this.isDragging = false;

        this.unbindMouseDraggingEvents();
    };

    private onMouseOver(e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();

        const percentage = this.positionToPercentage(e.clientX);   // Calculate % for current cursor position

        this.updateHelper(percentage);
        this.showHelper();

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

    private bindMouseDraggingEvents(): void {
        document.addEventListener('mousemove', this.boundMouseMove);
        document.addEventListener('mouseup', this.boundMouseUp);
    };

    private unbindMouseDraggingEvents(): void {
        document.removeEventListener('mousemove', this.boundMouseMove);
        document.removeEventListener('mouseup', this.boundMouseUp);
    };

    private bindEvents(): void {
        this.element.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.element.addEventListener('mouseover', this.onMouseOver.bind(this));
        this.element.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    };

    private unbindEvents(): void {
        this.element.removeEventListener('mousedown', this.onMouseDown.bind(this));
        this.element.removeEventListener('mouseover', this.onMouseOver.bind(this));
        this.element.removeEventListener('mouseout', this.onMouseLeave.bind(this));
    };
}

export default BarComponent;
