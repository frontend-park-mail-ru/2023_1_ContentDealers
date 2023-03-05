export const headerActionsHtml =
    `
        {{#each this}}
        <li class="headerTop__action {{#if @first}} active {{/if}}">
            <a href="{{ this.href }}">
                {{ this.name }}
            </a>
        </li>
        {{/each}}
    `;
