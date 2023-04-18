import IView from '../IView/IView';

import PlayerTemplate from './PlayerView.hbs'
import './PlayerView.css';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import BarComponent from '../../Components/BarComponent/BarComponent';

import EventDispatcher from "../../EventDispatcher/EventDispatcher";
import PlayerData from "./PlayerViewConfig";

class PlayerView extends IView {



    public readonly video: HTMLVideoElement;

    private videoPanel: HTMLElement;
    public videoBar: BarComponent;

    public volumeContainer: HTMLElement;
    public volumeBar: BarComponent;

    public playStopContainer: HTMLElement
    private playButton: LinkComponent;
    private stopButton: LinkComponent;

    public muteUnmuteContainer: HTMLElement;
    private muteButton: LinkComponent;
    private unmuteButton: LinkComponent;

    public readonly time: HTMLElement;


    constructor(parent: HTMLElement) {
        super(parent, PlayerTemplate({}), '#fullscreen-modal');

        this.video = <HTMLVideoElement>this.element.querySelector('video');

        this.videoPanel = <HTMLElement>this.element.querySelector('.video__panel');
        this.videoPanel.prepend(this.renderVideoBar());

        this.renderVolumeBar();


        // this.video.currentTime =


        this.initPlayButtons();
        this.stopButton.show();

        this.initVolumeButtons();
        this.unmuteButton.show();

        this.time = <HTMLElement>this.element.querySelector('.video__duration-time');
    };



    private initPlayButtons(): void {
        this.playStopContainer = <HTMLElement>this.element.querySelector('.video__play-button');
        this.playButton = new LinkComponent(this.playStopContainer, PlayerData.playButton);
        this.stopButton = new LinkComponent(this.playStopContainer, PlayerData.stopButton);
    };

    private initVolumeButtons(): void {
        this.muteUnmuteContainer = <HTMLElement>this.element.querySelector('.video__volume');
        this.muteButton = new LinkComponent(this.muteUnmuteContainer, PlayerData.muteVolume);
        this.unmuteButton = new LinkComponent(this.muteUnmuteContainer, PlayerData.unmuteVolume);
    };

    public toggleVideoStatus(isPlay: boolean): void {
        if (isPlay) {
            this.playButton.hide();
            this.stopButton.show();
        } else {
            this.stopButton.hide();
            this.playButton.show();
        }
    };

    public toggleVolumeStatus(isMute: boolean): void {
        if (isMute) {
            try {
                this.muteButton.hide();
                this.unmuteButton.show();
            } catch {

            }
        } else {
            try {
                this.unmuteButton.hide();
                this.muteButton.show();
            } catch {

            }
        }
    };

    private renderVideoBar(): HTMLElement {
        const div = document.createElement('div');
        this.videoBar = new BarComponent(div, { barClass: 'video__bar' });
        this.videoBar.show();
        return div;
    };

    private renderVolumeBar(): void {
        this.volumeContainer = <HTMLElement>this.element.querySelector('.video__icon')?.parentElement;
        this.volumeBar = new BarComponent(this.volumeContainer, { barClass: 'video__volume-bar' });
        this.volumeBar.show();
    }
}

export default PlayerView;
