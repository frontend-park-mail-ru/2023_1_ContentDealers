import IComponent from '../IComponent/IComponent';

import BarComponent from '../Bar/BarComponent';

import ProgressBarComponentTemplate from './ProgressBarComponent.hbs';
import ProgressBarComponentData from './ProgressBarComponentData';
import './ProgressBarComponent.css';

type UpdateFunction = (num: number) => void;

class ProgressBarComponent extends IComponent {
    private barComponent: BarComponent;

    private readonly secInMin: number = 60;

    constructor(parent: HTMLElement, data?: ProgressBarComponentData) {
        super(parent, ProgressBarComponentTemplate({ class: data?.class }));

        this.barComponent = new BarComponent(this.element, data?.barData);
        this.barComponent.show();
    };

    public updateCurrentBar(time: number): void {
        this.barComponent.updateCurrentBar(this.timeToPercentage(time));
    };

    public setUpdateVideoFunc(func: UpdateFunction): void {
        this.barComponent.setUpdateVideoFunc(func);
    };

    public setMaxMinValues(duration: number): void {
        this.barComponent.setMaxMinValues(0, duration);
    };

    public setHelperText(time: number) {
        this.barComponent.setHelperText(this.timeToString(time));
    };


    private timeToPercentage(time: number): number {
        return (time / this.barComponent.getMaxValue()) * this.barComponent.getMaxPercentageValue();
    };

    private timeToString(time: number): string {
        const minutes = Math.floor(time / this.secInMin);
        const seconds = Math.floor(time % this.secInMin);

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    };
}

export default ProgressBarComponent;
