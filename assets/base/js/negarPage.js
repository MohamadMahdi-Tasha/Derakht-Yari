// Variables
const negarItems = document.querySelectorAll('.negar-item');
const middleHeaderImg = document.getElementById('middle-header-img');

// Adding Event Listener Of Load To Window That ..
window.addEventListener('load', () => {
    // Variables
    const firstNegarItem = negarItems[0];
    const dataURLFirstNegarItem = firstNegarItem.getAttribute('data-url');

    // Setting Src Attribute Of Img In Header Of Middle Section To Value Of 'data-url' Attribute Of First Negar Item
    middleHeaderImg.src = dataURLFirstNegarItem;

    // Adding Class Of 'active' to First Negar Item
    firstNegarItem.classList.add('active');
})

// Adding Event Listener Of Click To Each Nagar Item That ..
negarItems.forEach((item => {
    item.addEventListener('click', () => {
        // Variables
        const activeNegarItem = document.querySelector('.negar-item.active');
        const dataURLClickedElement = item.getAttribute('data-url');

        // Adding Class Of 'active' to Clicked Item
        item.classList.add('active');

        // Removing Class Of 'active' from Active Negar Item
        activeNegarItem.classList.remove('active');

        // Setting Src Attribute Of Img In Header Of Middle Section To Value Of 'data-url' Attribute Of Clicked Element
        middleHeaderImg.src = dataURLClickedElement;

        // If Width Of Browser Is Less Or Equal To 991 (px) Scroll To Top Of Page
        if (window.innerWidth <= 991) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    })
}))