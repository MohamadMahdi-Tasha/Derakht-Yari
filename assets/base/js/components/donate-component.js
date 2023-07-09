// Creating Custom Element Of Donate
class DonateComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <div class="d-lg-flex donate-section shadow-lg">
                <a href="#" class="bg-white text-decoration-none d-flex align-self-center justify-content-center donate-item"><span class="fw-black text-center text-nowrap text-theme">حمایت مالی</span></a>
                <a href="#" class="bg-theme text-decoration-none d-flex align-self-center justify-content-center donate-item"><span class="fw-black text-center text-nowrap text-white">حمایت سازمانی</span></a>
            </div>
        `
    }
}

// Defining Custom Element
customElements.define('donate-component', DonateComponent);