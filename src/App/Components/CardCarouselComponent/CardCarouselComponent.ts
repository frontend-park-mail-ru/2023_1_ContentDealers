import IComponent from '../IComponent/IComponent';

import CardCarouselComponentTemplate from './CardCarouselComponent.hbs';
import './CardCarouselComponent.css';

import type CardComponentData from '../CardComponent/CardComponentData';
import CardComponent from '../CardComponent/CardComponent';

import DivComponent from '../DivComponent/DivComponent';

class CardCarouselComponent extends IComponent {
    private readonly cardsContainer: HTMLElement;
    public cardComponents: CardComponent[];

    private readonly leftButton: HTMLElement;
    private readonly rightButton: HTMLElement;
    private readonly buttonHideClass = 'card-carousel__button_hide';

    private rightOffset: DivComponent;
    private readonly rightOffsetClass = 'card-carousel__offset card-carousel__offset_margin-right';

    private leftOffset: DivComponent;
    private readonly leftOffsetClass = 'card-carousel__offset card-carousel__offset_margin-left';

    private railColumns: number;
    private cardWidth: number;
    private scrollPosition: number;
    private maxScrollPosition: number;

    constructor(parent: HTMLElement, data: CardComponentData[]) {
        super(parent, CardCarouselComponentTemplate({}));

        // Init HTMLElements //
        this.cardsContainer = <HTMLElement>this.element.querySelector('.ts-cards');
        this.leftButton = <HTMLElement>this.element.querySelector('.ts-button-left');
        this.rightButton = <HTMLElement>this.element.querySelector('.ts-button-right');

        // Render //
        this.rightOffset = new DivComponent(this.cardsContainer, { divClass: this.rightOffsetClass });
        this.rightOffset.show();
        this.leftOffset = new DivComponent(this.cardsContainer, { divClass: this.leftOffsetClass });
        this.leftOffset.show();

        this.cardComponents = [];
        this.addCards(data);

        this.scrollPosition = 0;
        setTimeout(() => {
            this.settingScrollParams();
            this.updateButtonVisibility();
        }, 0);

        // Binds //
        this.bindLeftButtonClick(this.onLeftButtonClick.bind(this));
        this.bindRightButtonClick(this.onRightButtonClick.bind(this));
    }

    private settingScrollParams(): void {
        this.railColumns = parseInt(getComputedStyle(this.cardsContainer).getPropertyValue('--rail-columns'));

        const firstCard = this.cardsContainer.querySelector('.card');
        this.cardWidth = firstCard ? firstCard.clientWidth : 0;

        this.maxScrollPosition = this.cardsContainer.scrollWidth - this.cardsContainer.clientWidth;
    }

    public addCards(cardsData: CardComponentData[]): void {
        this.leftOffset.hide();
        cardsData.forEach((cardData) => {
            const cardComponent = new CardComponent(this.cardsContainer, cardData);
            cardComponent.show();
            this.cardComponents.push(cardComponent);
        });
        this.leftOffset.show();
    }

    private updateButtonVisibility(): void {
        if (this.scrollPosition > 0) {
            this.leftButton.classList.remove(this.buttonHideClass);
        } else {
            this.leftButton.classList.add(this.buttonHideClass);
        }

        if (this.scrollPosition < this.maxScrollPosition) {
            this.rightButton.classList.remove(this.buttonHideClass);
        } else {
            this.rightButton.classList.add(this.buttonHideClass);
        }
    }

    private scrollCarouselBy(delta: number): void {
        // TODO mb remove? (but I need take new value on resize to correct click, but then buttons hides)
        this.settingScrollParams();

        const newScrollPosition = this.scrollPosition + delta * this.cardWidth * (this.railColumns + 1);
        this.scrollPosition = Math.max(0, Math.min(this.maxScrollPosition, newScrollPosition));

        this.cardsContainer.scrollTo({
            left: this.scrollPosition,
            behavior: 'smooth'
        });

        this.updateButtonVisibility();
    }

    private onLeftButtonClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.scrollCarouselBy(-1);
    }

    private onRightButtonClick(e: Event): void {
        e.preventDefault();
        e.stopPropagation();

        this.scrollCarouselBy(1);
    }

    // Binds //
    private bindLeftButtonClick(listener: any): void {
        this.leftButton.addEventListener('click', listener);
    }

    private bindRightButtonClick(listener: any): void {
        this.rightButton.addEventListener('click', listener);
    }
}

export default CardCarouselComponent;
