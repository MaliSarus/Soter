function isSet(element) {
    return element.length !== 0;
}

$(document).ready(function () {
    const hamburger = $('.hamburger');
    hamburger.css({
        outline:'none'
    });
    $('.hamburger').on('click',function () {
        $(this).toggleClass('is-active');
    });

    if(isSet($('.sponsors'))){
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            slidesPerView: 5,
            spaceBetween: 115,
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        })
    }
});

