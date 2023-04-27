import IComponent from '../IComponent/IComponent';

import ContentSearchComponentTemplate from './ContentSearchComponent.hbs';
import type ContentSearchComponentData from './ContentSearchComponentData';
import './ContentSearchComponent.css';

class ContentSearchComponent extends IComponent {
    constructor(parent: HTMLElement, data: ContentSearchComponentData) {
        super(parent, ContentSearchComponentTemplate({
            contentId:   data.contentId,
            src:         data.src,
            title:       data.title,
            isSerial:    data.isSerial,
        }));
    };
}

export default ContentSearchComponent;
