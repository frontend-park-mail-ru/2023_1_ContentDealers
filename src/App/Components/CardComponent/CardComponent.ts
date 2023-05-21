import IComponent from '../IComponent/IComponent';

import CardComponentTemplate from './CardComponent.hbs';
import type CardComponentData from './CardComponentData';
import './CardComponent.css';

class CardComponent extends IComponent {
    public constructor(parent: HTMLElement, data?: CardComponentData) {
        super(parent, CardComponentTemplate(data));
        this.setImageSource(data?.imageSrc);

        if (data?.onClick) {
            this.bindClickEvent(data.onClick);
        }
    }

    private setImageSource(imageSrc: string | undefined): void {
        const imageElement = this.element.querySelector('.card__image');
        if (imageElement instanceof HTMLImageElement && imageSrc) {
            imageElement.src = imageSrc;
        }
    }

    private bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }
}

export default CardComponent;
