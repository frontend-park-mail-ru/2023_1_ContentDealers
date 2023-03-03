export const categoryItemHtml =
    `
        {{#each this}}
        <li class="category__container__item">
            <a href="{{ href }}" class="category__container__item-link">
                <img src="{{ src }}" alt="" class="category__container__item-image">
            </a>
        </li>
        {{/each}}
    `;
