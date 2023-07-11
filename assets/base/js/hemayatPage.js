// Variables
const form = document.getElementById('info-form');
const signedText = document.getElementById('signed-text');

// Adding Event Listener Of Submit To Form Which Removes Form And Removes Class Of 'd-none' From Content Of SignedText
form.addEventListener('submit', () => {
    form.remove();
    signedText.classList.remove('d-none');
})