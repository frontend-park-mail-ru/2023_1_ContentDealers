import IView from '../IView/IView';

import PlayerTemplate from './PlayerView.hbs'
import PlayerData from './PlayerViewConfig';
import './PlayerView.css';


import type ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

import type ProgressBarComponent from '../../Components/ProgressBarComponent/ProgressBarComponent';
import type VolumeBarComponent from '../../Components/VolumeBarComponent/VolumeBarComponent';

import type DivComponent from '../../Components/DivComponent/DivComponent';

class PlayerView extends IView {
    private readonly maxOpacity: number = 1;
    private readonly minOpacity: number = 0;


    private readonly timeoutTicks: number = 10;

    private readonly showTimeout: number = 200;
    private readonly showTimeoutTick: number = this.showTimeout / this.timeoutTicks;

    private readonly hideTimeout: number = 500;
    private readonly hideTimeoutTick: number = this.hideTimeout / this.timeoutTicks;

    public readonly video: HTMLVideoElement;

    private readonly titleContainer: HTMLElement;
    private readonly title: HTMLElement;

    private readonly bottomFilterContainer: HTMLElement;
    private readonly bottomFilter: HTMLElement;

    private readonly videoPanelContainer: HTMLElement;
    private readonly videoPanel: HTMLElement;

    private readonly closeButtonContainer: HTMLElement;
    public closeButton: ButtonComponent;

    private readonly progressBarContainer: HTMLElement;
    public progressBar: ProgressBarComponent;

    private readonly volumeBarContainer: HTMLElement;
    public volumeBar: VolumeBarComponent;

    private readonly playStatusContainer: HTMLElement;
    private playButton: DivComponent;
    private pauseButton: DivComponent;

    private readonly nextButtonContainer: HTMLElement;
    private nextButton: DivComponent;

    private readonly screenStatusContainer: HTMLElement;
    private screenButton: DivComponent;
    private compressButton: DivComponent;

    private readonly currentTimeElement: HTMLElement;


    public constructor(parent: HTMLElement, title: string) { // TODO: how improve, so many variables
        super(parent, PlayerTemplate({ title: title }));

        this.video = <HTMLVideoElement>this.element.querySelector('video');

        this.titleContainer = <HTMLElement>this.element.querySelector('.js-video__title-container');
        this.title = <HTMLElement>this.titleContainer.querySelector('.js-video__title-align');

        this.bottomFilterContainer = <HTMLElement>this.element.querySelector('.js-video__bottom-filter-container');
        this.bottomFilter = <HTMLElement>this.bottomFilterContainer.querySelector('.js-video__bottom-filter');

        this.closeButtonContainer = <HTMLElement>this.element.querySelector('.js-video__close-button');
        this.closeButton = new PlayerData.closeButton.componentType(this.closeButtonContainer, PlayerData.closeButton.componentData);

        this.videoPanelContainer = <HTMLElement>this.element.querySelector('.js-video__panel-container');
        this.videoPanel = <HTMLElement>this.element.querySelector('.js-video__panel');

        this.progressBarContainer = <HTMLElement>this.element.querySelector('.video__progress-container');
        this.progressBar = new PlayerData.progressBar.componentType(this.progressBarContainer, PlayerData.progressBar.componentData);

        this.playStatusContainer = <HTMLElement>this.element.querySelector('.js-video__play-button');
        this.playButton = new PlayerData.playButton.componentType(this.playStatusContainer, PlayerData.playButton.componentData);
        this.pauseButton = new PlayerData.pauseButton.componentType(this.playStatusContainer, PlayerData.pauseButton.componentData);

        this.nextButtonContainer = <HTMLElement>this.element.querySelector('.js-video__next-button');
        this.nextButton = new PlayerData.nextButton.componentType(this.nextButtonContainer, PlayerData.nextButton.componentData);

        this.currentTimeElement = <HTMLElement>this.element.querySelector('.video__duration-time');

        this.volumeBarContainer = <HTMLElement>this.element.querySelector('.video__volume-container');
        this.volumeBar = new PlayerData.volumeBar.componentType(this.volumeBarContainer, PlayerData.volumeBar.componentData);

        this.screenStatusContainer = <HTMLElement>this.element.querySelector('.js-video__screen-container');
        this.screenButton = new PlayerData.screenButton.componentType(this.screenStatusContainer, PlayerData.screenButton.componentData);
        this.compressButton = new PlayerData.compressButton.componentType(this.screenStatusContainer, PlayerData.compressButton.componentData);

        this.initialState();
    }

    private initialState(): void {
        this.closeButton.show();
        this.progressBar.show();
        this.volumeBar.show();

        this.playButton.show();
        this.pauseButton.show();

        this.screenButton.show();
        this.compressButton.show();
    }


    public setCurrentTime(time: number): void {
        this.currentTimeElement.innerText = `${this.progressBar.timeToString(time)} / ${this.progressBar.timeToString(this.video.duration)}`;
    }

    private setOpacityToElements(opacity: string): void {
        this.title.style.opacity = opacity;
        this.closeButton.button.style.opacity = opacity;

        this.videoPanel.style.opacity = opacity;
        this.bottomFilter.style.opacity = opacity;
    }


    public rerenderPlay(isPlay: boolean): void {
        if (isPlay) {
            this.playButton.hide();
            this.pauseButton.show();
        } else {
            this.pauseButton.hide();
            this.playButton.show();
        }
    }

    public rerenderScreen(isFullScreen: boolean): void {
        if (isFullScreen) {
            this.screenButton.hide();
            this.compressButton.show();
        } else {
            this.compressButton.hide();
            this.screenButton.show();
        }
    }

    private checkVideoPanel(): boolean {
        return Boolean(this.videoPanelContainer.querySelector('.js-video__panel'));
    }


    public showElements(): void {
        if (!this.checkVideoPanel()) {
            this.titleContainer.appendChild(this.title);
            this.closeButton.show();

            this.videoPanelContainer.appendChild(this.videoPanel);
            this.bottomFilterContainer.appendChild(this.bottomFilter);

            let opacity = parseFloat(getComputedStyle(this.videoPanel).opacity);
            const delta = this.maxOpacity / this.showTimeoutTick;

            const intervalId = setInterval(() => {
                opacity += delta;

                if (opacity >= this.maxOpacity) { // Если opacity больше или равна единице
                    clearInterval(intervalId);
                    opacity = this.maxOpacity;
                }

                // Устанавливаем opacity
                this.setOpacityToElements(opacity.toString());
            }, this.timeoutTicks);
        }
    }

    public hideElements(): void {
        if (this.checkVideoPanel()) {
            let opacity = parseFloat(getComputedStyle(this.videoPanel).opacity);

            const delta = opacity / this.hideTimeoutTick;

            const intervalId = setInterval(() => {
                opacity -= delta;

                if (opacity <= this.minOpacity) { // Если opacity меньше или равна нулю
                    clearInterval(intervalId);
                    this.titleContainer.removeChild(this.title);
                    this.closeButton.hide();

                    this.videoPanelContainer.removeChild(this.videoPanel);
                    this.bottomFilterContainer.removeChild(this.bottomFilter);

                }

                // Устанавливаем opacity
                this.setOpacityToElements(opacity.toString());
            }, this.timeoutTicks);
        }
    }


    // Show / hide next button //
    public showNextButton(): void {
        this.nextButton.show();
    }

    public hideNextButton(): void {
        this.nextButton.hide();
    }


    // Binds //
    public bindPlayButtonClick(listener: any): void {
        this.playStatusContainer.addEventListener('click', listener);
    }

    public bindNextButtonClick(listener: any): void {
        this.nextButton.div.addEventListener('click', listener);
    }

    public bindScreenButtonClick(listener: any): void {
        this.screenStatusContainer.addEventListener('click', listener);
    }

    public bindCloseButtonClick(listener: any): void {
        this.closeButtonContainer.addEventListener('click', listener);
    }

    public bindVideoClick(listener: any): void {
        this.element.querySelector('.js-video__storage')?.addEventListener('click', listener);
    }

    public bindMouseMoveEvent(listener: any): void {
        this.element.addEventListener('mousemove', listener);
    }
}

export default PlayerView;
