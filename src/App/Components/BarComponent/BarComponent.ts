import IComponent from '../IComponent/IComponent';

import BarComponentTemplate from './BarComponent.hbs';
import BarComponentData from './BarComponentData'
import './BarComponent.css';

import DivComponent from '../DivComponent/DivComponent';

interface TouchEventWithTarget extends TouchEvent {
    target: EventTarget;
}

// TODO
// type EventTuple = [string, (e: TouchEvent | MouseEvent) => void];

class BarComponent extends IComponent {
    private isDragging: boolean;

    private fullBar : HTMLElement;
    private loadBar: HTMLElement;
    private loadProgressBar: HTMLElement;
    private currentBar: HTMLElement;

    private barHelper: DivComponent;
    private currentBarCircle: DivComponent;

    // private maxValue: number;
    // private postscript: string;

    // TODO
    // private eventTuples: EventTuple[] = [
    //     ["mousedown", (e: MouseEvent) => { this.onMouseDown(e); }],
    //     // ["mousemove", this.onMouseMove.bind(this)],
    //     // ["mouseup", this.onMouseUp.bind(this)],
    //     // ["touchstart", this.onTouchStart.bind(this)],
    //     // ["touchmove", this.onTouchMove.bind(this)],
    //     // ["touchend", this.onTouchEnd.bind(this)],
    // ];

    constructor(parent: HTMLElement, template = '', topElement = '', data: BarComponentData) {
        super(parent, BarComponentTemplate({ barClass: data.barClass }), '.js-bar');

        this.isDragging = false;

        // this.maxValue = 2.37;
        // this.postscript = '';

        this.fullBar = <HTMLElement>this.element.querySelector('.bar__full');
        this.loadBar = <HTMLElement>this.element.querySelector('.bar__load');
        this.loadProgressBar = <HTMLElement>this.element.querySelector('.bar-load__progress');
        this.currentBar = <HTMLElement>this.element.querySelector('.bar__current');

        this.initHiddenElements();

        // this.addEventListeners();
    };

    private initHiddenElements(): void {
        const barHelperDiv = <HTMLElement>this.element.querySelector('#bar__helper');
        this.barHelper = new DivComponent(barHelperDiv, '', '', { class: 'bar__helper' });

        const currentBarCircleDiv = <HTMLElement>this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new DivComponent(currentBarCircleDiv, '', '', { class: 'bar__current-circle' });
    };
    //
    // private updateProgressBar(e: Event): void {
    //     let percentage: number = 0;
    //     if (e instanceof MouseEvent) {
    //         percentage = this.calculatePercentage(e.clientX);
    //     } else {
    //         percentage = this.calculatePercentage((<TouchEventWithTarget>e).touches[0].clientX);
    //     }
    //
    //     this.currentBar.style.width = `${percentage}%`;
    //     // this.currentBarCircle.div.style.left = `${percentage}%`;
    // };
    //
    // private calculatePercentage(cursorX: number): number {
    //     const barWidth = this.fullBar.offsetWidth;
    //     const clickOffset = cursorX - this.fullBar.getBoundingClientRect().left;
    //     return (clickOffset / barWidth) * 100;
    // }
    //
    // private onMouseDown(e: MouseEvent): void {
    //     // this.isDragging = true;
    //     // const percentage = this.calculatePercentage(e.clientX);
    //     //
    //     // this.currentBarCircle.div.style.left = `${percentage}%`;
    //     // this.currentBar.style.width = `${percentage}%`;
    //
    //     // console.log('onMouseDown')
    //     this.isDragging = true;
    //     this.updateProgressBar(e);
    // };
    //
    // private onMouseMove(e: MouseEvent): void {
    //     console.log('onMouseMove')
    //     const cursorX = e.clientX;
    //     const percentage = this.calculatePercentage(cursorX);
    //
    //     this.barHelper.div.style.left = `${percentage}%`;
    //     this.barHelper.div.innerText = (percentage / 100 * this.maxValue).toFixed(2); // TODO change trailer time
    //     this.barHelper.show();
    //
    //     this.currentBarCircle.show();
    //
    //     if (this.isDragging) {
    //         this.updateProgressBar(e);
    //     }
    // };
    //
    // private onMouseUp(e: MouseEvent): void {
    //     console.log('onMouseUp')
    //     this.isDragging = false;
    // };
    //
    // private onMouseOut(e: MouseEvent): void {
    //     this.barHelper.hide(); // TODO check before hide?
    //     // this.currentBarCircle.hide();
    // }
    //
    // private onTouchStart(e: TouchEvent): void {
    //     // console.log('onTouchStart')
    //     this.isDragging = true;
    //     const touchEventWithTarget = e as TouchEventWithTarget;
    //     this.updateProgressBar(touchEventWithTarget);
    // };
    //
    // private onTouchMove(e: TouchEvent): void {
    //     // console.log('onTouchMove')
    //     if (this.isDragging) {
    //         const touchEventWithTarget = e as TouchEventWithTarget;
    //         this.updateProgressBar(touchEventWithTarget);
    //     }
    // };
    //
    // private onTouchEnd(e: TouchEvent): void {
    //     // console.log('onTouchEnd')
    //     this.isDragging = false;
    // };
    //
    // private addEventListeners(): void {
    //     this.element.addEventListener("mousedown", (e) => this.onMouseDown(e));
    //     this.element.addEventListener("mousemove", (e) => this.onMouseMove(e));
    //     this.element.addEventListener("mouseup", (e) => this.onMouseUp(e));
    //     this.element.addEventListener("mouseout", (e) => this.onMouseOut(e));
    //     this.element.addEventListener("touchstart", (e) => this.onTouchStart(e));
    //     this.element.addEventListener("touchmove", (e) => this.onTouchMove(e));
    //     this.element.addEventListener("touchend", (e) => this.onTouchEnd(e));
    // };
    //
    // private removeEventListeners(): void {
    //     this.element.removeEventListener("mousedown", (e) => this.onMouseDown(e));
    //     this.element.removeEventListener("mousemove", (e) => this.onMouseMove(e));
    //     this.element.removeEventListener("mouseup", (e) => this.onMouseUp(e));
    //     this.element.removeEventListener("mouseout", (e) => this.onMouseOut(e));
    //     this.element.removeEventListener("touchstart", (e) => this.onTouchStart(e));
    //     this.element.removeEventListener("touchmove", (e) => this.onTouchMove(e));
    //     this.element.removeEventListener("touchend", (e) => this.onTouchEnd(e));
    // };


    //     New Life
    public bindMouseMoveEvent(listener: any) {
        this.element.addEventListener('mousemove', listener.bind(this));
    };

}

export default BarComponent;
