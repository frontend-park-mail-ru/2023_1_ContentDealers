import IComponentDataWithType from '../../Interfaces/interfaces';

import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import ButtonComponentData from '../../Components/ButtonComponent/ButtonComponentData';

import ProgressBarComponent from '../../Components/ProgressBarComponent/ProgressBarComponent';
import ProgressBarComponentData from '../../Components/ProgressBarComponent/ProgressBarComponentData';

import VolumeBarComponent from '../../Components/VolumeBarComponent/VolumeBarComponent';
import VolumeBarComponentData from '../../Components/VolumeBarComponent/VolumeBarComponentData';

import DivComponent from '../../Components/DivComponent/DivComponent';
import DivComponentData from '../../Components/DivComponent/DivComponentData';

interface IPlayerData {
    backButton: IComponentDataWithType<ButtonComponent, ButtonComponentData>;

    progressBar: IComponentDataWithType<ProgressBarComponent, ProgressBarComponentData>;
    volumeBar: IComponentDataWithType<VolumeBarComponent, VolumeBarComponentData>;

    play: IComponentDataWithType<DivComponent, DivComponentData>;
    pause: IComponentDataWithType<DivComponent, DivComponentData>;
}

const PlayerData: IPlayerData = {
    backButton: {
        componentType: ButtonComponent,
        componentData: {
            imgSrc: '/img/icons/close.svg',
            imgWidth: '22px',
        }
    },

    progressBar: {
        componentType: ProgressBarComponent,
        componentData: {
            class: 'video_progress-bar',
            barData: { barWidthClass: 'w-100' }
        },
    },
    volumeBar: {
        componentType: VolumeBarComponent,
        componentData: {
            barData: { barWidthClass: 'video__volume-bar' },
        },
    },

    play: {
        componentType: DivComponent,
        componentData: {
            divClass: 'flex-center',
            title: 'Остановить видео',
            imgSrc: '/img/icons/player/play.svg',
            imgWidth: '16px',
        },
    },
    pause: {
        componentType: DivComponent,
        componentData: {
            divClass: 'flex-center',
            title: 'Включить видео',
            imgSrc: '/img/icons/player/pause.svg',
            imgWidth: '16px',
        },
    },
};

export default PlayerData;
