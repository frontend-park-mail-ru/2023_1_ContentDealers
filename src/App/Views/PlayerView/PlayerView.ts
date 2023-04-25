import IView from '../IView/IView';

import PlayerTemplate from './PlayerView.hbs'
import PlayerData from './PlayerViewConfig';
import './PlayerView.css';


import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

import ProgressBarComponent from '../../Components/ProgressBarComponent/ProgressBarComponent';
import VolumeBarComponent from '../../Components/VolumeBarComponent/VolumeBarComponent';

import DivComponent from '../../Components/DivComponent/DivComponent';

class PlayerView extends IView {
    public readonly video: HTMLVideoElement;

    private readonly backButtonContainer: HTMLElement;
    public backButton: ButtonComponent;

    private readonly progressBarContainer: HTMLElement;
    public progressBar: ProgressBarComponent;

    private readonly volumeBarContainer: HTMLElement;
    public volumeBar: VolumeBarComponent;

    public playStatusContainer: HTMLElement;
    private playButton: DivComponent;
    private pauseButton: DivComponent;

    public currentTimeElement: HTMLElement;


    constructor(parent: HTMLElement) {
        super(parent, PlayerTemplate({}));

        this.video = <HTMLVideoElement>this.element.querySelector('video');

        this.backButtonContainer = <HTMLElement>this.element.querySelector('.js-video__close-button');
        this.backButton = new PlayerData.backButton.componentType(this.backButtonContainer, PlayerData.backButton.componentData);
        this.backButton.show();

        this.progressBarContainer = <HTMLElement>this.element.querySelector('.video__progress-container');
        this.progressBar = new PlayerData.progressBar.componentType(this.progressBarContainer, PlayerData.progressBar.componentData);
        this.progressBar.show();

        this.volumeBarContainer = <HTMLElement>this.element.querySelector('.video__volume-container');
        this.volumeBar = new PlayerData.volumeBar.componentType(this.volumeBarContainer, PlayerData.volumeBar.componentData);
        this.volumeBar.show();

        this.currentTimeElement = <HTMLElement>this.element.querySelector('.video__duration-time');

        this.initPlayButtons();
    };

    private initPlayButtons(): void {
        this.playStatusContainer = <HTMLElement>this.element.querySelector('.js-video__play-button');

        this.playButton = new PlayerData.play.componentType(this.playStatusContainer, PlayerData.play.componentData);
        this.playButton.show();
        this.pauseButton = new PlayerData.pause.componentType(this.playStatusContainer, PlayerData.pause.componentData);
        this.pauseButton.show();
    };

    public rerenderPlay(isPlay: boolean): void {
        if (isPlay) {
            this.playButton.hide();
            this.pauseButton.show();
        } else {
            this.pauseButton.hide();
            this.playButton.show();
        }
    };

    public setCurrentTime(time: number): void {
        this.currentTimeElement.innerText = `${this.progressBar.timeToString(time)} / ${this.progressBar.timeToString(this.video.duration)}`;
    };

    public bindPlayButtonClick(listener: any): void {
        this.playStatusContainer.addEventListener('click', listener);
    };

    public bindBackButtonClick(listener: any): void {
        this.backButtonContainer.addEventListener('click', listener);
    };

    public bindViewClick(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default PlayerView;
