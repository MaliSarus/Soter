(function ($) { // <----- Начало обертки
    function isSet(element) {
        return element.length !== 0;
    }

    function dropdownMobileMenuOn() {
        if ($(window).width() < 992) {
            $('#navbarNav > li').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
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
            });
            $('.sub-menu a').on('click', function () {
                const url = $(this).attr('href');
                $(location).attr('href', url);
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
                    // spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    // spaceBetween: 40,

                },
                992: {
                    slidesPerView: 3,
                    // spaceBetween: 50,
                },
                1200: {
                    centeredSlides: true,
                    slidesPerView: 3,
                    // loopedSlides: 1,
                    // spaceBetween: 115,
                }
            }
        });
        var mySwiperControl = document.querySelector('.sponsors__slider.swiper-container').swiper;
        // setInterval(function () {
        //     mySwiperControl.update(true)
        // }, 1000);
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
        });
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
            }
        });
        var mySwiperControl = document.querySelector('.feedback__slider.swiper-container').swiper;
        var dots = $('.feedback__block .little-dot');
        dots.on('click', function (event) {
            if ($('.little-dot--first').is(event.target)) {
                mySwiperControl.slidePrev(400, true);
            }
            if ($('.little-dot--last').is(event.target)) {
                mySwiperControl.slideNext(400, true);
            }
        });
        $(window).on('resize', function () {
            if ($(window).width() >= 992 && $('.feedback__slider').hasClass('swiper-container-initialized')) {
                mySwiperControl.destroy(false, true);
            }
        })
    };

    function clientsSliderInit() {
        var mySwiper = new Swiper('.clients__slider', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 9,
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            on:{
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
                768: {
                    spaceBetween: 20,
                },
            }
        });
        var mySwiperControl = document.querySelector('.clients__slider.swiper-container').swiper;
        var dots = $('.clients__content .little-dot');
        dots.on('click', function (event) {
            if ($('.little-dot--first').is(event.target)) {
                mySwiperControl.slidePrev(400, true);
            }
            if ($('.little-dot--last').is(event.target)) {
                mySwiperControl.slideNext(400, true);
            }
        });
        $(window).on('resize', function () {
            if ($(window).width() >= 992 && $('.clients__slider').hasClass('swiper-container-initialized')) {
                mySwiperControl.destroy(false, true);
            }
        })
    }

    $(document).ready(function () {
        if (isSet($('.sponsors'))) {
            sponsorsSliderInit();
        }
        sliderButtonsHandler();
        hamburgerInit();
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
                $('.feedback__slider > .swiper-wrapper').removeClass('wrapper_flex');
                feedbackSliderInit();
            } else {
                $('.feedback__slider > .swiper-wrapper').addClass('wrapper_flex');
            }
        }

        if (isSet($('.clients'))) {
            if ($(window).width() < 992) {
                $('.clients__slider > .swiper-wrapper').removeClass('wrapper_flex');
                clientsSliderInit();
            } else {
                $('.clients__slider > .swiper-wrapper').addClass('wrapper_flex');
            }
        }


        var requestInputs = $('.request__input');
        var phoneInput = $('.request__phone > input');
        var nameInput = $('.request__user > input');
        var companyInput = $('.request__company > input');
        var messageInput = $('#request-message');
        var requestSubmit = $('.request__submit');


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
            var failFlag = 0;
            $(this).parent().find('.request__input-wrapper').each(function () {
                if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
                    failFlag = 1;
                    $(this).addClass('invalid').children('label').addClass('invalid');
                }
            });
            console.log(failFlag);
            if (failFlag == 1) {
                event.preventDefault();
            } else {
                if ($(this).is('#request-button')) {
                    $('.success-image').css('display', 'block');
                    $('.request__block, .request__bottom').css('display', 'none');
                    $('.request__top h2').html('Thank you for the request!');
                    $('.request__top p').html('Our team member will contact you soon');
                    $('.request').addClass('request_success');
                } else if ($(this).is('#copy-button')) {
                    $('.copy__success').css('display', 'flex');
                    $('.copy__form form').css('display', 'none');
                }
            }
        });


        nameInput.on('input', function () {
            $(this).val($(this).val().replace(/[0-9]/, ''));
            if ($(this).val() == ''){
                $(this).parent().removeClass('valid').addClass('invalid');
                $(this).siblings('label').removeClass('valid').addClass('invalid');
            }
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
            if (footerForm.find('.request__input-wrapper').hasClass('invalid') || !(footerForm.find('.request__input-wrapper').hasClass('valid'))) {
                failFlag = 1;
                footerForm.find('.request__input-wrapper').addClass('invalid').children('label').addClass('invalid');
            }
            if (failFlag == 1) {
                event.preventDefault();
            } else {
                footerForm.hide().siblings('p').hide().siblings('.footer__bottom-success').css('display', 'flex');
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
        if (isSet($('.order'))) {
            var buttonUp = $('.order__quantity-button.up');
            var buttonDown = $('.order__quantity-button.down');
            var quantityInput = $('input[type="number"]');
            var orderButton = $('.order button[type="button"]');

            var previewImage = $('.order__preview-image');
            previewImage.on('click', function () {
                var previewBlock = $(this).parents('.order__preview');
                var topImage = $(this).parents('.order__preview').find('.order__preview-top').children('img');
                var targetImage = $(this).children('img');
                var that = $(this);
                topImage.animate({
                    opacity: 0
                }, function () {
                    that.parents('.order__preview').find('.order__preview-top').children('img').detach();
                    that.parents('.order__preview').find('.order__preview-top').append(targetImage);
                });
                targetImage.animate({
                    opacity: 0
                }, function () {
                    if (targetImage.attr('data-class') == 'mobile') {
                        that.removeClass('mobile');
                    }
                    that.children('img').detach();
                    that.append(topImage);
                    if (topImage.attr('data-class') == 'mobile') {
                        that.addClass('mobile');
                    }
                });
                topImage.animate({
                    opacity: 1
                });
                targetImage.animate({
                    opacity: 1
                });

            });

            buttonUp.on('click', function () {
                var input = $(this).siblings('input[type="number"]');
                input[0].stepUp();
                input.trigger('change');
            });
            buttonDown.on('click', function () {
                var input = $(this).siblings('input[type="number"]');
                input[0].stepDown();
                input.trigger('change');
            });
            quantityInput.on('input change', function () {
                var addInfo = $(this).parents('form').find('.add-info');
                if ($(this).val() < 1){
                    $(this).val(1);
                }
                if ($(this).val() > 20) {
                    addInfo.addClass('add-info_active');
                } else {
                    addInfo.removeClass('add-info_active');
                }
            });
            orderButton.on('click', function () {
                $('body').css({
                    overflow: 'hidden',
                }).children().css({
                    filter: 'blur(27px)'
                });
                $('.modal').addClass('modal_active').removeAttr('style');
            });
            $('[data-class="mobile"]').parent('.order__preview-image').addClass('mobile');
            if ($(window).width() < 1200) {
                $('.order').each(function () {
                    if (!(isSet($(this).find('.desktop')))) {
                        var preview = $(this).find('.order__preview');
                        var contentToPrepend = $(this).find('.order__main-block form');
                        preview.parent().addClass('desktop');
                        preview.detach().insertBefore(contentToPrepend);
                    }
                })

            }
        }

        var modalInputs = $('.modal input');
        modalInputs.on('focus', function () {
            $(this).parent('.modal__wrapper').addClass('focused');
        });
        modalInputs.on('blur', function () {
            $(this).parent('.modal__wrapper').removeClass('focused');
        });
        var modalMail = $('input[name="order-mail"]');
        modalInputs.on('input', function () {
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
        var modalWrapper = $('.modal__wrapper');
        var modalSubmit = $('.modal button[type="submit"]');
        modalSubmit.on('click submit', function (event) {
            var failFlag = 0;
            modalWrapper.each(function () {
                if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
                    failFlag = 1;
                    $(this).addClass('invalid').children('label').addClass('invalid');
                }
            });
            if (failFlag == 1) {
                event.preventDefault();
            } else {
                console.log('success');
            }
        });
        var modalName = $('input[name="order-name"]');
        modalName.on('input', function () {
            $(this).val($(this).val().replace(/[0-9]/, ''));
        });


        modalMail.on('input', function () {
            if ($(this).val().search(pattern) == 0) {
                $(this).parent().removeClass('invalid').addClass('valid');
                $(this).siblings('label').removeClass('invalid').addClass('valid');
            } else {
                $(this).parent().removeClass('valid').addClass('invalid');
                $(this).siblings('label').removeClass('valid').addClass('invalid');
            }
        });
        modalMail.on('blur', function () {
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
        var modalClose = $('.modal-close');
        modalClose.on('click', function () {
            $('body').css({
                overflow: 'auto',
            }).removeAttr('style').children().css({
                filter: 'blur(0px)'
            }).removeAttr('style');
            $('.modal').removeClass('modal_active').removeAttr('style');
        });
        var modalForm = $('.modal');
        modalForm.on('click', function (event) {
            if (!($(this).children().is(event.target)) && $(this).children().has(event.target).length === 0) {
                $('body').css({
                    overflow: 'auto',
                }).removeAttr('style').children().css({
                    filter: 'blur(0px)'
                }).removeAttr('style');
                $('.modal').removeClass('modal_active').removeAttr('style');
            }
        });

        $('.scrolling').on('click', function (e) {
            e.preventDefault();
            var destination = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(destination).position().top
            }, 700);
        });

        if (isSet($('.solutions-list'))) {
            var listBLock = $('.solutions-list__list');
            listBLock.find('ul > li').each(function (index) {
                $(this).prepend('<span>0' + (index + 1) + '</span>')
            });
        }

        if(isSet($('.faq'))){
            var listItem = $('.faq__list ul > li');
            listItem.on('click',function () {
                $(this).toggleClass('open').children('p').slideToggle();
            });
            listItem.each(function () {
                $(this).append('<div class="point"><span></span><span></span></div>')
            })
        }

        if(isSet($('.measures'))){
            var listItem = $('.measures__list ol > li');
            var totalCount = $('.measures__total-count');
            totalCount.html(listItem.length);
        }

        if ($(window).width() >= 992) {
            var footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'))
            footerSocials.detach().appendTo('.footer__left');
        }
        dropdownMobileMenuOn();
        if (isSet($('[data-position]'))) {
            $('[data-position]').each(function () {
                var style = $(this).attr('data-position').replace(/\s/g, "").split(';');
                $(this).css({
                    position: 'relative',
                    left: style[0] + 'px'
                });
                if (window.matchMedia('(min-width: 1200px)').matches) {
                    $(this).css('left', style[1] + 'px');
                }
            });

        }


        $('form').on('submit', function (e) {
            console.log($(this));
            return false;
        });
    });

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
            if ($(window).width() < 992 && !($('.feedback__slider').hasClass('swiper-container-initialized'))) {
                $('.feedback__slider > .swiper-wrapper').removeClass('wrapper_flex');
                feedbackSliderInit();
            }
            else if ($(window).width() >= 992 && !($('.feedback__slider').hasClass('wrapper_flex'))){
                $('.feedback__slider > .swiper-wrapper').addClass('wrapper_flex')
            }
        }
        if (isSet($('.clients'))) {
            if ($(window).width() < 992 && !($('.clients__slider').hasClass('swiper-container-initialized'))) {
                $('.clients__slider > .swiper-wrapper').removeClass('wrapper_flex');
                clientsSliderInit();
            }
            else if ($(window).width() >= 992 && !($('.clients__slider').hasClass('wrapper_flex'))){
                $('.clients__slider > .swiper-wrapper').addClass('wrapper_flex')
            }
        }

        if (isSet($('[data-position]'))) {
            $('[data-position]').each(function () {
                var style = $(this).attr('data-position').replace(/\s/g, "").split(';');
                $(this).css({
                    position: 'relative',
                    left: style[0] + 'px'
                });
                if ($(window).width() >= 1200) {
                    $(this).css('left', style[1] + 'px');
                }
            });
        }

        if (isSet($('.order'))) {
            if ($(window).width() < 1200) {
                $('.order').each(function () {
                    if (!(isSet($(this).find('.desktop')))) {
                        var preview = $(this).find('.order__preview');
                        var contentToPrepend = $(this).find('.order__main-block form');
                        preview.parent().addClass('desktop');
                        preview.detach().insertBefore(contentToPrepend);
                    }
                })
            }
            if ($(window).width() >= 1200) {
                $('.order').each(function () {
                    if (isSet($(this).find('.desktop'))) {
                        var desktopPlace = $(this).find('.desktop');
                        var preview = $(this).find('.order__preview');
                        preview.detach().appendTo(desktopPlace);
                        desktopPlace.removeClass('desktop');
                    }
                })
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



})(jQuery); // <----- Конец обертки
