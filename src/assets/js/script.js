$(document).ready(function () {
    const hamburger = $('.hamburger');
    hamburger.css({
        outline:'none'
    });
    $('.hamburger').on('click',function () {
        $(this).toggleClass('is-active');
    })
});