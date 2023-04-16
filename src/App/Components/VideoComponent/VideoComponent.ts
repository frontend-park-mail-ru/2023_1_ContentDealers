import IComponent from '../IComponent/IComponent';

import VideoComponentTemplate from './VideoComponent.hbs';
import VideoComponentData from './VideoComponentData';
import './VideoComponent.css';

class VideoComponent extends IComponent {
    constructor(parent: HTMLElement, template = '', topElement = '', data?: VideoComponentData) {
        super(parent, VideoComponentTemplate(data), 'a');
    };
}

export default VideoComponent;
