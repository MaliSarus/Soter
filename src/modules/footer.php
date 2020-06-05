</main>
<div class="modal">
    <div class="modal__block">
        <span class="modal-close"><img src="./assets/img/modal/close.svg" alt="Закрыть"></span>
        <form action="#" id="modal-form">
            <p>Enter Your Details</p>
            <div class="modal__wrapper request__user">
                <input type="text" name="order-name" id="order-name" required>
                <label for="order-name">First Name</label></div>
            <div class="modal__wrapper request__lastname">
                <input type="text" name="order-last-name" id="order-last-name" required>
                <label for="order-last-name">Last Name</label></div>
            <div class="modal__wrapper request__mail">
                <input type="e-mail" name="order-mail" id="order-mail" required>
                <label for="order-mail">E-mail</label></div>
            <div class="modal__wrapper request__company">
                <input type="Company name" name="order-company" id="order-company" required>
                <label for="order-company">Company name</label></div>
            <div class="modal__wrapper agree">
                <input type="checkbox" name="order-agree" id="order-agree" required>
                <label for="order-agree">I have read and agree to the <a
                            href="http://xyz.soteranalytics.com/home-page/terms-conditions/">terms</a> and <a
                            href="http://xyz.soteranalytics.com/home-page/privacy/">privacy policy</a> </label>
            </div>
            <button type="submit" class="button button_blue" id="modal-button">Buy soter</button>
        </form>
    </div>
</div>

<div class="change-currency">
    <div class="change-currency__block">
        <span class="change-currency-close"><img src="./assets/img/modal/close.svg" alt="Закрыть"></span>
        <form action="#" id="change-currency-form">
            <p> Choose Your Currency</p>
            <div class="order__subs-wrapper">
                <label for="change-currency-usd"><input type="radio"
                                                        id="change-currency-usd"
                                                        name="change-currency-curr"
                                                        checked
                                                        value="USD"
                                                        required><span></span><span
                            class="text">USD</span>
                </label>
                <label for="change-currency-gbp"><input type="radio"
                                                        id="change-currency-gbp"
                                                        name="change-currency-curr"
                                                        value="GBP"
                                                        required><span></span><span
                            class="text">GBP</span>
                </label>
                <label for="change-currency-aud"><input type="radio"
                                                        id="change-currency-aud"
                                                        name="change-currency-curr"
                                                        value="AUD"
                                                        required><span></span><span
                            class="text">AUD</span>
                </label>
            </div>
            <button type="submit" class="button button_blue" id="change-currency-button">Continue</button>
        </form>
    </div>
</div>

<div class="cookies">
    <div class="cookies__text">
        <p>
            If you continue browsing this website, you are accepting our cookies policy. To find
            out more about our cookies policy, <a href="#">click here.</a>
        </p>
    </div>
    <div class="cookies__button">
        <button class="cookies__submit button button_blue">Agree</button>
    </div>
</div>

<footer class="footer">
    <div class="container">
        <div class="row footer__top">
            <div class="col-12 col-lg-3">
                <div class="footer__left">
                    <div class="footer__logo">
                        <img src="./assets/img/interface/logo.svg" alt="Логитип">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="footer__nav">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Try Soter</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Sales Terms and Conditions</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="footer__contacts">
                    <p>
                        Soter Analytics LTD
                    </p>
                    <p class="footer__address">Office 5, 27 Parsons Green Ln
                        ​London, SW6 4HH</p>
                    <a class="footer__mail" href="mailto:example@mail.com"><img src="./assets/img/footer/mail-icon.svg"
                                                                                alt="Иконка почты">example@mail.com</a>
                    <div class="footer__socials">
                        <a href="#" class="footer__socials-item">
                            <img src="./assets/img/footer/in-icon.svg" alt="Иконка соцсети">
                        </a>
                        <a href="#" class="footer__socials-item">
                            <img src="./assets/img/footer/fb-icon.svg" alt="Иконка соцсети">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row footer__bottom">
            <div class="col-12 col-lg-6">
                <div class="footer__bottom-success">
                    <img src="./assets/img/footer/success.svg" alt="Иконка">
                    Thank you for subscribing!
                </div>
                <p>Subscribe to our newsletter</p>
                <form action="#">
                    <div class="request__input-wrapper request__mail">
                        <input type="email" id="footer-mail" name="email" required>
                        <label for="footer-mail">EMAIL</label>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center">
                <p class="footer__copy">All right reserved. 2020</p>
            </div>
        </div>
    </div>
</footer>
<script src="./assets/js/jquery-3.4.1.min.js"></script>
<script src="./assets/js/swiper.min.js"></script>
<script src="./assets/js/jquery.inputmask.min.js"></script>
<script src="./assets/js/script.js"></script>
</body>
</html>
