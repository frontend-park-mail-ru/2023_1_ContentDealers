import IModel from '../../Models/IModel/IModel';
import IController from '../IController/IController';

import PlayerView from '../../Views/PlayerView/PlayerView';


class PlayerController extends IController<PlayerView, IModel> {
    constructor(view: PlayerView) {
        super(view, IModel);

        this.playProxy.isPlay = true;
        this.view.video.volume = 0.5;

        this.addEventListeners();
    };


    // Proxy //
    private playHandler = {
        set: (target: any, key: string, value: any) => {
            target[key] = value;
            if (key === 'isPlay') {
                this.view.rerenderPlay(value);
            }
            return true;
        },
    };

    public playProxy = new Proxy(this, this.playHandler);

    private changePlayStatus(): void {
        this.playProxy.isPlay = !this.playProxy.isPlay;
    };


    // Setters //
    public setSrc(src: string): void {
        this.view.video.src = src;
    };

    private setVideoProgress(time: number): void {
        this.view.video.currentTime = time;
    };

    private setVideoVolume(volume: number): void {
        this.view.video.volume = volume;
    };


    // Getters //
    private getVideoVolume(): number {
        return this.view.video.volume;
    };


    private addEventListeners(): void {
        this.view.video.addEventListener('canplay', this.initVideo.bind(this));

        this.view.video.addEventListener('timeupdate', () => {
            this.view.progressBar.setCurrentValueToBar(this.view.video.currentTime);
        });

        this.view.video.addEventListener('volumechange', () => {
            const volume = this.view.video.volume;

            if (volume < 0.01) {
                this.view.volumeBar.setMuteProxy(true);
            } else {
                this.view.volumeBar.setMuteProxy(false);
            }
        });

        this.view.bindPlayButtonClick(this.togglePlayButton.bind(this));

        this.view.bindBackButtonClick(this.onBackButtonClick.bind(this));

        this.view.bindViewClick(this.onViewClick.bind(this));
    };

    private initVideo(): void {
        this.view.progressBar.setMaxMinValues(this.view.video.duration);
        this.view.progressBar.setUpdateVideoFunc(this.setVideoProgress.bind(this));

        this.view.volumeBar.setUpdateVideoFunc(this.setVideoVolume.bind(this));
        this.view.volumeBar.setGetVolumeFunc(this.getVideoVolume.bind(this));
    };

    private togglePlayButton(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.changePlayStatus();

        if (this.playProxy.isPlay) {
            this.view.video.play();
        } else {
            this.view.video.pause();
        }
    };

    private onBackButtonClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.unmountComponent();
    };

    private onViewClick(e: Event): void {
        e.preventDefault();

        const target = <HTMLElement>e.target;

        const panel = <HTMLElement>target.closest('.video__panel');
        if (!panel) {
            this.togglePlayButton(e);
        }
    };
}

export default PlayerController;
