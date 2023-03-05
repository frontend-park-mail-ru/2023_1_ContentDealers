export const categoryItemHtml =
    `
        {{#each movies}}
        <li class="category__container__item">
            <a href="{{ href }}" class="category__container__item-link">
                <img src="{{ preview_url }}" alt="" class="category__container__item-image">
            </a>
        </li>
        {{/each}}
    `;
