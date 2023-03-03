export { headerHtml };

const headerHtml =
    `
        <header class="headerTop">
            <nav class="headerTop__nav">
                <a href="" class="headerTop__logo__icon">
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

                    <a href="" class="headerTop__profile">
                        <img src="{{ profileIcon }}" class="headerTop__profile__image">
                    </a>
                </div>
            </nav>
        </header>
    `;
