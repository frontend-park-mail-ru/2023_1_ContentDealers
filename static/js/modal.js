import { AuthModal } from "../../components/authModal/authModal.js";
import { RecModal } from "../../components/recoveryModal/recModal.js";
import { RegModal } from "../../components/registrationModal/regModal.js";
import { ModalWindow } from '../../components/modalWindow/modalWindow.js';
import { validateEmail } from './verification.js';

const modalWindow = (function createModal() {
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
    
    const inputErrors = {
        email: 'email введен в неверном формате',
        password: 'пароли не совпадают'
    };

    const MODAL_WINDOW_TYPES = {
        authentification: 'auth',
        registration: 'reg',
        recovery: 'rec',
    };

    let currentType = MODAL_WINDOW_TYPES.authentification;

    const divForModal = document.createElement('div');

    document.body.appendChild(divForModal);  

    const modalWindow = new ModalWindow(divForModal);
    modalWindow.config = {
        header: 'Войдите или зарегистрируйтесь',
    };
    modalWindow.render();

    const modal = divForModal.firstElementChild;
    const form = modal.querySelector('form');

    const ANIMATION_SPEED = 200;
    let isClosing = false;

    function openModal() {
        if (!isClosing) {
            const authModal = new AuthModal(form);
            authModal.config = '';
            authModal.render();

            modal.classList.add('open');
            modal.querySelector('#emailID').focus();
            modal.querySelector('#inputError').style.display = 'none';

            attachCloseButton();
            
            for (const event of authEvents) {
                modal.querySelector(event.id).addEventListener('click', event.func);
            }
        }
    }

    function closeModal() {
        isClosing = true;
        modal.classList.remove('open');
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.remove('hide');
            isClosing = false;
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

            if (currentType === MODAL_WINDOW_TYPES.authentification) {
                const password = modal.querySelector('#passwordID');

                if (event.target === email || event.target === password) {
                    if (email.value !== '' && password.value !== '') {
                        modal.querySelector('#submitAuth').removeAttribute('disabled');
                    } else {
                        modal.querySelector('#submitAuth').setAttribute('disabled', true);
                    }
                }
            } else if (currentType === MODAL_WINDOW_TYPES.recovery) {
                if (event.target === email) {
                    if (email.value !== '') {
                        modal.querySelector('#submitRec').removeAttribute('disabled');
                    } else {
                        modal.querySelector('#submitRec').setAttribute('disabled', true);
                    }
                }
            } else if (currentType === MODAL_WINDOW_TYPES.registration) {
                const password = modal.querySelector('#passwordID');
                const repeatedPassword = modal.querySelector('#repeatedPasswordID');

                if (event.target === email || event.target === password || event.target === repeatedPassword) {
                    if (email.value !== '' && password.value !== '' && repeatedPassword.value !== '') {
                        modal.querySelector('#submitReg').removeAttribute('disabled');
                    } else {
                        modal.querySelector('#submitReg').setAttribute('disabled', true);
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
        const errorElement = modal.querySelector('#inputError');
        errorElement.style.display = '';
        errorElement.textContent = msg;
        errorElement.removeAttribute('hide');
        errorElement.style.color = 'red';
    }


    function submitAuthForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');
        const password = modal.querySelector('#passwordID');

        if (validateEmail(email.value)) {
            // request
        } else {
            showError(inputErrors.email);
        }
        
    }

    function processRecovery() {
        for (const event of authEvents) {
            modal.querySelector(event.id).remove('click', event.func);
        }
        modal.querySelector('#inputError').style.display = 'none';

        currentType = MODAL_WINDOW_TYPES.recovery;

        const recModal = new RecModal(form);
        recModal.config = '';
        recModal.render();
        modal.querySelector('h2').innerText = 'восстановление пароля';
        modal.querySelector('h3').innerText = 'Введите адрес электронной почты';

        for (const event of recEvents) {
            modal.querySelector(event.id).addEventListener('click', event.func);
        }
    }

    function submitRecForm(event) {
        event.preventDefault();

        const email = modal.querySelector('#emailID');

        if (validateEmail(email.value)) {
            // request
        } else {
            showError(inputErrors.email);
        }
    }

    function processRegistration() {
        for (const event of authEvents) {
            modal.querySelector(event.id).remove('click', event.func);
        }
        modal.querySelector('#inputError').style.display = 'none';

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
            showError(inputErrors.password);
        } else if (!validateEmail(email.value)) {
            showError(inputErrors.email);
        } else {
            // request
        }
    }

    return {
        open() {
            openModal();
        }
    }
})();

export { modalWindow };
