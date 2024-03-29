import IComponent from '../IComponent/IComponent';

import BarComponent from '../BarComponent/BarComponent';

import DivComponent from '../DivComponent/DivComponent';

import VolumeBarComponentTemplate from './VolumeBarComponent.hbs';
import type VolumeBarComponentData from './VolumeBarComponentData';
import './VolumeBarComponent.css';

type UpdateFunction = (num: number) => void;

class VolumeBarComponent extends IComponent {
    private barComponent: BarComponent;

    private readonly volumeMinValue: number = 0;
    private readonly volumeMaxValue: number = 1;

    private setVolumeFunc: (volume: number) => void;

    private prevVolume = 0.5;

    public volumeStatusContainer: HTMLElement;
    private muteButton: DivComponent;
    private unmuteButton: DivComponent;

    private readonly volumeData = {
        mute: {
            componentType: DivComponent,
            componentData: {
                title: 'Включить звук',
                imgSrc: '/img/icons/player/volume-off.svg',
                imgWidth: '26px',
            },
        },
        unmute: {
            componentType: DivComponent,
            componentData: {
                title: 'Выключить звук',
                imgSrc: '/img/icons/player/volume-up.svg',
                imgWidth: '26px',
            },
        },
    };

    private muteHandler = {
        set: (target: any, key: string, value: any): boolean => {
            target[key] = value;
            if (key === 'isMute') {
                this.rerenderMute(value);
            }
            return true;
        },
    };

    private muteProxy = new Proxy(this, this.muteHandler);

    public constructor(parent: HTMLElement, data?: VolumeBarComponentData) {
        super(parent, VolumeBarComponentTemplate({ class: data?.class }));

        this.initVolumeButtons();
        this.muteProxy.isMute = false;

        this.barComponent = new BarComponent(this.element, data?.barData);
        this.barComponent.show();

        this.setMaxMinValues();
        this.barComponent.setCurrentPercentage(this.prevVolume);

        this.barComponent.setUpdateHelperFunc(this.setHelperText.bind(this));

        this.bindVolumeButtonClick(this.changeMuteStatus.bind(this));
    }

    // Init //
    private initVolumeButtons(): void {
        this.volumeStatusContainer =
            <HTMLElement>this.element.querySelector('.js-volume') || this.element;

        this.muteButton = new this.volumeData.mute.componentType(
            this.volumeStatusContainer,
            this.volumeData.mute.componentData
        );
        this.muteButton.show();
        this.unmuteButton = new this.volumeData.unmute.componentType(
            this.volumeStatusContainer,
            this.volumeData.unmute.componentData
        );
        this.unmuteButton.show();
    }

    // Setters //
    public setUpdateVideoFunc(func: UpdateFunction): void {
        this.setVolumeFunc = func;
        this.barComponent.setUpdateVideoFunc(func);
    }

    public setMaxMinValues(): void {
        this.barComponent.setMaxMinValues(this.volumeMinValue, this.volumeMaxValue);
    }

    public setMuteProxy(flag: boolean): void {
        if (this.muteProxy.isMute !== flag) {
            this.muteProxy.isMute = flag;
        }
    }

    public setHelperText(volume: number): void {
        this.barComponent.setHelperText(`${Math.round(this.barComponent.toPercentage(volume))}%`);
    }

    public changeMuteStatus(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.muteProxy.isMute = !this.muteProxy.isMute;

        if (!this.muteProxy.isMute) {
            this.barComponent.callUpdateVideoFunction(this.prevVolume);
        } else {
            this.prevVolume = this.barComponent.getCurrentValue();
            this.barComponent.callUpdateVideoFunction(this.volumeMinValue);
        }
    }

    public setCurrentValueToBar(volume: number): void {
        this.barComponent.setCurrentPercentage(volume);
    }


    // Functions //
    private rerenderMute(isMute: boolean): void {
        if (!isMute) {
            this.muteButton.hide();
            this.unmuteButton.show();
        } else {
            this.unmuteButton.hide();
            this.muteButton.show();
        }
    }

    // Binds //
    private bindVolumeButtonClick(listener: any): void {
        this.volumeStatusContainer.addEventListener('click', listener);
    }
}

export default VolumeBarComponent;
