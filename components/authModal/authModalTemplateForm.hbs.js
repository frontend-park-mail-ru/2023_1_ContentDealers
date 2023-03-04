export const authModalHtmlForm = 
    `<div class="emailInputField">
        <input id="emailID" class="inputArea" type="text" maxlength="320" placeholder="email" value="">
    </div>
    <div class="passwordInputField">
        <input id="passwordID" class="inputArea" type="password" maxlength="320" placeholder="Пароль" value="">
    </div>
    <div class="auxiliaryTools">
        <label><input type="checkbox" id="passwordCheckbox"> Показать пароль</label>
        <a id="recoveryID" href="#">Восстановить пароль</a>
    </div>
    <div class="submitAuthForm">
        <button id="submitAuth" disabled>Продолжить</button>
    </div>
    <div class="suggestRegistrarion">
        <p>Нет аккаунта? <a id="registrationID" href="#">Зарегистрироваться</a></p>
    </div>
    `;
