// Variables
const modal = document.getElementById('modal');
const modalBg = document.getElementById('modal-bg');
const modalClose = document.getElementById('modal-close');
const searchModalBtn = document.getElementById('search-modal-btn');

// A Function That Sets Value Of 'data-opened' Attribute To 'false' in modal and its bg And Removes Class Of 'overflow-hidden' from documents body
function closeModal() {
    modal.setAttribute('data-opened', 'false');
    modalBg.setAttribute('data-opened', 'false');
    document.body.classList.remove('overflow-hidden');
}

// A Function That Sets Value Of 'data-opened' Attribute To 'true' in modal and its bg And Adds Class Of 'overflow-hidden' To documents body
function openModal() {
    modal.setAttribute('data-opened', 'true');
    modalBg.setAttribute('data-opened', 'true');
    document.body.classList.add('overflow-hidden');
}

// Calling Functions On Click Event Of Some Elements
searchModalBtn.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
modalBg.addEventListener('click', closeModal)