export const modalWindowHtml = 
`
    <div class="authModal">
        <div class="modalOverlay">
            <div class="modalWindow">
                <div class="modalHeader">
                    <div class="modalHeaderFlex">
                        <h2>{{ header }}</h2>
                        <span class="closeBtn">&times;</span>
                    </div>
                </div>
                <div class="modalBody">
                    <div class="modalBodyContent">
                        <h3> Войдите или зарегистрируйтесь </h3>
                        <p>Чтобы начать пользоваться серависом Filmium</p>
                        <p id="additionalInfo"></p>
                        <form id="form">

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
