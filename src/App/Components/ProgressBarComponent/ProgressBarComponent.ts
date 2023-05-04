import IComponent from '../IComponent/IComponent';

import BarComponent from '../BarComponent/BarComponent';

import ProgressBarComponentTemplate from './ProgressBarComponent.hbs';
import type ProgressBarComponentData from './ProgressBarComponentData';
import './ProgressBarComponent.css';

type UpdateFunction = (num: number) => void;

class ProgressBarComponent extends IComponent {
    private barComponent: BarComponent;

    private readonly timeMinValue: number = 0;

    private readonly secInMin: number = 60;
    private readonly minInHour: number = 60;

    public constructor(parent: HTMLElement, data?: ProgressBarComponentData) {
        super(parent, ProgressBarComponentTemplate({ class: data?.class }));

        this.barComponent = new BarComponent(this.element, data?.barData);
        this.barComponent.show();

        this.barComponent.setUpdateHelperFunc(this.setHelperText.bind(this));
    }

    public updateLoadProgressBar(percentage: number): void {
        this.barComponent.updateLoadProgressBar(percentage);
    }

    // Setters //
    public setUpdateVideoFunc(func: UpdateFunction): void {
        this.barComponent.setUpdateVideoFunc(func);
    }

    public setMaxMinValues(duration: number): void {
        this.barComponent.setMaxMinValues(this.timeMinValue, duration);
    }

    public setCurrentValueToBar(time: number): void {
        this.barComponent.setCurrentPercentage(time);
    }

    public setHelperText(time: number): void {
        this.barComponent.setHelperText(this.timeToString(time));
    }

    // Calculations //
    public timeToString(time: number): string {
        const secInHour = this.secInMin * this.minInHour;

        const hours = Math.floor(time / secInHour);
        const minutes = Math.floor((time - hours * secInHour) / this.secInMin);
        const seconds = Math.floor(time % this.secInMin);

        if (hours > 0) {
            return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${
                seconds > 9 ? seconds : '0' + seconds
            }`;
        } else {
            return `${minutes > 9 ? minutes : '0' + minutes}:${
                seconds > 9 ? seconds : '0' + seconds
            }`;
        }
    }
}

export default ProgressBarComponent;
