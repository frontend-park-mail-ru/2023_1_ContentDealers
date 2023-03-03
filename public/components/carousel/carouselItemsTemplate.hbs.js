export const carouselItemsHtml =
    `
        {{#each this}}
        <li class="carousel__li">
            <img src="{{ this }}" alt="">
        </li>
        {{/each}}
    `;
