export const categoryHtml =
    `
        <a class="category__link">
            <div class="category__block">
                <h2 class="category__name">{{ title }}</h2>
                <img src="static/img/svg-icons/chevrons/chevron-right.svg" alt="" class="icon-right">
            </div>
        </a>
        
        <div class="category__container">
            <div class="category__container__list">
                <ul class="category__container__items">
                </ul>
            </div>

            <div class="category__container__buttons">
                <button class="category__container__button-left">
                    <img src="static/img/svg-icons/chevrons/chevron-left.svg" alt="" class="icon-left">
                </button>
                <button class="category__container__button-right">
                    <img src="static/img/svg-icons/chevrons/chevron-right.svg" alt="" class="icon-right">
                </button>
            </div>
        </div> 
    `;
