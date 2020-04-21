
function isSet(element) {
    return element.length !== 0;
}

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
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                // spaceBetween: 40,

            },
            992: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 5,
                // spaceBetween: 115,
            }
        }
    });
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
        centeredSlides:true,
        loop: true,
        on: {
            resize: function(){
              if ($(window).width() >= 992){
                  this.destroy(false,true);
                  $('.feedback__slider > .swiper-wrapper').css({
                      flexWrap: 'wrap'
                  })
              }
              else{
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
        } else if($(window).width() >= 992 && isSet($('.products .desktop'))){
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
        } else if($(window).width() >= 992 && isSet($('.successes .desktop'))){
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
        }
        else{
            $('.feedback__slider > .swiper-wrapper').css('flex-wrap','wrap')
        }
    }
    if ($(window).width() < 992) {
        if($('.footer__socials').data('mobile') !== undefined) {
            const footerSocialsPlace = '.' + $('.footer__socials').data('mobile');
            const footerSocials = $('.footer__socials');
            footerSocials.detach().appendTo(footerSocialsPlace);
        }
    }
    if ($(window).width() >= 992 && $('.footer__socials').data('mobile') === undefined ){
        const footerSocials  = $('.footer__socials').data('mobile',$('.footer__socials').parent().attr('class'));
        footerSocials.detach().appendTo('.footer__left');
    }
    if($(window).width() >= 992 && $('.footer__socials').data('mobile') !== undefined){
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
        }
        else{
            $('.feedback__slider > .swiper-wrapper').css('flex-wrap','wrap')
        }
    }

    if($(window).width() >= 992){
        const footerSocials  = $('.footer__socials').data('mobile',$('.footer__socials').parent().attr('class'))
        footerSocials.detach().appendTo('.footer__left');

    }
});


