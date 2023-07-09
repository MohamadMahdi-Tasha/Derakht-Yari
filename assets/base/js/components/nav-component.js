// Creating Custom Element  Of Nav
class NavComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <nav class="d-flex p-lg-0 p-2 flex-lg-column flex-row justify-content-lg-start justify-content-center align-content-lg-start align-items-center">
                <a href="../../../../index.html" class="nav-logo-holder d-lg-flex d-none bg-grey justify-content-center align-items-center">
                    <img class="w-50" src="../../../../assets/base/img/img-logo.png" alt="لوگوی درخت یاری">
                </a>
                <a class="d-lg-none d-block" href="../../../../index.html">
                    <img width="125" src="../../../../assets/base/img/img-logo-typo.png" alt="لوگو درخت یاری">
                </a>
                <div class="bg-white d-lg-flex d-none align-items-center justify-content-center overflow-y-auto overflow-x-hidden nav-inner">
                    <ul class="d-flex align-items-center list-unstyled nav-links-holder p-0 m-0">
                        <li><a class="text-nowrap position-relative text-black nav-link" href="#">خانه</a></li>
                        <li><a class="text-nowrap position-relative text-black nav-link" href="#">درباره ما</a></li>
                        <li><a class="text-nowrap position-relative text-black nav-link" href="#">بلاگ</a></li>
                        <li><a class="text-nowrap position-relative text-black nav-link" href="#">اموزش</a></li>
                        <li><a class="text-nowrap position-relative text-black nav-link" href="#">تماس با ما</a></li>
                        <li><a class="text-nowrap position-relative text-black nav-link" href="#">گالری تصویر</a></li>
                    </ul>
                </div>
            </nav>
        `
    }
}

// Defining Custom Element
customElements.define('nav-component', NavComponent);