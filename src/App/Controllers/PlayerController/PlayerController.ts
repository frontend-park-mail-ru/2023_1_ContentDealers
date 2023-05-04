import IModel from '../../Models/IModel/IModel';
import IController from '../IController/IController';

import type PlayerView from '../../Views/PlayerView/PlayerView';

class PlayerController extends IController<PlayerView, IModel> {
    private readonly mouseTimeout = 3000;
    private mouseTimeoutId: number | undefined;

    // Bound events //
    private readonly BoundKeyDown = this.onKeyDown.bind(this);

    public constructor(view: PlayerView) {
        super(view, IModel);

        this.view.video.volume = 0.5;

        this.addEventListeners();
    }

    public mountComponent(): void {
        super.mountComponent();

        document.addEventListener('keydown', this.BoundKeyDown);

        this.playerProxy.isPlay = true;
        this.playerProxy.isFullScreen = false;
    }

    public unmountComponent(): void {
        super.unmountComponent();

        document.removeEventListener('keydown', this.BoundKeyDown);
    }

    // Proxy //
    private playerHandler = {
        set: (target: any, key: string, value: any): boolean => {
            target[key] = value;
            switch (key) {
                case 'isPlay': {
                    this.view.rerenderPlay(value);
                    break;
                }

                case 'isFullScreen': {
                    this.view.rerenderScreen(value);
                    break;
                }
                //
                // default: {
                //
                // }
            }

            return true;
        },
    };

    public playerProxy = new Proxy(this, this.playerHandler);

    private changePlayStatus(): void {
        this.playerProxy.isPlay = !this.playerProxy.isPlay;
    }

    // Setters //
    public setSrc(src: string): void {
        this.view.video.src = src;
    }

    private setVideoProgress(time: number): void {
        this.view.video.currentTime = time;
    }

    private setVideoVolume(volume: number): void {
        this.view.video.volume = volume;
    }

    // Listeners //
    private addEventListeners(): void {
        this.view.video.addEventListener('canplay', this.initVideo.bind(this));

        this.view.video.addEventListener('loadedmetadata', () => {
            this.view.video.addEventListener('timeupdate', () => {
                const currentTime = this.view.video.currentTime;
                const duration = this.view.video.duration;
                const buffered = this.view.video.buffered.end(this.view.video.buffered.length - 1);

                this.view.progressBar.updateLoadProgressBar((buffered / duration) * 100);
                this.view.progressBar.setCurrentValueToBar(currentTime);
                this.view.setCurrentTime(currentTime);
            });
        });

        this.view.video.addEventListener('volumechange', () => {
            const volume = this.view.video.volume;

            if (volume < 0.01) {
                this.view.volumeBar.setMuteProxy(true);
            } else {
                this.view.volumeBar.setMuteProxy(false);
            }
        });

        this.view.bindCloseButtonClick(this.onCloseButtonClick.bind(this));

        this.view.bindVideoClick(this.onVideoClick.bind(this));
        this.view.bindPlayButtonClick(this.togglePlayButton.bind(this));
        this.view.bindMouseMoveEvent(this.onMouseMove.bind(this));
        this.view.bindScreenButtonClick(this.toggleScreenButton.bind(this));

        this.view.bindNextButtonClick(this.onNextButtonClick.bind(this));
    }

    private initVideo(): void {
        this.view.progressBar.setMaxMinValues(this.view.video.duration);
        this.view.progressBar.setUpdateVideoFunc(this.setVideoProgress.bind(this));

        this.view.volumeBar.setUpdateVideoFunc(this.setVideoVolume.bind(this));
    }

    // Handlers //
    private togglePlayButton(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.changePlayStatus();

        if (this.playerProxy.isPlay) {
            this.view.video.play();
        } else {
            this.view.video.pause();
        }
    }

    private onNextButtonClick(): void {
        console.log('onNextButtonClick');
        this.setSrc('trailers/1.mp4');
        // this.initVideo();
    }

    private toggleScreenButton(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.changePlayStatus();

        if (!this.playerProxy.isFullScreen) {
            if (this.view.video.requestFullscreen) {
                this.view.video.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    private onCloseButtonClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.unmountComponent();
    }

    private onVideoClick(e: Event): void {
        e.preventDefault();

        this.onMouseMove(); // TODO: improve??

        const target = <HTMLElement>e.target;

        const panel = <HTMLElement>target.closest('.video__panel');
        if (!panel) {
            this.togglePlayButton(e);
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        e.stopPropagation();

        this.onMouseMove(); // TODO: improve??

        if (e.code === 'Space') {
            this.togglePlayButton(e);
        }
    }

    private onMouseMove(): void {
        if (this.mouseTimeoutId) {
            window.clearTimeout(this.mouseTimeoutId);
        }
        this.view.showElements();

        this.mouseTimeoutId = window.setTimeout(
            this.view.hideElements.bind(this.view),
            this.mouseTimeout
        );
    }
}

export default PlayerController;
