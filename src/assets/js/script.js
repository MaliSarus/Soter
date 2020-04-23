function isSet(element) {
    return element.length !== 0;
}

function validation(element) {
    if (element === '') {
        element.css({
            color: 'red'
        });
        console.log(element.siblings());
    }
};

const hamburgerInit = () => {
    const hamburger = $('.hamburger');
    hamburger.css({
        outline: 'none'
    });
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('body').toggleClass('hidden');
    });
};

const sliderButtonsHandler = () => {
    const btns = $('.nav-dot');
    const paginationWrapper = $('.pagination-wrapper');
    const bigDotContainer = $('.big-dot-container');
    const littleDot = $('.little-dot');

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

const sponsorsSliderInit = () => {
    const mySwiper = new Swiper('.sponsors__slider', {
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
                }
            },
            slideNextTransitionStart: function () {
                const paginationWrapper = $('.pagination-wrapper');
                paginationWrapper.addClass('transition-next');
                setTimeout(function () {
                    paginationWrapper.removeClass('transition-next')
                }, 500);
            },
            slidePrevTransitionStart: function () {
                const paginationWrapper = $('.pagination-wrapper');
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
    setInterval(function(){
        mySwiper.update(true);
    }, 1000);
    const arrowPrev = $('.sponsors__head .arrow-prev');
    const arrowNext = $('.sponsors__head .arrow-next');
    arrowPrev.on('click', function () {
        mySwiper.slidePrev(400, true);
    });
    arrowNext.on('click', function () {
        mySwiper.slideNext(400, true);
    });
    const dots = $('.sponsors__content .little-dot');
    dots.on('click', function (event) {
        if ($('.little-dot--first').is(event.target)) {
            mySwiper.slidePrev(400, true);
        }
        if ($('.little-dot--last').is(event.target)) {
            mySwiper.slideNext(400, true);
        }
    })
};
const feedbackSliderInit = () => {
    const mySwiper = new Swiper('.feedback__slider', {
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
                const paginationWrapper = $('.pagination-wrapper');
                paginationWrapper.addClass('transition-next');
                setTimeout(function () {
                    paginationWrapper.removeClass('transition-next')
                }, 500);
            },
            slidePrevTransitionStart: function () {
                const paginationWrapper = $('.pagination-wrapper');
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
        }
    });
    const dots = $('.feedback__block .little-dot');
    dots.on('click', function (event) {
        if ($('.little-dot--first').is(event.target)) {
            mySwiper.slidePrev(400, true);
        }
        if ($('.little-dot--last').is(event.target)) {
            mySwiper.slideNext(400, true);
        }
    })
};

$(window).on('resize', function () {


    if (isSet($('.products'))) {
        if ($(window).width() < 992 && !(isSet($('.products .desktop')))) {
            $('.products__block').each(function () {
                const image = $(this).find('.products__image');
                const contentToPrepend = $(this).find('.products__content button');
                image.parent().addClass('desktop');
                image.detach().insertBefore(contentToPrepend);
            });
        } else if ($(window).width() >= 992 && isSet($('.products .desktop'))) {
            $('.products__block').each(function () {
                const desktopPlace = $(this).find('.desktop');
                const image = $(this).find('.products__image');
                image.detach().appendTo(desktopPlace);
            });
            $('.products .desktop').removeClass('desktop');
        }
    }
    if (isSet($('.successes'))) {
        if ($(window).width() < 992 && !(isSet($('.successes .desktop')))) {
            $('.successes__block').each(function () {
                const video = $(this).find('.successes__video');
                const contentToPrepend = $(this).find('.successes__content button');
                video.parent().addClass('desktop');
                video.detach().insertBefore(contentToPrepend);
            });
        } else if ($(window).width() >= 992 && isSet($('.successes .desktop'))) {
            $('.successes__block').each(function () {
                const desktopPlace = $(this).find('.desktop');
                const video = $(this).find('.successes__video');
                video.detach().appendTo(desktopPlace);
            });
            $('.successes .desktop').removeClass('desktop');
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
    if ($(window).width() < 992) {
        if ($('.footer__socials').data('mobile') !== undefined) {
            const footerSocialsPlace = '.' + $('.footer__socials').data('mobile');
            const footerSocials = $('.footer__socials');
            footerSocials.detach().appendTo(footerSocialsPlace);
        }
    }
    if ($(window).width() >= 992 && $('.footer__socials').data('mobile') === undefined) {
        const footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'));
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
                const image = $(this).find('.products__image');
                const contentToPrepend = $(this).find('.products__content button');
                image.parent().addClass('desktop');
                image.detach().insertBefore(contentToPrepend);
            })
        }
    }
    if (isSet($('.successes'))) {
        if ($(window).width() < 992 && !(isSet($('.successes .desktop')))) {
            $('.successes__block').each(function () {
                const video = $(this).find('.successes__video');
                const contentToPrepend = $(this).find('.successes__content button');
                video.parent().addClass('desktop');
                video.detach().insertBefore(contentToPrepend);
            })
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


    if (isSet($('.request'))) {
        const requestInputs = $('.request__input');
        const phoneInput = $('#request-phone');
        const nameInput = $('#request-name');
        const companyInput = $('#request-company');
        const messageInput = $('#request-message');
        const requestSubmit = $('.request form button[type="submit"]');


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
        requestSubmit.on('click', function (event) {
            let failFlag = 0;
            requestInputs.each(function () {
                if ($(this).hasClass('invalid')) {
                    failFlag = 1
                }
            });
            if (failFlag == 1) {
                event.preventDefault();
            }
        });

        nameInput.on('input',function () {
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

        phoneInput.on('focus', function () {
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
        });
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
        })


    }

    const pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    const mailInput = $('[name="email"]');
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
    if ($(window).width() >= 992) {
        const footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'))
        footerSocials.detach().appendTo('.footer__left');
    }

});


