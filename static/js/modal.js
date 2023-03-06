'use strict';

import { AuthModal } from '../components/authModal/authModal.js';
import { RecModal } from '../components/recoveryModal/recModal.js';
import { RegModal } from '../components/registrationModal/regModal.js';
import { ModalWindow } from '../components/modalWindow/modalWindow.js';
import { validateEmail } from './verification.js';
import { ajax } from './ajax.js';

import { headerObject } from './index.js';

export const modalWindow = (function createModal() {
    const authEvents = [
        {
            type: 'click',
            id: '#passwordCheckbox',
            func: handleCheckbox,
        },
        {
            type: 'click',
            id: '#submitAuth',
            func: submitAuthForm,
        },
        {
            type: 'click',
            id: '#recoveryID',
            func: processRecovery,
        },
        {
            type: 'click',
            id: '#registrationID',
            func: processRegistration,
        },
        {
            type: 'input',
            id: '#emailID',
            func: onChangeUserInput,
        },
        {
            type: 'input',
            id: '#passwordID',
            func: onChangeUserInput,
        }
    ];

    const recEvents = [
        {
            type: 'click',
            id: '#submitRec',
            func: submitRecForm
        },
        {
            type: 'input',
            id: '#emailID',
            func: onChangeUserInput,
        },
    ];

    const regEvents = [
        {
            type: 'click',
            id: '#submitReg',
            func: submitRegForm
        },
        {
            type: 'input',
            id: '#emailID',
            func: onChangeUserInput,
        },
        {
            type: 'input',
            id: '#passwordID',
            func: onChangeUserInput,
        },
        {
            type: 'input',
            id: '#repeatedPasswordID',
            func: onChangeUserInput,
        },
    ];

    const TYPE_MESSAGE = {
        error: 'error',
        success: 'success',
    };

    const messagesForUsers = {
        error: {
            email: 'email введен в неверном формате',
            password: 'пароли не совпадают',
            wrongData: 'введены неверные данные',
            userExist: 'пользователь с такими данными уже существует',
            serverError: 'произошла неизвестная ошибка, попробуйте',
        },
        success: {
            registraion: 'пользователь успешно создан'
        }
    };

    const urlForRequest = {
        signin: 'http://89.208.199.170/api/signin',
        signup: 'http://89.208.199.170/api/signup',
    };

    const MODAL_WINDOW_TYPES = {
        authentification: 'auth',
        registration: 'reg',
        recovery: 'rec',
    };

    let currentType = null;

    let divForModal = null;

    let modal = null;
    let form = null;
    let additionalInfo = null;

    const ANIMATION_SPEED = 200;
    let isClosing = false;

    function openModal() {
        if (!isClosing) {
            divForModal = document.createElement('div');
            document.body.prepend(divForModal);
            const modalWindow = new ModalWindow(divForModal);
            modalWindow.config = {
                header: 'вход или регистрация',
            };
            modalWindow.render();

            modal = divForModal.firstElementChild;
            form = modal.querySelector('form');
            additionalInfo = modal.querySelector('#additionalInfo');

            processAuthentication();
            attachCloseButton();
        }
    }

    /*
        Displays a login form to the user

        @function processAuthentication
    */
    function processAuthentication() {
        additionalInfo.style.display = 'none';

        const authModal = new AuthModal(form);
        authModal.config = '';
        authModal.render();

        modal.querySelector('#emailID').focus();

        for (const event of authEvents) {
            modal.querySelector(event.id).addEventListener(event.type, event.func);
        }

        currentType = MODAL_WINDOW_TYPES.authentification;
        modal.classList.add('open');
    }

    function closeModal() {
        isClosing = true;
        modal.classList.remove('open');
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.remove('hide');
            isClosing = false;
            divForModal.remove();
        }, ANIMATION_SPEED);

        detachCloseButton();

        let deleteEvents = [];
        switch(currentType) {
            case MODAL_WINDOW_TYPES.authentification:
                deleteEvents = authEvents;
                break;
            case MODAL_WINDOW_TYPES.recovery:
                deleteEvents = recEvents;
                break;
            case MODAL_WINDOW_TYPES.registration:
                deleteEvents = regEvents;
        }

        for (const event of deleteEvents) {
            modal.querySelector(event.id).remove(event.type, event.func);
        }

        currentType = MODAL_WINDOW_TYPES.authentification;
    }

    function attachCloseButton() {
        modal.querySelector('.closeBtn').addEventListener('click', closeModal);
        document.addEventListener('keyup', handleKey);
        modal.addEventListener('click', handleOutside);
    }

    function detachCloseButton() {
        modal.querySelector('.closeBtn').removeEventListener('click', closeModal);
        document.removeEventListener('keyup', handleKey);
        modal.removeEventListener('click', handleOutside);
    }

    /*
        blocks the button if at least one field is empty

        @function blockButton
    */
    function blockButton(idSelector) {
        const btn = modal.querySelector(idSelector);
        btn.removeAttribute('disabled');
        btn.style.opacity = '100';
    }

    /*
        unlocks the button if all fields are filled

        @function unblockButton
    */
    function unblockButton(idSelector) {
        const btn = modal.querySelector(idSelector);
        btn.setAttribute('disabled', true);
        btn.style.opacity = '.5';
    }

    function handleKey(event) {
        if (event.key === 'Escape') {
            closeModal();
        } else {
            const email = modal.querySelector('#emailID');

            if (currentType === MODAL_WINDOW_TYPES.authentification) {
                const password = modal.querySelector('#passwordID');

                if (event.target === email || event.target === password) {
                    if (email.value !== '' && password.value !== '') {
                        blockButton('#submitAuth');
                    } else {
                        unblockButton('#submitAuth');
                    }
                }
            } else if (currentType === MODAL_WINDOW_TYPES.recovery) {
                if (event.target === email) {
                    if (email.value !== '') {
                        blockButton('#submitRec');
                    } else {
                        unblockButton('#submitRec');
                    }
                }
            } else if (currentType === MODAL_WINDOW_TYPES.registration) {
                const password = modal.querySelector('#passwordID');
                const repeatedPassword = modal.querySelector('#repeatedPasswordID');

                if (event.target === email || event.target === password || event.target === repeatedPassword) {
                    if (email.value !== '' && password.value !== '' && repeatedPassword.value !== '') {
                        blockButton('#submitReg');
                    } else {
                        unblockButton('#submitReg');
                    }
                }
            }
        }
    }

    function handleOutside(event) {
        if (event.target === modal.querySelector('.modalOverlay')) {
            closeModal();
        }
    }

    function handleCheckbox(event) {
        const password = modal.querySelector('#passwordID');

        if (event.target.checked) {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    /*
        displays an error or success message to the user

        @function showAdditionalMessage

        @param {string} msg - output message

        @param {string} type - message type(success or error)
    */
    function showAdditionalMessage(msg, type) {
        additionalInfo.style.display = '';
        additionalInfo.textContent = msg;
        additionalInfo.removeAttribute('hide');
        additionalInfo.style.color = type === TYPE_MESSAGE.error ? 'red' : 'green';
    }

    function onChangeUserInput() {
        additionalInfo.style.display = 'none';
    }

    function submitAuthForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');
        const password = modal.querySelector('#passwordID');

        if (validateEmail(email.value)) {
            ajax({
                url: urlForRequest.signin,
                body: JSON.stringify({ email: email.value, password: password.value }),
                callback: (data) => {
                    switch (data.status) {
                        case 200:
                            headerObject.renderUserProfile();
                            closeModal();
                            break;
                        case 403:
                            showAdditionalMessage(messagesForUsers.error.serverError, TYPE_MESSAGE.error);
                            break;
                        case 400:
                        case 404:
                            showAdditionalMessage(messagesForUsers.error.wrongData, TYPE_MESSAGE.error);
                            break;
                        case 500:
                            showAdditionalMessage(messagesForUsers.error.serverError, TYPE_MESSAGE.error);
                    }
                }
            });
        } else {
            showAdditionalMessage(messagesForUsers.error.email, TYPE_MESSAGE.error);
        }
    }

    /*
        Displays a recovery form to the user

        @function processRecovery
    */
    function processRecovery() {
        for (const event of authEvents) {
            modal.querySelector(event.id).remove(event.type, event.func);
        }
        additionalInfo.style.display = 'none';

        const recModal = new RecModal(form);
        recModal.config = '';
        recModal.render();
        modal.querySelector('h3').innerText = 'Введите адрес электронной почты';

        for (const event of recEvents) {
            modal.querySelector(event.id).addEventListener(event.type, event.func);
        }

        currentType = MODAL_WINDOW_TYPES.recovery;
    }

    function submitRecForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');

        if (validateEmail(email.value)) {
            // request
        } else {
            showAdditionalMessage(messagesForUsers.error.email, TYPE_MESSAGE.error);
        }
    }

    /*
        Displays a registration form to the user

        @function processRegistration
    */
    function processRegistration() {
        for (const event of authEvents) {
            modal.querySelector(event.id).remove(event.type, event.func);
        }
        additionalInfo.style.display = 'none';

        currentType = MODAL_WINDOW_TYPES.registration;

        const regModal = new RegModal(form);
        regModal.config = '';
        regModal.render();
        modal.querySelector('h3').innerText = 'Введите свои данные';

        for (const event of regEvents) {
            modal.querySelector(event.id).addEventListener(event.type, event.func);
        }
    }

    function submitRegForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');
        const password = modal.querySelector('#passwordID');
        const repeatedPassword = modal.querySelector('#repeatedPasswordID');

        if (password.value !== repeatedPassword.value) {
            showAdditionalMessage(messagesForUsers.error.password, TYPE_MESSAGE.error);
        } else if (!validateEmail(email.value)) {
            showAdditionalMessage(messagesForUsers.error.email, TYPE_MESSAGE.error);
        } else {
            ajax({
                url: urlForRequest.signup,
                body: JSON.stringify({ email: email.value, password: password.value }),
                callback: (data) => {
                    switch (data.status) {
                        case 201:
                            showAdditionalMessage(messagesForUsers.success.registraion, TYPE_MESSAGE.success);

                            for (const event of regEvents) {
                                modal.querySelector(event.id).remove(event.type, event.func);
                            }

                            setTimeout(() => {
                                processAuthentication();
                            }, 1000);
                            break;
                        case 403:
                            showAdditionalMessage(messagesForUsers.error.serverError, TYPE_MESSAGE.error);
                            break;
                        case 400:
                        case 404:
                            showAdditionalMessage(messagesForUsers.error.wrongData, TYPE_MESSAGE.error);
                            break;
                        case 409:
                            showAdditionalMessage(messagesForUsers.error.userExist, TYPE_MESSAGE.error);
                            break;
                        case 500:
                            showAdditionalMessage(messagesForUsers.error.serverError, TYPE_MESSAGE.error);
                    }
                }
            });
        }
    }

    return {
        open() {
            openModal();
        }
    };
})();
