import IView from '../IView/IView';

import PlayerTemplate from './PlayerView.hbs'
import './PlayerView.css';
import BarComponent from "../../Components/BarComponent/BarComponent";

class PlayerView extends IView {
    private videoPanel: HTMLElement;
    private videoBar: BarComponent;

    // public readonly video: HTMLVideoElement;
    // public readonly playBtn: HTMLButtonElement;
    // public readonly playBtnImg: HTMLImageElement;
    // public readonly stopBtn: HTMLButtonElement;
    // public readonly progress: HTMLProgressElement;
    // public readonly volumeBtnImg: HTMLImageElement;
    // public readonly progressVolume: HTMLInputElement;
    // public readonly time: HTMLDivElement;

    constructor(parent: HTMLElement) {
        super(parent, PlayerTemplate({}), '#fullscreen-modal');

        this.videoPanel = <HTMLElement>this.element.querySelector('.video__panel');

        this.videoPanel.prepend(this.renderVideoBar());


        // super(parent, PlayerTemplate({}), '.wrapper');

        // this.video = <HTMLVideoElement>this.element.querySelector('.video');
        //
        // this.playBtn = <HTMLButtonElement>this.element.querySelector('.controls__play');
        // this.playBtnImg = <HTMLImageElement>this.element.querySelector('.play__btn');
        // this.stopBtn = <HTMLButtonElement>this.element.querySelector('.controls__stop');
        //
        // this.progress = <HTMLProgressElement>this.element.querySelector('.progress');
        //
        // this.volumeBtnImg = <HTMLImageElement>this.element.querySelector('.volume__btn');
        // this.progressVolume = <HTMLInputElement>this.element.querySelector('.volume__progress');
        //
        // this.time = <HTMLDivElement>this.element.querySelector('.controls__time');
    };

    private renderVideoBar(): HTMLElement {
        const div = document.createElement('div');
        this.videoBar = new BarComponent(div, '', '', { barClass: 'video__bar' });
        this.videoBar.show();
        return div;
    };
}

export default PlayerView;
