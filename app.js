import { modalWindow } from './static/js/modal.js'

const toAuthBtn = document.getElementById('authBtn');

const myModal = modalWindow;

toAuthBtn.addEventListener('click', modalWindow.open);
