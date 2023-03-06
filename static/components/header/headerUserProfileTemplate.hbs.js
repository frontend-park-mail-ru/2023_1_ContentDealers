export const headerUserProfileHtml =
    `
        {{#if isAuth}}
        <a href="" class="headerTop__profile">
            <img src="{{ profileIcon }}" class="profile" id="profile">
            {{ email }}
        </a>
        <a href="/logout" class="logout">
            <span>Выйти</span>     
        </a>
        {{else}}
        <a href="#" class="headerTop__sign-in" id="sign-in">
            <img src="static/img/svg-icons/circle-user.svg" class="sign-in">
            Войти
        </a>
        {{/if}}
    `;
