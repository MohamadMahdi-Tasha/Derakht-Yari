// Creating Custom Element Of Footer In Main Section
class MainFooterComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <footer class="d-flex justify-content-lg-end justify-content-center">
                <span class="copy-text fw-normal text-dark-grey">تمامی حقوق  متعلق به پویش درخت یاری میباشد.</span>
            </footer>
        `
    }
}

// Defining Custom Element
customElements.define('main-footer-component', MainFooterComponent);