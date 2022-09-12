// Variables
const loader = document.getElementById('loader');

// Adding Event Listener Of Load On Window Which Listens To Load Of Full Page Then Closes Loader Modal
window.addEventListener('load', () => loader.setAttribute('data-opened', 'false'))