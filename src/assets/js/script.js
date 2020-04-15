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
    });
};

const sliderButtonsHandler = () =>{
    const btns = $('.nav-dot');
    const paginationWrapper = $('.pagination-wrapper');
    const bigDotContainer = $('.big-dot-container');
    const littleDot = $('.little-dot');

    btns.on('click', btnClick);

    function btnClick() {
        if($(this).hasClass('little-dot--first')) {
            paginationWrapper.addClass('transition-prev');
        } else if ($(this).hasClass('little-dot--last')){
            paginationWrapper.addClass('transition-next');
        }

        var timeout = setTimeout(cleanClasses, 500);
    }

    function cleanClasses() {
        if(paginationWrapper.hasClass('transition-next')) {
            paginationWrapper.removeClass('transition-next')
        } else if(paginationWrapper.hasClass('transition-prev')) {
            paginationWrapper.removeClass('transition-prev')
        }
    }
}

const sponsorsSlideInit = () => {
    const mySwiper = new Swiper('.swiper-container', {
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
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 115,
            }
        }
    });
    const dots = $('.sponsors__content .little-dot');
    dots.on('click',function (event) {
        if($('.little-dot--first').is(event.target)){
            mySwiper.slidePrev(400,true);
        }
        if($('.little-dot--last').is(event.target)){
            mySwiper.slideNext(400,true);
        }
    })
};

$(document).ready(function () {
    hamburgerInit();
    sliderButtonsHandler();
    if (isSet($('.sponsors'))) {
        sponsorsSlideInit();
    }
});

