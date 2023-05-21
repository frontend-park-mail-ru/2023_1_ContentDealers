import IComponent from '../IComponent/IComponent';

import type ArticleComponentData from './ArticleComponentData';
import ArticleComponentTemplate from './ArticleComponent.hbs';
import './ArticleComponent.css';

import ArticleTitleComponent from '../ArticleTitleComponent/ArticleTitleComponent';
import CardCarouselComponent from '../CardCarouselComponent/CardCarouselComponent';

class ArticleComponent extends IComponent {
    constructor(parent: HTMLElement, data?: ArticleComponentData) {
        super(parent, ArticleComponentTemplate({ className: data?.className }));

        if (data?.titleData) {
            new ArticleTitleComponent(this.element, data.titleData).show();
        }

        if (data?.cardsData) {
            new CardCarouselComponent(this.element, data.cardsData).show();
        }
    }
}

export default ArticleComponent;
