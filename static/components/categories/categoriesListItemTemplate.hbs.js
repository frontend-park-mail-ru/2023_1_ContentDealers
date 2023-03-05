export const categoriesListItemHtml =
    `
        {{#each this}}
        <li class="carousel__right__li">
            <a href="{{ href }}">
                <img src="{{ src }}">
                <span>{{ name }}</span>
            </a>
        </li>
        {{/each}}
    `;
