import IComponent from '../IComponent/IComponent';

import ArticleTitleComponentTemplate from './ArticleTitleComponent.hbs';
import type ArticleTitleComponentData from './ArticleTitleComponentData';
import './ArticleTitleComponent.css';

import router from '../../Router/Router';

class ArticleTitleComponent extends IComponent{
    constructor(parent: HTMLElement, data: ArticleTitleComponentData) {
        super(parent, ArticleTitleComponentTemplate(data));

        this.bindTitleClick(this.onClick.bind(this));
    }

    public onClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
        if (href !== undefined && href !== null) {
            router.goToPath(href);
        }
    }

    private bindTitleClick(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public unbindTitleClick(listener: any): void {
        this.element.removeEventListener('click', listener);
    }
}

export default ArticleTitleComponent;
