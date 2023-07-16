// Variables
const mobileNavOpener = document.getElementById('mobile-nav-opener');
const mobileNavCloser = document.getElementById('mobile-nav-close-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavBg = document.getElementById('mobile-nav-bg');

// A Function To Open Mobile Nav That...
function openMobileNav() {
    // Setting Value Of 'data-opened' attribute of mobile nav and its bg to true
    mobileNav.setAttribute('data-opened', 'true');
    mobileNavBg.setAttribute('data-opened', 'true');

    // Adding class of 'overflow-hidden' to Body Element
    document.body.classList.add('overflow-hidden');
}

function closeMobileNav() {
    // Setting Value Of 'data-opened' attribute of mobile nav and its bg to false
    mobileNav.setAttribute('data-opened', 'false');
    mobileNavBg.setAttribute('data-opened', 'false');

    // removing class of 'overflow-hidden' from Body Element
    document.body.classList.remove('overflow-hidden');
}

// Adding Event Listeners Of Click Event To Open Or Close Mobile Nav
mobileNavBg.addEventListener('click', closeMobileNav);
mobileNavCloser.addEventListener('click', closeMobileNav);
mobileNavOpener.addEventListener('click', openMobileNav);