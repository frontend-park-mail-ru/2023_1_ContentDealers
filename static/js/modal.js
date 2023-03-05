import { AuthModal } from "../components/authModal/authModal.js";
import { RecModal } from "../components/recoveryModal/recModal.js";
import { RegModal } from "../components/registrationModal/regModal.js";
import { ModalWindow } from '../components/modalWindow/modalWindow.js';
import { validateEmail } from './verification.js';
import { ajax } from "./ajax.js";

import { headerObject } from "./index.js";

export const modalWindow = (function createModal() {
    const authEvents = [
        {
            id: '#passwordCheckbox',
            func: handleCheckbox
        },
        {
            id: '#submitAuth',
            func: submitAuthForm
        },
        {
            id: '#recoveryID',
            func: processRecovery
        },
        {
            id: '#registrationID',
            func: processRegistration
        },
    ];

    const recEvents = [
        {
            id: '#submitRec',
            func: submitRecForm
        },
    ];

    const regEvents = [
        {
            id: "#submitReg",
            func: submitRegForm
        }
    ];
    
    const errors = {
        email: 'email введен в неверном формате',
        password: 'пароли не совпадают',
        wrongData: 'введены неверные данные',
        userExist: 'пользователь с такими данными уже существует',
    };

    const urlForRequest = {
        signin: 'http://89.208.199.170/api/signin',
        signup: 'http://89.208.199.170/api/signup',
    }

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
                header: 'Войдите или зарегистрируйтесь',
            };
            modalWindow.render();

            modal = divForModal.firstElementChild;
            form = modal.querySelector('form');
            additionalInfo = modal.querySelector('#additionalInfo');

            processAuthentication();
            attachCloseButton();
        }
    }

    function processAuthentication() {
        additionalInfo.style.display = 'none';

        const authModal = new AuthModal(form);
        authModal.config = '';
        authModal.render();

        modal.querySelector('#emailID').focus();
        additionalInfo.style.display = 'none';

        for (const event of authEvents) {
            modal.querySelector(event.id).addEventListener('click', event.func);
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
            modal.querySelector(event.id).remove('click', event.func);
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

    function handleKey(event) {
        if (event.key === 'Escape') {
            closeModal();
        } else {
            const email = modal.querySelector('#emailID');
            let btn = null;

            if (currentType === MODAL_WINDOW_TYPES.authentification) {
                const password = modal.querySelector('#passwordID');

                if (event.target === email || event.target === password) {
                    btn = modal.querySelector('#submitAuth');
                    if (email.value !== '' && password.value !== '') {
                        btn.removeAttribute('disabled');
                        btn.style.opacity = '100';
                    } else {
                        btn.setAttribute('disabled', true);
                        btn.style.opacity = '.5'
                    }
                }
            } else if (currentType === MODAL_WINDOW_TYPES.recovery) {
                if (event.target === email) {
                    btn = modal.querySelector('#submitRec');
                    if (email.value !== '') {
                        btn.removeAttribute('disabled');
                        btn.style.opacity = '100';
                    } else {
                        btn.setAttribute('disabled', true);
                        btn.style.opacity = '.5';
                    }
                }
            } else if (currentType === MODAL_WINDOW_TYPES.registration) {
                const password = modal.querySelector('#passwordID');
                const repeatedPassword = modal.querySelector('#repeatedPasswordID');
                btn = modal.querySelector('#submitReg');

                if (event.target === email || event.target === password || event.target === repeatedPassword) {
                    if (email.value !== '' && password.value !== '' && repeatedPassword.value !== '') {
                        btn.removeAttribute('disabled');
                        btn.style.opacity = '100';
                    } else {
                        btn.setAttribute('disabled', true);
                        btn.style.opacity = '.5';
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

    function showError(msg) {
        additionalInfo.style.display = '';
        additionalInfo.textContent = msg;
        additionalInfo.removeAttribute('hide');
        additionalInfo.style.color = 'red';
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
                            headerObject.config.isAuth = true;
                            headerObject.renderUserProfile();
                            closeModal();
                            break;
                        case 403:
                            console.log('Request with credentionals');
                            break;
                        case 400:
                        case 404:
                            showError(errors.wrongData);
                            break;
                        case 500:
                            console.log('Server error');
                    }
                }
            })
        } else {
            showError(errors.email);
        }
        
    }

    function processRecovery() {
        for (const event of authEvents) {
            modal.querySelector(event.id).remove('click', event.func);
        }
        additionalInfo.style.display = 'none';

        const recModal = new RecModal(form);
        recModal.config = '';
        recModal.render();
        modal.querySelector('h2').innerText = 'восстановление пароля';
        modal.querySelector('h3').innerText = 'Введите адрес электронной почты';

        for (const event of recEvents) {
            modal.querySelector(event.id).addEventListener('click', event.func);
        }

        currentType = MODAL_WINDOW_TYPES.recovery;
    }

    function submitRecForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');

        if (validateEmail(email.value)) {
            // request
        } else {
            showError(errors.email);
        }
    }

    function processRegistration() {
        for (const event of authEvents) {
            modal.querySelector(event.id).remove('click', event.func);
        }
        additionalInfo.style.display = 'none';

        currentType = MODAL_WINDOW_TYPES.registration;

        const regModal = new RegModal(form);
        regModal.config = '';
        regModal.render();
        modal.querySelector('h2').innerText = 'Регистрация';
        modal.querySelector('h3').innerText = 'Введите свои данные';

        for (const event of regEvents) {
            modal.querySelector(event.id).addEventListener('click', event.func);
        }
    }

    function submitRegForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');
        const password = modal.querySelector('#passwordID');
        const repeatedPassword = modal.querySelector('#repeatedPasswordID');

        if (password.value !== repeatedPassword.value) {
            showError(errors.password);
        } else if (!validateEmail(email.value)) {
            showError(errors.email);
        } else {
            ajax({
                url: urlForRequest.signup,
                body: JSON.stringify({ email: email.value, password: password.value }),
                callback: (data) => {
                    switch (data.status) {
                        case 201:
                            additionalInfo.style.display = '';
                            additionalInfo.textContent = 'успешный вход';
                            additionalInfo.removeAttribute('hide');
                            additionalInfo.style.color = 'green';

                            for (const event of regEvents) {
                                modal.querySelector(event.id).remove('click', event.func);
                            }

                            setTimeout(() => {
                                processAuthentication();
                            }, 1000);
                            break;
                        case 403:
                            console.log('Request with credentials');
                            break;
                        case 400:
                        case 404:
                            showError(errors.email);
                            break;
                        case 500:
                            console.log('Server');
                    }
                }
            })
        }
    }

    return {
        open() {
            openModal();
        }
    }
})();
