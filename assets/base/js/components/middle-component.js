// Creating Custom Element Of Middle Section
class MiddleComponent extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <section class="bg-theme middle-section">
                <header class="middle-header position-relative">
                    <img class="position-absolute top-0 w-100 h-100 object-fit-cover" src="../../../../assets/base/img/img-middle-top.jpg" alt="پویش ملی درخت یاری">
                    <a href="tel:*780*6070#" class="middle-top-holder z-3 text-decoration-none w-100 justify-content-lg-between justify-content-center overflow-hidden h-100 d-flex">
                        <div class="middle-top-bg position-absolute w-100 h-100 top-0"></div>
                        <svg class="align-self-start middle-arrow-icon z-3 d-lg-block d-none" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H89V89.5" stroke="white" stroke-width="2"/>
                        </svg>
                        <h3 class="align-self-center text-white middle-title text-center z-3 m-0">
                            <span class="fw-light">حمایت مالی از</span>
                            <br>
                            <span class="fw-normal">پویش ملی</span>
                            <br>
                            <span class="fw-black">درخت یاری</span>
                            <br>
                            <span class="fw-normal">کد دستوری</span>
                            <br>
                            <span class="fw-black" dir="ltr">*780*6070#</span>
                        </h3>
                        <span class="align-self-end text-white middle-cta fw-light z-3 d-lg-block d-none">کلیک کنید</span>
                       </a>
                </header>
                <main class="middle-main d-flex flex-lg-row flex-column-reverse align-items-start">
                    <div class="h-100 overflow-hidden middle-paragraph-title-holder">
                        <div class="middle-title-holder">
                            <h1 class="text-white middle-main-title mb-0">
                                <span class="fw-black">چکیده پویش</span>
                                <br>
                                <span class="fw-light">به نگاه کلی</span>
                            </h1>
                        </div>
                        <div dir="ltr" class="overflow-auto middle-paragraph-holder">
                            <p dir="rtl" class="middle-paragraph text-white p-0 m-0 fw-light">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                    </div>
                    <ul class="list-unstyled p-0 m-0 d-flex flex-lg-column flex-row justify-content-lg-start justify-content-between middle-socials">
                        <li><a href="#"><img class="middle-social-icon" src="../../../../assets/base/img/icons/img-whatsapp.png" alt="واتساپ"></a></li>
                        <li><a href="#"><img class="middle-social-icon" src="../../../../assets/base/img/icons/img-bale.png" alt="بله"></a></li>
                        <li><a href="#"><img class="middle-social-icon" src="../../../../assets/base/img/icons/img-sorush.png" alt="سروش"></a></li>
                    </ul>
                </main>
            </section>
        `
    }
}

// Defining Custom Element
customElements.define('middle-component', MiddleComponent);