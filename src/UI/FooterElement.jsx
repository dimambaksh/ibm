import "./ui.scss";

const FooterElement = () => {

    return(
        <section className="generalfooter">
            <article className="generalfooter__article">
            <div class="generalfooter__article__container">
                    <div class="generalfooter__article__container-header">
                        <h3>Contact</h3>
                    </div>
                    <div class="generalfooter__article__container__content">
                        <div class="generalfooter__article__container__content__subcontent">
                            <h4 class="generalfooter__article__container__content__subcontent-header">EMAIL</h4>
                            <p class="generalfooter__article__container__content__subcontent-detail">info@plantazon.com</p>
                        </div>
                    </div>
                </div>
                <div class="generalfooter__article__container">
                    <div class="generalfooter__article__container-header">
                        <h3>Hours</h3>
                    </div>
                    <div class="generalfooter__article__container__content">
                        <div class="generalfooter__article__container__content__subcontent">
                            <h4 class="generalfooter__article__container__content__subcontent-header">MONDAY - FRIDAY</h4>
                            <p class="generalfooter__article__container__content__subcontent-detail">9:00 AM - 5:00 PM</p>
                        </div>
                        <div class="generalfooter__article__container__content__subcontent">
                            <h4 class="generalfooter__article__container__content__subcontent-header">SATURDAY</h4>
                            <p class="generalfooter__article__container__content__subcontent-detail">10:00 AM - 4:00 PM</p>
                        </div>
                        <div class="generalfooter__article__container__content__subcontent">
                            <h4 class="generalfooter__article__container__content__subcontent-header">SUNDAY</h4>
                            <p class="generalfooter__article__container__content__subcontent-detail">Closed</p>
                        </div>
                    </div>
                </div>
                <div class="generalfooter__article__container">
                    <div class="generalfooter__article__container-header">
                        <h3>Social</h3>
                    </div>
                    <div class="generalfooter__article__container__content">
                        <div class="generalfooter__article__container__content__subcontent generalfooter__article__container__content__social">
                            <a href="https://www.instagram.com" target="_blank"><img src="./icon-instagram.png"/></a>
                        </div>
                        <div class="generalfooter__article__container__content__subcontent generalfooter__article__container__content__social">
                            <a href="https://www.facebook.com" target="_blank"><img src="./icon-facebook.png"/></a>
                        </div>
                    </div>
                </div>
            </article>
            <article className="generalfooter__article">
                <div class="generalfooter__article__container">
                    <h3>&copy; Duane Imambaksh 2024. All Rights Reserved.</h3>
                </div>
            </article>
        </section>
    )
}

export default FooterElement;