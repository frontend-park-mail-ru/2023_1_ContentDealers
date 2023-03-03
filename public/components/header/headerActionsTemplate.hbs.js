export { headerActionsHtml };

const headerActionsHtml =
    `
        {{#each this}}
        <li class="headerTop__action">
            <a href="{{ this.href }}">
                {{ this.name }}
            </a>
        </li>
        {{/each}}
    `;
