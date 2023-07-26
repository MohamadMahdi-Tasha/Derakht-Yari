// Variables
const emebedElement = document.getElementById('embed-element');
const mainLeftImages = document.querySelectorAll('.left-pdf-img');

// Adding Event Listener Of Load To Window That ..
window.addEventListener('load', () => {
    // Variables
    const firstImg = mainLeftImages[0];
    const dataURLFirstImage = firstImg.getAttribute('data-url');

    // Setting Src Attribute Of Embed Element To Value Of 'data-url' Attribute Of First Image
    emebedElement.src = dataURLFirstImage;
})

// Adding Event Listener Of Click To Each Image That ..
mainLeftImages.forEach((item => {
    item.addEventListener('click', () => {
        // Variables
        const dataURLItem = item.getAttribute('data-url');
        const activeImage = document.querySelector('.left-pdf-img.active');

        // Setting Src Attribute Of Embed Element To Value Of 'data-url' Attribute Of Clicked Element
        emebedElement.src = dataURLItem;

        // Removing Class Of 'active' From Active Element
        activeImage.classList.remove('active');

        // Adding Class Of 'active' To CLicked Element
        item.classList.add('active');
    })
}))