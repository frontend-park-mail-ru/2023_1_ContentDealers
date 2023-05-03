import IComponent from '../IComponent/IComponent';

import VideoComponentTemplate from './VideoComponent.hbs';
import type VideoComponentData from './VideoComponentData';
import './VideoComponent.css';

class VideoComponent extends IComponent {
    public constructor(parent: HTMLElement, data?: VideoComponentData) {
        super(parent, VideoComponentTemplate(data));
    }
}

export default VideoComponent;
