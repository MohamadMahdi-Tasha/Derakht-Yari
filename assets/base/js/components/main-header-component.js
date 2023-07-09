// Creating Custom Element Of Header In Main Section
class MainHeaderComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <header class="main-header d-flex align-items-center justify-content-between">
                <img class="main-header-logo" src="../../../../assets/base/img/img-logo-typo.png" alt="لوگو درخت یاری">
                <div class="d-lg-block d-none">
                    <h2 class="main-header-title text-center fw-bold text-nowrap text-emerald">تلاش برای کاشت ۱۵۰۰ نهال مثمر</h2>
                    <h3 class="main-header-subtitle mb-0 text-center fw-light text-nowrap text-emerald">
                        یاری مردم
                        <span class="main-header-subtitle-divider">|</span>
                        لبخند طبیعت
                    </h3>
                </div>
                <a href="#"><button class="main-header-btn fw-black border-0 bg-emerald text-white" tabindex="-1">ورود/ثبت نام</button></a>
            </header>
        `
    }
}

// Defining Custom Element
customElements.define('main-header-component', MainHeaderComponent);