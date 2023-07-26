// Variables
const citysInIR = document.querySelectorAll('#ir > path:not(#ir-bg)');
const middleHeaderImg = document.getElementById('middle-header-img');

// A Function That Takes Id Of Element And Max Number Of It That ..
function countUp(itemId, maxNumber) {
    // Adding Event Listener Of Load To Window That ..
    window.addEventListener('load', () => {
        // Variables
        const item = document.getElementById(itemId);
        let numberValueOfItemContent = Number(item.textContent);

        // Ever 1 ms ...
        setInterval(() => {
            // If Showing Number Is Less Than 1000
            if (numberValueOfItemContent < 1000) {
                // If Showing Number Is Less Than Max Number (Parameter) Add 1 To It
                if (numberValueOfItemContent < maxNumber) {
                    numberValueOfItemContent ++;
                }

                // Show Number
                item.textContent = numberValueOfItemContent.toLocaleString();
            } else {
                // If Showing Number Is More Than 1000 Show '1,000+'
                item.textContent = '1,000+';
            }
        }, 1)
    })
}

// Calling 'countUp' Function to Number Titles
countUp('tree-count', 141);
countUp('city-count', 31)
countUp('housholds-count', 2000)
countUp('hektar-count', 1000000)
countUp('jahad-count', 31)
countUp('people-count', 126)

// Adding Event Listener Of Click To Each Citys In Iran (SVG) That ..
citysInIR.forEach(item => {
    item.addEventListener('click', () => {
        // Variables
        const dataImageURL = item.getAttribute('data-img-url');

        // Setting SRC of Middle Header To Value Of 'data-img-url' Attribute Of Clicked Item.
        middleHeaderImg.src = dataImageURL;

        // If Width Of Browser Is Less Or Equal To 991 (px) Scroll To Top Of Page
        if (window.innerWidth <= 991) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    })
})