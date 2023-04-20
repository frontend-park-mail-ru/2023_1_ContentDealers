import IComponent from '../IComponent/IComponent';

import BarComponentTemplate from './BarComponent.hbs';
import BarComponentData from './BarComponentData';
import './BarComponent.css';

import DivComponent from '../DivComponent/DivComponent';

type UpdateFunction = (num: number) => void;

class BarComponent extends IComponent {
    private fullBar : HTMLElement;
    private loadBar: HTMLElement;
    private loadProgressBar: HTMLElement;
    private currentBar: HTMLElement;

    protected barHelper: DivComponent;
    protected currentBarCircle: DivComponent;

    private isDragging: boolean;

    private readonly maxPercentageValue: number = 100;
    private minValue: number;
    private maxValue: number;

    private updateVideo: UpdateFunction;

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
    public getMaxValue(): number {
        return this.maxValue;
    };

    public getMaxPercentageValue(): number {
        return this.maxPercentageValue;
    };

    private getInterval(): number {
        return (this.maxValue - this.minValue);
    };

    // Setter Functions //
    public setUpdateVideoFunc(func: UpdateFunction): void {
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
    private updateBar(percentage: number): void {
        console.log('In updateBar')

        this.updateCurrentBar(percentage);

        if (!this.isDragging) {
            this.updateVideo(this.percentageToValue(percentage)); // Update video
        }
    };

    public updateCurrentBar(percentage: number): void {
        if (!this.isDragging) {
            this.currentBar.style.width = `${percentage}%`;
            this.currentBarCircle.div.style.left = `${percentage}%`;
        }
    };

    private updateHelper(percentage: number): void {
        this.barHelper.div.style.left = `${percentage}%`;
    };


    // Calculate functions //
    private positionToPercentage(cursorX: number): number {
        const barRect = this.fullBar.getBoundingClientRect();
        const barLeft = barRect.left + window.scrollX;
        const barWidth = barRect.width;

        const percentage = (cursorX - barLeft) / barWidth * this.maxPercentageValue;

        return parseFloat(percentage.toFixed(2));
    };

    private percentageToValue(percentage: number): number {
        return (percentage / this.maxPercentageValue) * this.getInterval();
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
        // console.log('onMouseDown')

        this.isDragging = true;
    };

    private onMouseMove(e: MouseEvent): void {
        console.log('onMouseMove')

        this.updateBar(this.positionToPercentage(e.clientX));
    };

    private onMouseUp(e: MouseEvent): void {
        // console.log('onMouseUp')

        this.isDragging = false;
        this.updateBar(this.positionToPercentage(e.clientX)); // Update bar
    };

    private onMouseOver(e: MouseEvent): void {
        // console.log('onMouseOver')

        const percentage = this.positionToPercentage(e.clientX);   // Calculate % for current cursor position

        this.updateHelper(percentage);
        this.showHelper();

        this.showCircle();
    };

    private onMouseOut(e: MouseEvent): void {
        // console.log('onMouseOut')

        this.hideHelper();
        this.hideCircle();
    };

    private bindEvents(): void {
        this.element.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.element.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.element.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.element.addEventListener('mouseover', this.onMouseOver.bind(this));
        this.element.addEventListener('mouseout', this.onMouseOut.bind(this));
    };

    private unbindEvents(): void {
        this.element.removeEventListener('mousedown', this.onMouseDown.bind(this));
        this.element.removeEventListener('mousemove', this.onMouseMove.bind(this));
        this.element.removeEventListener('mouseup', this.onMouseUp.bind(this));
        this.element.removeEventListener('mouseover', this.onMouseOver.bind(this));
        this.element.removeEventListener('mouseout', this.onMouseOut.bind(this));
    };
}

export default BarComponent;
