console.log('In mainVideo.js')

const href = document.querySelector('[data-section="/about"]');

console.log(href)

function goToPage(configSection) {
    const el = document.querySelector(`[data-section="${configSection.key}"]`)
    // if (el.classList.contains('active')) {
    //     return;
    // }

    contentElement.innerHTML = '';

    // document.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    configSection.render(contentElement);
}

href.addEventListener('click', (e) => {
    if (e.target instanceof HTMLAnchorElement) {
        e.preventDefault();
        const {section} = e.target.dataset;

        goToPage(config[section])
    }
})