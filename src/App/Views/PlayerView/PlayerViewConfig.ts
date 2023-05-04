import type IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import ProgressBarComponent from '../../Components/ProgressBarComponent/ProgressBarComponent';
import type ProgressBarComponentData from '../../Components/ProgressBarComponent/ProgressBarComponentData';

import VolumeBarComponent from '../../Components/VolumeBarComponent/VolumeBarComponent';
import type VolumeBarComponentData from '../../Components/VolumeBarComponent/VolumeBarComponentData';

import DivComponent from '../../Components/DivComponent/DivComponent';
import type DivComponentData from '../../Components/DivComponent/DivComponentData';

interface IPlayerData {
    playButton: IComponentDataWithType<DivComponent, DivComponentData>;
    pauseButton: IComponentDataWithType<DivComponent, DivComponentData>;

    nextButton: IComponentDataWithType<DivComponent, DivComponentData>;

    closeButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;

    progressBar: IComponentDataWithType<ProgressBarComponent, ProgressBarComponentData>;
    volumeBar: IComponentDataWithType<VolumeBarComponent, VolumeBarComponentData>;

    screenButton: IComponentDataWithType<DivComponent, DivComponentData>;
    compressButton: IComponentDataWithType<DivComponent, DivComponentData>;
}

const PlayerData: IPlayerData = {
    playButton: {
        componentType: DivComponent,
        componentData: {
            divClass: 'flex-center',
            title: 'Остановить видео',
            imgSrc: '/img/icons/player/play.svg',
            imgWidth: '16px',
        },
    },
    pauseButton: {
        componentType: DivComponent,
        componentData: {
            divClass: 'flex-center',
            title: 'Включить видео',
            imgSrc: '/img/icons/player/pause.svg',
            imgWidth: '16px',
        },
    },

    nextButton: {
        componentType: DivComponent,
        componentData: {
            divClass: 'video__button flex-center',
            title: 'Включить видео',
            imgSrc: '/img/icons/player/forward-step.svg',
            imgWidth: '16px',
        },
    },

    closeButton: {
        componentType: ButtonComponent,
        componentData: {
            colorClass: 'gradient-button--grey',
            imgSrc: '/img/icons/close.svg',
            imgWidth: '22px',
        },
    },

    progressBar: {
        componentType: ProgressBarComponent,
        componentData: {
            class: 'video_progress-bar',
            barData: { barWidthClass: 'w-100' },
        },
    },
    volumeBar: {
        componentType: VolumeBarComponent,
        componentData: {
            barData: { barWidthClass: 'video__volume-bar' },
        },
    },

    screenButton: {
        componentType: DivComponent,
        componentData: {
            divClass: 'flex-center',
            title: 'Во весь экран',
            imgSrc: '/img/icons/player/fullscreen.svg',
            imgWidth: '22px',
        },
    },
    compressButton: {
        componentType: DivComponent,
        componentData: {
            divClass: 'flex-center',
            title: 'Выйти из полноэкранного режима',
            imgSrc: '/img/icons/player/compress.svg',
            imgWidth: '22px',
        },
    },
};

export default PlayerData;
