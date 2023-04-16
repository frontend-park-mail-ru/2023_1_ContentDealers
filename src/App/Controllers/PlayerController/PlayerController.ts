import IController from '../IController/IController';

import PlayerView from '../../Views/PlayerView/PlayerView';
import IModel from "../../Models/IModel/IModel";

import EventDispatcher from "../../EventDispatcher/EventDispatcher";

class PlayerController extends IController<PlayerView, IModel> {
    private isDragging: boolean;
    private isVolumeDragging: boolean;

    private videoTime: number;
    private videoTimeMinutes: number;
    private videoTimeSeconds: number;

    private readonly currentVolume: number;
    private previousVolume: number;

    constructor(view: PlayerView) {
        super(view, IModel);

        this.addEventListeners();

        this.isDragging = false;

        this.videoTime = 0;
        this.videoTimeMinutes = 0;
        this.videoTimeSeconds = 0;

        this.currentVolume = 0.5;
        this.previousVolume = 0;
    };

    private addEventListeners(): void {
        this.view.video.addEventListener('canplay', this.initVideo.bind(this)); // ?

        this.view.playStopContainer.addEventListener('click', this.onPlayButtonClick.bind(this));
        this.view.muteUnmuteContainer.addEventListener('click', this.onVolumeClick.bind(this));

        this.view.video.addEventListener('timeupdate', this.updateTime.bind(this));

        this.view.videoBar.bindMouseDownEvent(this.onBarMouseDown.bind(this));
        this.view.videoBar.bindMouseUpEvent(this.onBarMouseUp.bind(this));
        this.view.videoBar.bindMouseMoveEvent(this.onBarMouseMove.bind(this));
        this.view.videoBar.bindMouseOutEvent(this.onBarMouseOut.bind(this));

        this.view.volumeBar.bindMouseDownEvent(this.onVolumeMouseDown.bind(this));
        this.view.volumeBar.bindMouseUpEvent(this.onVolumeMouseUp.bind(this));
        this.view.volumeBar.bindMouseMoveEvent(this.onVolumeMouseMove.bind(this));
        this.view.volumeBar.bindMouseOutEvent(this.onVolumeMouseOut.bind(this));
    };

    private removeEventListeners(): void { // TODO

    };

    public setSrc(src: string): void {
        this.view.video.src = src;
    };

    private percentageToTime(percentage: number): number {
        return (percentage / 100) * this.view.video.duration;
    };

    private timeToPercentage(time: number): number {
        return (time / this.view.video.duration) * 100;
    };

    private percentageToVolume(percentage: number): number {
        return percentage / 100;
    }

    private volumeToPercentage(volume: number): number {
        return volume * 100;
    };

    private timeToTime(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    };

    private onPlayButtonClick(e: Event) {
        e.preventDefault();

        if (this.isMounted) {
            if (this.view.video.paused) {
                this.playVideo();
            } else {
                this.stopVideo();
            }

            return;
        }
    };

    private initVideo(): void {
        this.view.videoBar.updateCurrentBar(this.timeToPercentage(this.view.video.currentTime));

        this.view.video.volume = 0.5;
        this.videoTime = this.view.video.duration;
        this.videoTimeMinutes = Math.floor(this.videoTime / 60);
        this.videoTimeSeconds = Math.floor(this.videoTime % 60);

        this.updateTime();
        this.updateVolume();
    };

    private playVideo(): void {
        this.view.video.play();
        this.view.toggleVideoStatus(true);
    };

    private stopVideo(): void {
        this.view.video.pause();
        this.view.toggleVideoStatus(false);
    };

    private updateTime(): void {
        this.view.videoBar.updateCurrentBar(this.timeToPercentage(this.view.video.currentTime));

        this.view.time.innerHTML = `${this.timeToTime(this.view.video.currentTime)}/${this.videoTimeMinutes}:${this.videoTimeSeconds}`;
    };

    private updateVolume(): void {
        this.view.volumeBar.updateCurrentBar(this.volumeToPercentage(this.view.video.volume));

        if (this.view.video.volume < 0.01) {
            this.view.toggleVolumeStatus(false);
        } else {
            this.view.toggleVolumeStatus(true);
        }
    }

    private muteVolume(): void {
        // Math.abs(a - b) < tolerance;

        if (this.view.video.volume < 0.01) {
            this.view.video.volume = this.previousVolume;

            this.updateVolume();
            this.view.toggleVolumeStatus(true);
        } else {
            this.previousVolume = this.view.video.volume;
            this.view.video.volume = 0;

            this.updateVolume();
            this.view.toggleVolumeStatus(false);
        }
    };

    private onVolumeClick(e: Event): void {
        e.preventDefault();

        this.muteVolume();
    };

    private onVolumeMouseDown(e: MouseEvent): void {
        this.isVolumeDragging = true;

        const floorPercentage = Math.floor(this.view.volumeBar.calculatePercentage(e.clientX));
        const boundedPercentage = floorPercentage < 0 ? 0 : Math.min(floorPercentage, 100);

        this.view.video.volume = this.percentageToVolume(boundedPercentage);
        this.updateVolume();
    };

    private onVolumeMouseUp(e: MouseEvent): void {
        this.isVolumeDragging = false;
    };

    private onVolumeMouseMove(e: MouseEvent): void {
        const cursorX = e.clientX;
        const percentage = this.view.volumeBar.calculatePercentage(cursorX);

        const floorPercentage = Math.floor(percentage);
        const boundedPercentage = floorPercentage < 0 ? 0 : Math.min(floorPercentage, 100);

        this.view.volumeBar.barHelper.div.style.left = `${percentage}%`;
        this.view.volumeBar.barHelper.div.innerText = `${boundedPercentage}%`;
        this.view.volumeBar.barHelper.show();

        this.view.volumeBar.currentBarCircle.show();

        if (this.isDragging) {
            this.view.video.volume = this.percentageToVolume(percentage);
            this.updateVolume();
        }
    };

    private onVolumeMouseOut(e: MouseEvent): void {
        if (this.view.volumeBar.checkHelper()) {
            this.view.volumeBar.barHelper.hide();
        }

        if (this.view.volumeBar.checkCircle()) {
            this.view.volumeBar.currentBarCircle.hide();
        }
    };

    private onBarMouseDown(e: MouseEvent): void {
        this.isDragging = true;

        this.view.video.currentTime = this.percentageToTime(this.view.videoBar.calculatePercentage(e.clientX));
        this.updateTime();
    };

    private onBarMouseUp(e: MouseEvent): void {
        this.isDragging = false;
    };

    private onBarMouseMove(e: MouseEvent): void {
        const cursorX = e.clientX;
        const percentage = this.view.videoBar.calculatePercentage(cursorX);

        this.view.videoBar.barHelper.div.style.left = `${percentage}%`;
        this.view.videoBar.barHelper.div.innerText = this.timeToTime(this.percentageToTime(percentage)); // TODO change trailer time
        this.view.videoBar.barHelper.show();

        this.view.videoBar.currentBarCircle.show();

        if (this.isDragging) {
            // EventDispatcher.emit('bar_update-progress', percentage);
            this.view.videoBar.updateCurrentBar(percentage);
        }
    };

    private onBarMouseOut(e: MouseEvent): void {
        if (this.view.videoBar.checkHelper()) {
            this.view.videoBar.barHelper.hide();
        }

        if (this.view.videoBar.checkCircle()) {
            this.view.videoBar.currentBarCircle.hide();
        }
    };
}

export default PlayerController;
