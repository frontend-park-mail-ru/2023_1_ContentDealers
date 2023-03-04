export const subscriptionHtml =
    `
        <section class="subscription__section" style="background-image: url({{ backgroundImage }})">
            <div class="pic"></div>
            
            <div class="text">
                <h1 class="subscription__name">{{ name }}</h1>
                <span class="subscription__text">{{ text }}</span>
            </div>
            
            <div class="price">
                <div class="price-price">{{ price }}</div>
            </div>
            
            <div class="buttons"></div>
        </section>
    `;
