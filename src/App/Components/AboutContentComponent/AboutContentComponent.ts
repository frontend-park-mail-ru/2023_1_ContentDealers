import IComponent from '../IComponent/IComponent';

import AboutContentComponentTemplate from './AboutContentComponent.hbs';
import './AboutContentComponent.css';

import ButtonComponent from '../ButtonComponent/ButtonComponent';
import type ButtonComponentData from '../ButtonComponent/ButtonComponentData';

class AboutContentComponent extends IComponent {
    public stars: HTMLElement[];
    private activeStar: number | null;
    private readonly activeStarClass: string = 'stars__star_active';
    private readonly initStarClass: string = 'stars__star_color';

    private readonly headerContainer: HTMLElement;
    private titleContainer: HTMLElement;

    private deleteRatingButton: ButtonComponent;

    public constructor(parent: HTMLElement) {
        super(parent, AboutContentComponentTemplate({}));

        this.stars = [];

        const nodes = this.element.querySelectorAll('.ts-star');
        nodes.forEach((node) => {
            this.stars.push(node as HTMLElement);
        })

        this.headerContainer = <HTMLElement>this.element.querySelector('.ts-about-content-header');
        this.titleContainer = <HTMLElement>this.element.querySelector('.ts-about-content-title');

        this.activeStar = null;
        this.deleteRatingButton = new ButtonComponent(this.headerContainer, <ButtonComponentData>{
            upperClass: 'about-content-grid__button',
            text: 'Удалить'
        });

        this.defaultState();
    }

    public defaultState(): void {
        if (this.activeStar) {
            this.stars[this.activeStar].classList.remove(this.activeStarClass);
            this.deleteRatingButton.hide();
        }
        this.activeStar = null;

        this.stars.forEach((star) => {
            star.classList.add(this.initStarClass);
        });

        this.titleContainer.innerHTML = 'Поставьте оценку';
    }

    public changeActiveStar(index: number): void {
        this.stars.forEach((star) => {
            star.classList.remove(this.initStarClass);
        });

        if (this.activeStar) {
            this.stars[this.activeStar].classList.remove(this.activeStarClass);
        }

        this.activeStar = index;
        this.stars[this.activeStar].classList.add(this.activeStarClass);
        this.titleContainer.innerHTML = `Ваша оценка - ${this.activeStar + 1}`;
        this.deleteRatingButton.show();
    }

    public bindDeleteRatingButtonClick(listener: any): void {
        const wrappedListener = (e: Event) => {
            listener(e);
            this.defaultState();
        };

        this.deleteRatingButton.bindClickEvent(wrappedListener);
    }
}

export default AboutContentComponent;
