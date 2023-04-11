import IController from '../IController/IController';

import PlayerView from '../../Views/PlayerView/PlayerView';
import IModel from "../../Models/IModel/IModel";

class PlayerController extends IController<PlayerView, IModel> {
    private videoTime: number;
    private videoTimeMinutes: number;
    private videoTimeSeconds: number;
    private previousVolume: number;

    constructor(view: PlayerView) {
        super(view, IModel);

        this.videoTime = 0;
        this.videoTimeMinutes = 0;
        this.videoTimeSeconds = 0;
        this.previousVolume = 0;

        this.initialVideo = this.initialVideo.bind(this);
        this.toggleVideoStatus = this.toggleVideoStatus.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.mute = this.mute.bind(this);
        this.setVideoVolume = this.setVideoVolume.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.setProgress = this.setProgress.bind(this);

        this.initialVideo();
        this.addEventListeners();
    };

    public setSrc(src: string): void {
        console.log('setSrc', src)
        this.view.video.src = src;
        console.log('this.view.video.src', this.view.video.src)
    };

    private initialVideo(): void {
        this.view.progress.value = 0;
        this.view.video.volume = 0.5;
        this.videoTime = this.view.video.duration;
        this.videoTimeMinutes = Math.floor(this.videoTime / 60);
        this.videoTimeSeconds = Math.floor(this.videoTime % 60);
        this.view.time.innerHTML = `00:00/${this.videoTimeMinutes}:${this.videoTimeSeconds}`;
    };

    private toggleVideoStatus(): void {
        if (this.view.video.paused) {
            this.view.video.play();
            this.view.playBtnImg.src = '/img/icons/pause.svg';
        } else {
            this.view.video.pause();
            this.view.playBtnImg.src = '/img/icons/play.svg';
        }
    };

    public playVideo(): void {
        this.view.video.pause();
    };

    private stopVideo(): void {
        this.view.video.currentTime = 0;
        this.view.video.pause();
        this.view.playBtnImg.src = '/img/icons/play.svg';
    };

    private mute(): void {
        if (this.view.video.volume === 0) {
            this.view.video.volume = this.previousVolume;
            this.view.progressVolume.value = (this.previousVolume * 100).toString();
            this.view.volumeBtnImg.src = '/img/icons/volume.svg';
        } else {
            this.view.progressVolume.value = '0';
            this.previousVolume = this.view.video.volume;
            this.view.video.volume = 0;
            this.view.volumeBtnImg.src = '/img/icons/mute.svg';
        }
    };

    private setVideoVolume(): void {
        if (this.view.progressVolume.value == '0') {
            this.view.volumeBtnImg.src = '/img/icons/mute.svg';
        } else {
            this.view.volumeBtnImg.src = '/img/icons/volume.svg';
        }

        this.view.video.volume = parseFloat(this.view.progressVolume.value) / 100;
        this.previousVolume = this.view.video.volume;
    };

    private updateTime(): void {
        this.view.progress.value = (this.view.video.currentTime / this.view.video.duration) * 100;
        const minutes = Math.floor(this.view.video.currentTime / 60);
        const seconds = Math.floor(this.view.video.currentTime % 60);
        this.view.time.innerHTML = `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}/${this.videoTimeMinutes}:${this.videoTimeSeconds}`;
    };

    private setProgress(): void {
        this.view.video.currentTime = (this.view.progress.value * this.view.video.duration) / 100;
    };

    public addEventListeners(): void {
        this.view.video.addEventListener('canplay', this.initialVideo.bind(this));
        this.view.playBtn.addEventListener('click', this.toggleVideoStatus.bind(this));
        this.view.video.addEventListener('click', this.toggleVideoStatus.bind(this));
        this.view.stopBtn.addEventListener('click', this.stopVideo.bind(this));
        this.view.volumeBtnImg.addEventListener('click', this.mute.bind(this));
        this.view.progressVolume.addEventListener('click', this.setVideoVolume.bind(this));
        this.view.video.addEventListener('timeupdate', this.updateTime.bind(this));
        this.view.progress.addEventListener('click', this.setProgress.bind(this));
    };

    public removeEventListeners(): void {
        this.view.video.removeEventListener('canplay', this.initialVideo.bind(this));
        this.view.playBtn.removeEventListener('click', this.toggleVideoStatus.bind(this));
        this.view.video.removeEventListener('click', this.toggleVideoStatus.bind(this));
        this.view.stopBtn.removeEventListener('click', this.stopVideo.bind(this));
        this.view.volumeBtnImg.removeEventListener('click', this.mute.bind(this));
        this.view.progressVolume.removeEventListener('click', this.setVideoVolume.bind(this));
        this.view.video.removeEventListener('timeupdate', this.updateTime.bind(this));
        this.view.progress.removeEventListener('click', this.setProgress.bind(this));
    };
}

export default PlayerController;
