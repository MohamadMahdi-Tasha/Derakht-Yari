// Variables
const loader = document.getElementById("loader");
const swup = new Swup();
const mobileNavToggler = document.getElementById("mobile-nav-toggler");
const nav = document.getElementById("right-side");
const rightSideDarkBg = document.getElementById("right-side-dark-bg");
const navItems = document.querySelectorAll(".nav-link");
const paragraphWithCollapse = document.querySelectorAll(
  ".dv-paragraph-with-collapse"
);

// Adding Event Listener Of Load On Window Which Listens To Load Of Full Page Then Closes Loader Modal
// window.addEventListener('load', () => loader.setAttribute('data-opened', 'false'))
setTimeout(() => loader.setAttribute("data-opened", "false"), 3000);

// A Function That Toggles Classes To Body And Nav
function showOrHideNav() {
  nav.classList.toggle("show");
  document.body.classList.toggle("overflow-hidden");
}

// Calling 'showOrHideNav' Function On Dark Bg Of Mobile Nav And Navs Toggle And Key Of Escape On KeyBoard
mobileNavToggler.addEventListener("click", showOrHideNav);
rightSideDarkBg.addEventListener("click", showOrHideNav);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    showOrHideNav();
  }
});

// Adding EventListener On Each Nav Link That Listenes To Click And Removes Attribute Of aria-current="page"
// From A Nav Link Which Had It And Then Sets It To Clicked Item
navItems.forEach((item) =>
  item.addEventListener("click", () => {
    document
      .querySelector('.nav-link[aria-current="page"]')
      .removeAttribute("aria-current");
    item.setAttribute("aria-current", "page");
  })
);

// If Lenght Of Charatcters Of Paragraph With Collapses Is More Than 200 Then Slices The Content
// From 0 To 200 And Then Adds '[...]' Sting To End Of It
paragraphWithCollapse.forEach((item) => {
  if (item.textContent.length > 200) {
    item.textContent = `${item.textContent.slice(0, 200)}[...]`;
  }
});
