import IComponent from '../IComponent/IComponent';
import IComponentDataWithType from '../../Interfaces/interfaces';

import BarComponent from '../Bar/BarComponent';

import DivComponent from '../DivComponent/DivComponent';
import DivComponentData from '../DivComponent/DivComponentData';

import VolumeBarComponentTemplate from './VolumeBarComponent.hbs';
import VolumeBarComponentData from './VolumeBarComponentData';
import './VolumeBarComponent.css';

type UpdateFunction = (num: number) => void;

interface VolumeDarConfig {
    mute: IComponentDataWithType<DivComponent, DivComponentData>;
    unmute: IComponentDataWithType<DivComponent, DivComponentData>;
}

class VolumeBarComponent extends IComponent {
    private barComponent: BarComponent;

    private readonly volumeMinValue: number = 0;
    private readonly volumeMaxValue: number = 100;

    private isMute: boolean;

    public volumeStatusContainer: HTMLElement;
    private muteButton: DivComponent;
    private unmuteButton: DivComponent;

    private readonly volumeData = {
        mute: {
            componentType: DivComponent,
            componentData: {
                title: 'Включить звук',
                imgSrc: '/img/icons/player/volume-mute.svg'
            },
        },
        unmute: {
            componentType: DivComponent,
            componentData: {
                title: 'Выключить звук',
                imgSrc: '/img/icons/player/volume-up.svg'
            },
        },
    };

    constructor(parent: HTMLElement, data?: VolumeBarComponentData) {
        super(parent, VolumeBarComponentTemplate({ class: data?.class }));

        this.isMute = false;
        this.volumeStatusContainer = <HTMLElement>this.element.querySelector('.volume-bar') || this.element;

        this.initVolumeButtons();

        this.barComponent = new BarComponent(this.element, data?.barData);
        this.barComponent.show();

        this.bindVolumeButtonClick(this.toggleVolumeStatus.bind(this))
    };

    // Init //
    private initVolumeButtons(): void {
        this.muteButton = new this.volumeData.mute.componentType(this.volumeStatusContainer, this.volumeData.mute.componentData);
        this.unmuteButton = new this.volumeData.unmute.componentType(this.volumeStatusContainer, this.volumeData.unmute.componentData);
    };


    // Setters //
    public setUpdateVideoFunc(func: UpdateFunction): void {
        this.barComponent.setUpdateVideoFunc(func);
    };

    public setMaxMinValues(): void {
        this.barComponent.setMaxMinValues(this.volumeMinValue, this.volumeMaxValue);
    };

    public setHelperText(volume: number) {
        this.barComponent.setHelperText(`${volume}`);
    };


    // Functions //
    private toggleVolumeStatus(): void {
        this.isMute = !this.isMute;

        if (this.isMute) {
            this.muteButton.hide();
            this.unmuteButton.show();
        } else {
            this.unmuteButton.hide();
            this.muteButton.show();
        }
    };


    // Binds //
    private bindVolumeButtonClick(listener: any): void {
        this.volumeStatusContainer.addEventListener('click', listener);
    };
}

export default VolumeBarComponent;
