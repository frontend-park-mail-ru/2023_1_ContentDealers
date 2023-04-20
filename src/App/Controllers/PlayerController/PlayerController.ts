import IModel from '../../Models/IModel/IModel';
import IController from '../IController/IController';

import PlayerView from '../../Views/PlayerView/PlayerView';



class PlayerController extends IController<PlayerView, IModel> {
    // private videoTime: number;
    // private videoTimeMinutes: number;
    // private videoTimeSeconds: number;

    // private readonly currentVolume: number;
    // private previousVolume: number;

    constructor(view: PlayerView) {
        super(view, IModel);

        this.addEventListeners();

        // this.videoTime = 0;
        // this.videoTimeMinutes = 0;
        // this.videoTimeSeconds = 0;
        //
        // this.currentVolume = 0.5;
        // this.previousVolume = 0;
    };

    public setSrc(src: string): void {
        this.view.video.src = src;
    };

    private setVideoProgress(time: number): void {
        this.view.video.currentTime = time;
    };

    private addEventListeners(): void {
        this.view.video.addEventListener('canplay', this.initVideo.bind(this));

        this.view.video.addEventListener('timeupdate', () => {
            this.view.progressBar.updateCurrentBar(this.view.video.currentTime);
        });

        // this.view.playStopContainer.addEventListener('click', this.onPlayButtonClick.bind(this));
    };

    // private removeEventListeners(): void { // TODO
    //
    // };

    // private onPlayButtonClick(e: Event) {
    //     e.preventDefault();
    //
    //     if (this.isMounted) {
    //         if (this.view.video.paused) {
    //             this.playVideo();
    //         } else {
    //             this.stopVideo();
    //         }
    //
    //         return;
    //     }
    // };

    private initVideo(): void {
        this.view.progressBar.setMaxMinValues(this.view.video.duration);
        this.view.progressBar.setUpdateVideoFunc(this.setVideoProgress.bind(this));

        // this.view.video.volume = 0.5;
        // this.videoTime = this.view.video.duration;
        // this.videoTimeMinutes = Math.floor(this.videoTime / 60);
        // this.videoTimeSeconds = Math.floor(this.videoTime % 60);

        // this.updateTime();
        // this.updateVolume();
    };

    private async playVideo() {
        await this.view.video.play();
        // this.view.toggleVideoStatus(true);
    };

    private stopVideo(): void {
        this.view.video.pause();
        // this.view.toggleVideoStatus(false);
    };



    // private muteVolume(): void {
    //     // Math.abs(a - b) < tolerance;
    //
    //     if (this.view.video.volume < 0.01) {
    //         this.view.video.volume = this.previousVolume;
    //
    //         this.updateVolume();
    //         this.view.toggleVolumeStatus(true);
    //     } else {
    //         this.previousVolume = this.view.video.volume;
    //         this.view.video.volume = 0;
    //
    //         this.updateVolume();
    //         this.view.toggleVolumeStatus(false);
    //     }
    // };
}

export default PlayerController;
