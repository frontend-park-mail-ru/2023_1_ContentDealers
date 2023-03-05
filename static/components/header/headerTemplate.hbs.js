export const headerHtml =
    `
        <nav class="headerTop__nav">
            <a href="#" class="headerTop__logo__icon">
                <img src="{{ logoIcon }}">
            </a>

            <ul class="headerTop__actions"></ul>

            <div class="headerTop__right">
                <div class="headerTop__search">
                    <a href="#" class="headerTop__search__icon">
                        <img src="{{ searchIcon }}">
                    </a>
                </div>
                
                <div class="headerTop__verticalSpacer"></div>
                
                <div class="headerTop__button"></div>

                <div class="headerTop__verticalSpacer"></div>

                {{#if isAuth}}
                <a href="" class="headerTop__profile">
                    <img src="{{ profileIcon }}" class="profile" id="profile">
                </a>
                {{else}}
                <a href="#" class="headerTop__sign-in" id="sign-in">
                    <img src="static/img/svg-icons/circle-user.svg" class="sign-in">
                    Войти
                </a>
                {{/if}}
            </div>
        </nav>
    `;
