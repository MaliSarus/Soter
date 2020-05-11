(function ($) { // <----- Начало обертки
    function isSet(element) {
        return element.length !== 0;
    }

    function validation(element) {
        if (element === '') {
            element.css({
                color: 'red'
            });
        }
    };

    function dropdownMobileMenuOn() {
        if ($(window).width() < 992) {
            $('#navbarNav > li').on('click', function (event) {
                event.preventDefault();
                var submenu = $(this).find('.sub-menu');
                var current = ($('.sub-menu').index(submenu));
                var active = $('.sub-menu').index($('.sub-menu.active'));
                if (isSet($('.sub-menu.active')) && active != current) {
                    $($('.sub-menu')[active]).fadeOut(250, function () {
                        $(this).removeClass('active').siblings('a').removeClass('opened');
                        submenu.fadeIn(250).addClass('active').siblings('a').addClass('opened');
                    });
                } else {
                    submenu.fadeToggle().toggleClass('active').siblings('a').toggleClass('opened');
                }
            })
        }
    }

    function hamburgerInit() {
        var hamburger = $('.hamburger');
        hamburger.css({
            outline: 'none'
        });
        hamburger.on('click', function () {
            $(this).toggleClass('is-active');
            $('body').toggleClass('hidden');
            if ($(this).hasClass('is-active') === false) {
                $('.sub-menu').removeClass('active').removeAttr('style');
            }
        });
    };

    function sliderButtonsHandler() {
        var btns = $('.nav-dot');
        var paginationWrapper = $('.pagination-wrapper');
        var bigDotContainer = $('.big-dot-container');
        var littleDot = $('.little-dot');

        btns.on('click', btnClick);

        function btnClick() {
            if ($(this).hasClass('little-dot--first')) {
                paginationWrapper.addClass('transition-prev');
            } else if ($(this).hasClass('little-dot--last')) {
                paginationWrapper.addClass('transition-next');
            }

            var timeout = setTimeout(cleanClasses, 500);
        }

        function cleanClasses() {
            if (paginationWrapper.hasClass('transition-next')) {
                paginationWrapper.removeClass('transition-next')
            } else if (paginationWrapper.hasClass('transition-prev')) {
                paginationWrapper.removeClass('transition-prev')
            }
        }
    };

    function sponsorsSliderInit() {
        var mySwiper = new Swiper('.sponsors__slider', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 0,
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true

            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                resize: function () {
                    if ($(window).width() >= 1200) {
                        this.destroy(false, true);
                        this.init();
                        mySwiperControl = document.querySelector('.sponsors__slider.swiper-container').swiper;
                    }
                },
                slideNextTransitionStart: function () {
                    var paginationWrapper = $('.pagination-wrapper');
                    paginationWrapper.addClass('transition-next');
                    setTimeout(function () {
                        paginationWrapper.removeClass('transition-next')
                    }, 500);
                },
                slidePrevTransitionStart: function () {
                    var paginationWrapper = $('.pagination-wrapper');
                    paginationWrapper.addClass('transition-prev');
                    setTimeout(function () {
                        paginationWrapper.removeClass('transition-prev')
                    }, 500);
                },
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    // spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    // spaceBetween: 40,

                },
                992: {
                    slidesPerView: 4,
                    // spaceBetween: 50,
                },
                1200: {
                    slidesPerView: 'auto',
                    // loopedSlides: 1,
                    // spaceBetween: 115,
                }
            }
        });
        var mySwiperControl = document.querySelector('.sponsors__slider.swiper-container').swiper
        setInterval(function () {
            mySwiperControl.update(true)
        }, 1000);
        var arrowPrev = $('.sponsors__head .arrow-prev');
        var arrowNext = $('.sponsors__head .arrow-next');
        arrowPrev.on('click', function () {
            mySwiperControl.slidePrev(400, true);
        });
        arrowNext.on('click', function () {
            mySwiperControl.slideNext(400, true);
        });
        var dots = $('.sponsors__content .little-dot');
        dots.on('click', function (event) {
            if ($('.little-dot--first').is(event.target)) {
                mySwiperControl.slidePrev(400, true);
            }
            if ($('.little-dot--last').is(event.target)) {
                mySwiperControl.slideNext(400, true);
            }
        })
    };

    function feedbackSliderInit() {
        var mySwiper = new Swiper('.feedback__slider', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 9,
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            on: {
                resize: function () {
                    if ($(window).width() >= 992) {
                        this.destroy(false, true);
                        $('.feedback__slider > .swiper-wrapper').css({
                            flexWrap: 'wrap'
                        })
                    } else {
                        this.init();
                    }
                },
                slideNextTransitionStart: function () {
                    var paginationWrapper = $('.pagination-wrapper');
                    paginationWrapper.addClass('transition-next');
                    setTimeout(function () {
                        paginationWrapper.removeClass('transition-next')
                    }, 500);
                },
                slidePrevTransitionStart: function () {
                    var paginationWrapper = $('.pagination-wrapper');
                    paginationWrapper.addClass('transition-prev');
                    setTimeout(function () {
                        paginationWrapper.removeClass('transition-prev')
                    }, 500);
                },
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    centeredSlides: false
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,

                },
            },
            navigation: {
                nextEl: '.little-dot--last',
                prevEl: '.little-dot--first',
            }
        });
    };

    function clientsSliderInit() {
        var mySwiper = new Swiper('.clients__slider', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 9,
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            on: {
                resize: function () {
                    if ($(window).width() >= 992) {
                        $('.clients > .swiper-wrapper').css({
                            flexWrap: 'wrap'
                        });
                        this.destroy(false, true);
                    } else {
                        $('.clients > .swiper-wrapper').removeAttr('style');
                        this.init();
                    }
                },
                slideNextTransitionStart: function () {
                    var paginationWrapper = $('.pagination-wrapper');
                    paginationWrapper.addClass('transition-next');
                    setTimeout(function () {
                        paginationWrapper.removeClass('transition-next')
                    }, 500);
                },
                slidePrevTransitionStart: function () {
                    var paginationWrapper = $('.pagination-wrapper');
                    paginationWrapper.addClass('transition-prev');
                    setTimeout(function () {
                        paginationWrapper.removeClass('transition-prev')
                    }, 500);
                },
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    centeredSlides: false
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,

                },
            },
            navigation: {
                nextEl: '.little-dot--last',
                prevEl: '.little-dot--first',
            },
        });
    }

    $(window).on('resize', function () {


        if (isSet($('.products'))) {
            if ($(window).width() < 992 && !(isSet($('.products .desktop')))) {
                $('.products__block').each(function () {
                    var image = $(this).find('.products__image');
                    var contentToPrepend = $(this).find('.products__content .button');
                    image.parent().addClass('desktop');
                    image.detach().insertBefore(contentToPrepend);
                });
            } else if ($(window).width() >= 992 && isSet($('.products .desktop'))) {
                $('.products__block').each(function () {
                    var desktopPlace = $(this).find('.desktop');
                    var image = $(this).find('.products__image');
                    image.detach().appendTo(desktopPlace);
                });
                $('.products .desktop').removeClass('desktop');
            }
        }
        if (isSet($('.successes'))) {
            if ($(window).width() < 992 && !(isSet($('.successes .desktop')))) {
                $('.successes__block').each(function () {
                    var video = $(this).find('.successes__video');
                    var contentToPrepend = $(this).find('.successes__content .button');
                    video.parent().addClass('desktop');
                    video.detach().insertBefore(contentToPrepend);
                });
            } else if ($(window).width() >= 992 && isSet($('.successes .desktop'))) {
                $('.successes__block').each(function () {
                    var desktopPlace = $(this).find('.desktop');
                    var video = $(this).find('.successes__video');
                    video.detach().appendTo(desktopPlace);
                });
                $('.successes .desktop').removeClass('desktop');
            }
        }

        if (isSet($('.use-cases-product'))) {
            if ($(window).width() < 992 && !(isSet($('.use-cases-product .desktop')))) {
                var image = $('.use-cases-product__image').find('img');
                var contentToPrepend = $('.use-cases-product__text .button');
                image.parent().addClass('desktop');
                image.detach().insertBefore(contentToPrepend);
            } else if ($(window).width() >= 992 && isSet($('.use-cases-product .desktop'))) {
                var desktopPlace = $('.use-cases-product .desktop');
                var image = $('.use-cases-product img');
                image.detach().appendTo(desktopPlace);
                desktopPlace.removeClass('desktop');
            }
        }
        if (isSet($('.feedback'))) {
            if ($(window).width() < 992) {
                $('.feedback__slider > .swiper-wrapper').removeAttr('style');
                feedbackSliderInit();
            } else {
                $('.feedback__slider > .swiper-wrapper').css('flex-wrap', 'wrap')
            }
        }
        if (isSet($('.clients'))) {
            if ($(window).width() < 992) {
                $('.clients__slider > .swiper-wrapper').removeAttr('style');
                clientsSliderInit();
            } else {
                $('.clients__slider > .swiper-wrapper').css('flex-wrap', 'wrap')
            }
        }
        if ($(window).width() < 992) {
            if ($('.footer__socials').data('mobile') !== undefined) {
                var footerSocialsPlace = '.' + $('.footer__socials').data('mobile');
                var footerSocials = $('.footer__socials');
                footerSocials.detach().appendTo(footerSocialsPlace);
            }
        }
        if ($(window).width() >= 992 && $('.footer__socials').data('mobile') === undefined) {
            var footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'));
            footerSocials.detach().appendTo('.footer__left');
        }
        if ($(window).width() >= 992 && $('.footer__socials').data('mobile') !== undefined) {
            $('.footer__socials').detach().appendTo('.footer__left');
        }
    });

    $(document).ready(function () {

        hamburgerInit();
        sliderButtonsHandler();
        if (isSet($('.sponsors'))) {
            sponsorsSliderInit();
        }
        if (isSet($('.products'))) {
            if ($(window).width() < 992 && !(isSet($('.products .desktop')))) {
                $('.products__block').each(function () {
                    var image = $(this).find('.products__image');
                    var contentToPrepend = $(this).find('.products__content .button');
                    image.parent().addClass('desktop');
                    image.detach().insertBefore(contentToPrepend);
                })
            }
        }
        if (isSet($('.successes'))) {
            if ($(window).width() < 992 && !(isSet($('.successes .desktop')))) {
                $('.successes__block').each(function () {
                    var video = $(this).find('.successes__video');
                    var contentToPrepend = $(this).find('.successes__content .button');
                    video.parent().addClass('desktop');
                    video.detach().insertBefore(contentToPrepend);
                })
            }
        }

        if (isSet($('.use-cases-product'))) {
            if ($(window).width() < 992 && !(isSet($('.use-cases-product .desktop')))) {
                var image = $('.use-cases-product__image').find('img');
                var contentToPrepend = $('.use-cases-product__text .button');
                image.parent().addClass('desktop');
                image.detach().insertBefore(contentToPrepend);
            }
        }

        if (isSet($('.feedback'))) {
            if ($(window).width() < 992) {
                $('.feedback__slider > .swiper-wrapper').removeAttr('style');
                feedbackSliderInit();
            } else {
                $('.feedback__slider > .swiper-wrapper').css('flex-wrap', 'wrap')
            }
        }

        if (isSet($('.clients'))) {
            if ($(window).width() < 992) {
                $('.clients__slider > .swiper-wrapper').removeAttr('style');
                clientsSliderInit();
            } else {
                $('.clients__slider > .swiper-wrapper').css('flex-wrap', 'wrap')
            }
        }


        var requestInputs = $('.request__input');
        var phoneInput = $('.request__phone > input');
        var nameInput = $('.request__user > input');
        var companyInput = $('.request__company > input');
        var messageInput = $('#request-message');
        var requestSubmit = $('.request form button[type="submit"]');


        requestInputs.on('input', function () {
            if ($(this).is(':valid')) {
                if (!($(this).is('#request-phone')) || !($(this).is('#request-email'))) {
                    $(this).parent().removeClass('invalid').addClass('valid');
                    $(this).siblings('label').removeClass('invalid').addClass('valid');
                }
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
                $(this).siblings('label').removeClass('valid').addClass('invalid');
            }
        });

        requestSubmit.on('click submit', function (event) {
            var failFlag = 0;
            requestInputs.each(function () {
                if ($(this).hasClass('invalid')) {
                    failFlag = 1
                }
            });
            if (failFlag == 1) {
                event.preventDefault();
                $('.success-image').css('display', 'block');
                $('.request__block, .request__bottom').css('display', 'none');
            } else {
                event.preventDefault();
                $('.success-image').css('display', 'block');
                $('.request__block, .request__bottom').css('display', 'none');
                $('.request__top h2').html('Thank you for the request!');
                $('.request__top p').html('Our team member will contact you soon');
                $('.request').addClass('request_success');
            }
        });

        nameInput.on('input', function () {
            $(this).val($(this).val().replace(/[0-9]/, ''));
        });

        phoneInput.on('input', function () {
            if (!(Inputmask.isValid($(this).val(), "+9-(999)-999-9999"))) {
                // $(this).removeClass('valid').addClass('invalid');
                $(this).parent().removeClass('valid').addClass('invalid');
                $(this).siblings('label').removeClass('valid').addClass('invalid');
            } else {
                // $(this).removeClass('invalid').addClass('valid');
                $(this).parent().removeClass('invalid').addClass('valid');
                $(this).siblings('label').removeClass('invalid').addClass('valid');
            }
        });
        // phoneInput.on('focus', function () {
        phoneInput.inputmask({
            "mask": "+9-(999)-999-9999",
            showMaskOnHover: false,
            showMaskOnFocus: true,
            'onincomplete': function () {
                phoneInput.inputmask("remove")
            },
            "oncomplete": function () {
                $(this).parent().removeClass('invalid').addClass('valid');
                $(this).siblings('label').removeClass('invalid').addClass('valid');
            }
        });
        // });
        phoneInput.on('blur', function () {
            if (!(Inputmask.isValid($(this).val(), "+9-(999)-999-9999"))) {

                // $(this).removeClass('valid').addClass('invalid');
                $(this).parent().removeClass('valid').addClass('invalid');
                $(this).siblings('label').removeClass('valid').addClass('invalid');
            } else {
                // $(this).removeClass('invalid').addClass('valid');
                $(this).parent().removeClass('invalid').addClass('valid');
                $(this).siblings('label').removeClass('invalid').addClass('valid');
            }
        });

        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
        var mailInput = $('[name="email"]');
        mailInput.on('input', function () {
            if ($(this).val().search(pattern) == 0) {
                $(this).parent().removeClass('invalid').addClass('valid');
                $(this).siblings('label').removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
                $(this).siblings('label').removeClass('valid').addClass('invalid');
            }
        });
        mailInput.on('blur', function () {
            if ($(this).val() !== '') {
                $(this).siblings('label').hide();
                if ($(this).val().search(pattern) == 0) {
                    $(this).parent().removeClass('invalid').addClass('valid');
                    $(this).siblings('label').removeClass('invalid').addClass('valid');
                } else {
                    $(this).parent().removeClass('valid').addClass('invalid');
                    $(this).siblings('label').removeClass('valid').addClass('invalid');
                }
            } else {
                $(this).siblings('label').removeAttr('style');
            }

        });

        var footerForm = $('.footer__bottom form');
        var footerSubmit = footerForm.find('button[type="submit"]');
        footerSubmit.on('click submit', function (event) {
            var failFlag = 0;
            if (footerForm.find('.request__input').hasClass('invalid')) {
                failFlag = 1
            }
            if (failFlag == 1) {
                event.preventDefault();
            } else {
                event.preventDefault();
                footerForm.hide().siblings('p').hide().siblings('.footer__bottom-success').css('display','flex');
            }
        });

        if (isSet($('.try-soter'))) {
            $('.try-soter__right input').on('focus', function () {
                $(this).parent('.request__input-wrapper').addClass('focused');
            });
            $('.try-soter__right input').on('blur', function () {
                $(this).parent('.request__input-wrapper').removeClass('focused');
            })
        }
        if (isSet($('.copy'))) {
            var textBLock = $('.copy__text-item');
            textBLock.find('ul > li').each(function (index) {
                $(this).attr('data-step', '0' + (index + 1))
            });

        }
        if ($(window).width() >= 992) {
            var footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'))
            footerSocials.detach().appendTo('.footer__left');
        }
        dropdownMobileMenuOn();
    });

})(jQuery); // <----- Конец обертки
