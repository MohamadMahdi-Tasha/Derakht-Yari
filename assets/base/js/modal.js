// Variables
const modal = document.getElementById('modal');
const modalBg = document.getElementById('modal-bg');
const modalClose = document.getElementById('modal-close');
const searchModalBtn = document.getElementById('search-modal-btn');

// A Function That Sets Value Of 'data-opened' Attribute To 'false' in modal and its bg
function closeModal() {
    modal.setAttribute('data-opened', 'false');
    modalBg.setAttribute('data-opened', 'false');
}

// A Function That Sets Value Of 'data-opened' Attribute To 'true' in modal and its bg
function openModal() {
    modal.setAttribute('data-opened', 'true');
    modalBg.setAttribute('data-opened', 'true');
}

// Calling Functions On Click Event Of Some Elements
searchModalBtn.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
modalBg.addEventListener('click', closeModal)