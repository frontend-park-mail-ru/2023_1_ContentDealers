import IComponent from '../IComponent/IComponent';

import BarComponent from '../BarComponent/BarComponent';

import ProgressBarComponentTemplate from './ProgressBarComponent.hbs';
import ProgressBarComponentData from './ProgressBarComponentData';
import './ProgressBarComponent.css';

type UpdateFunction = (num: number) => void;

class ProgressBarComponent extends IComponent {
    private barComponent: BarComponent;

    private readonly timeMinValue: number = 0;

    private readonly secInMin: number = 60;

    constructor(parent: HTMLElement, data?: ProgressBarComponentData) {
        super(parent, ProgressBarComponentTemplate({ class: data?.class }));

        this.barComponent = new BarComponent(this.element, data?.barData);
        this.barComponent.show();
    };


    // Setters //
    public setUpdateVideoFunc(func: UpdateFunction): void {
        this.barComponent.setUpdateVideoFunc(func);
    };

    public setMaxMinValues(duration: number): void {
        this.barComponent.setMaxMinValues(this.timeMinValue, duration);
    };

    public setCurrentValueToBar(time: number): void {
        this.barComponent.setCurrentValue(time);
    };

    public setHelperText(time: number) {
        this.barComponent.setHelperText(this.timeToString(time));
    };


    // Calculations //
    public timeToString(time: number): string {
        const minutes = Math.floor(time / this.secInMin);
        const seconds = Math.floor(time % this.secInMin);

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    };
}

export default ProgressBarComponent;
