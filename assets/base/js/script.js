// Variables
const loader = document.getElementById('loader');
const swup = new Swup();
const mobileNavToggler = document.getElementById('mobile-nav-toggler');
const nav = document.getElementById('right-side');
const rightSideDarkBg = document.getElementById('right-side-dark-bg');

// Adding Event Listener Of Load On Window Which Listens To Load Of Full Page Then Closes Loader Modal
window.addEventListener('load', () => loader.setAttribute('data-opened', 'false'))

document.querySelectorAll('a').forEach(item => {
    item.setAttribute('href',`/${item.href}`)
})

function showOrHideNav() {
    nav.classList.toggle('show')
    document.body.classList.toggle('overflow-hidden');
}

mobileNavToggler.addEventListener('click',  showOrHideNav)
rightSideDarkBg.addEventListener('click', showOrHideNav)
window.addEventListener('keydown', (event) => {if (event.key === 'Escape') {showOrHideNav()}})