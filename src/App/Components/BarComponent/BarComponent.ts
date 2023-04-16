import IComponent from '../IComponent/IComponent';

import BarComponentTemplate from './BarComponent.hbs';
import BarComponentData from './BarComponentData'
import './BarComponent.css';

import DivComponent from '../DivComponent/DivComponent';
import EventDispatcher from "../../EventDispatcher/EventDispatcher";

interface TouchEventWithTarget extends TouchEvent {
    target: EventTarget;
}

// TODO
// type EventTuple = [string, (e: TouchEvent | MouseEvent) => void];

class BarComponent extends IComponent {
    private fullBar : HTMLElement;
    private loadBar: HTMLElement;
    private loadProgressBar: HTMLElement;
    private currentBar: HTMLElement;

    public barHelper: DivComponent;
    public currentBarCircle: DivComponent;


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

        this.fullBar = <HTMLElement>this.element.querySelector('.bar__full');
        this.loadBar = <HTMLElement>this.element.querySelector('.bar__load');
        this.loadProgressBar = <HTMLElement>this.element.querySelector('.bar-load__progress');
        this.currentBar = <HTMLElement>this.element.querySelector('.bar__current');

        this.initHiddenElements();

        // EventDispatcher.subscribe('bar_update-progress', (percentage: number) => {
        //     this.updateCurrentBar(percentage);
        // });
    };

    private initHiddenElements(): void {
        const barHelperDiv = <HTMLElement>this.element.querySelector('#bar__helper');
        this.barHelper = new DivComponent(barHelperDiv, '', '', { class: 'bar__helper' });

        const currentBarCircleDiv = <HTMLElement>this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new DivComponent(currentBarCircleDiv, '', '', { class: 'bar__current-circle' });
    };

    public updateCurrentBar(percentage: string | number): void {
        this.currentBar.style.width = `${percentage}%`;

        this.currentBarCircle.div.style.left = `${percentage}%`;
    };

    public calculatePercentage(cursorX: number): number {
        const barWidth = this.fullBar.offsetWidth;
        const clickOffset = cursorX - this.fullBar.getBoundingClientRect().left;
        return (clickOffset / barWidth) * 100;
    };



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



    // Helpers
    public checkHelper(): boolean {
        return Boolean(this.element.querySelector('.bar__helper'));
    };

    public checkCircle(): boolean {
        return Boolean(this.element.querySelector('.bar__current-circle'));
    };


    // Binds
    public bindMouseDownEvent(listener: any): void {
        this.element.addEventListener('mousedown', listener);
    }

    public bindMouseUpEvent(listener: any): void {
        this.element.addEventListener('mouseup', listener);
    };

    public bindMouseMoveEvent(listener: any): void {
        this.element.addEventListener('mousemove', listener);
    };

    public bindMouseOutEvent(listener: any): void {
        this.element.addEventListener('mouseout', listener);
    };

    public bindTouchStartEvent(listener: any): void {
        this.element.addEventListener('touchstart', listener);
    };

    public bindTouchEndEvent(listener: any): void {
        this.element.addEventListener('touchend', listener);
    };

    public bindTouchMoveEvent(listener: any): void {
        this.element.addEventListener('touchmove', listener);
    };
}

export default BarComponent;
