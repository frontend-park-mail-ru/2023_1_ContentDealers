import IComponent from '../IComponent/IComponent';

import ContentSearchComponentTemplate from './ContentSearchComponent.hbs';
import type ContentSearchComponentData from './ContentSearchComponentData';
import './ContentSearchComponent.css';

class ContentSearchComponent extends IComponent {
    public constructor(
        parent: HTMLElement,
        data: ContentSearchComponentData,
        forSearch: boolean,
        imgClassname: string
    ) {
        super(
            parent,
            ContentSearchComponentTemplate({
                contentId: data.contentId,
                src: data.src,
                title: data.title,
                isSerial: data.isSerial,
                forSearch: forSearch,
                imgClassName: imgClassname,
            })
        );
    }
}

export default ContentSearchComponent;
