// Variables
const loader = document.getElementById('loader');
const swup = new Swup();

// Adding Event Listener Of Load On Window Which Listens To Load Of Full Page Then Closes Loader Modal
// window.addEventListener('load', () => loader.setAttribute('data-opened', 'false'))
setTimeout(() => loader.setAttribute('data-opened', 'false'), 3000)

document.querySelectorAll('a').forEach(item => {
    item.setAttribute('href',`/${item.href}`)
})