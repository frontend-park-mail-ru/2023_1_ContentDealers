import LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

interface IPlayerData {
    playButton: LinkComponentData;
    stopButton: LinkComponentData;
    muteVolume: LinkComponentData;
    unmuteVolume: LinkComponentData;
}

const PlayerData: IPlayerData = {
    playButton: {
        linkImageSrc: '/img/icons/player/play-circle.svg',
        linkImageWidth: '32px',
    },
    stopButton: {
        linkImageSrc: '/img/icons/player/pause-circle.svg',
        linkImageWidth: '32px',
    },
    muteVolume: {
        linkImageSrc: '/img/icons/player/volume-mute.svg',
        linkImageWidth: '32px',
    },
    unmuteVolume: {
        linkImageSrc: '/img/icons/player/volume-up.svg',
        linkImageWidth: '32px',
    }
};

export default PlayerData;
