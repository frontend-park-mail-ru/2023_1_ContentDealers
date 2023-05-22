import IView from '../IView/IView';

import type IContent from '../../Interfaces/Content/IContent';

import ContentTemplate from './ContentView.hbs';
import ContentData from './ContentViewConfig';
import './ContentView.css';

import type ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import LinkComponent from '../../Components/LinkComponent/LinkComponent';

import SeriesComponent from '../../Components/SeriesComponent/SeriesComponent';
import type SeriesComponentData from '../../Components/SeriesComponent/SeriesComponentData';
import AboutContentComponent from '../../Components/AboutContentComponent/AboutContentComponent';


/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class ContentView extends IView {
    private buttonsContainer: HTMLElement;
    private subscribeButton: ButtonComponent;
    private trailerButton: ButtonComponent;
    private watchButton: ButtonComponent;
    private favoritesLink: LinkComponent;
    private favoritesIcon: HTMLImageElement;

    private seriesContainer: HTMLElement;
    public seriesComponent: SeriesComponent;

    private aboutContainer: HTMLElement;
    public aboutComponent: AboutContentComponent;

    public constructor(parent: HTMLElement) {
        super(parent, ContentTemplate({}));
    }

    public fillContent(contentData: IContent): void {
        this.parent.innerHTML = ContentTemplate({ content: contentData });

        this.element = <HTMLElement>this.parent.firstElementChild;

        this.seriesContainer = <HTMLElement>this.element.querySelector('.ts-series');
        this.buttonsContainer = <HTMLElement>(
            this.element.querySelector('.ts-film-content__buttons')
        );
        this.aboutContainer = <HTMLElement>this.element.querySelector('.ts-film-about');

        this.renderButtons();
    }

    public fillSeries(seriesData: SeriesComponentData): void {
        this.seriesComponent = new SeriesComponent(this.seriesContainer, {
            id: seriesData.id,
            count: seriesData.count,
        });
        this.seriesComponent.show();
    }

    public renderAbout(): void {
        this.aboutComponent = new AboutContentComponent(this.aboutContainer);
        this.aboutComponent.show();
    }

    private renderButtons(): void {
        this.trailerButton = new ContentData.trailerButton.componentType(
            this.buttonsContainer,
            ContentData.trailerButton.componentData
        );
        this.trailerButton.show();
    }

    public toggleBookmark(has: boolean): void {
        this.favoritesIcon.src = has
            ? '/img/icons/bookmark-added.svg'
            : '/img/icons/bookmark-regular.svg';
    }

    public renderWatchButton(): void {
        this.watchButton = new ContentData.watchButtonFree.componentType(
            this.buttonsContainer,
            ContentData.watchButtonFree.componentData
        );
        this.watchButton.show();
    }

    public renderPayButton(disable: boolean): void {
        this.watchButton = new ContentData.watchButtonPay.componentType(
            this.buttonsContainer,
            ContentData.watchButtonPay.componentData
        );

        if (disable) {
            this.watchButton.button.setAttribute('disabled', 'true');
        }

        this.watchButton.show();
    }

    public renderFavoritesButton(has: boolean): void {
        this.favoritesLink = new ContentData.favoritesLink.componentType(
            this.buttonsContainer,
            ContentData.favoritesLink.componentData
        );
        this.favoritesLink.show();

        this.favoritesIcon = <HTMLImageElement>this.favoritesLink.querySelector('img');

        this.toggleBookmark(has);
    }

    // Binds //
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public bindTrailerButtonClick(listener: any): void {
        this.trailerButton.bindClickEvent(listener);
    }

    public bindWatchButtonClick(listener: any): void {
        this.watchButton.bindClickEvent(listener);
    }

    public bindFavoriteClick(listener: any): void {
        this.favoritesLink.bindClickEvent(listener);
    }

    public bindSubscribeButtonClick(listener: any): void {
        this.subscribeButton.bindClickEvent(listener);
    }
}

export default ContentView;
