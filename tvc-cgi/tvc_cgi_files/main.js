"use strict";

$(document).ready(function() {

    if ($(window).width() <= 320) {
        disableFancy();
    }


    jQuery.fn.exists = function() {
        var exist;
        this.length >= 1 ? exist = true : exist = false;
        return exist;
    };

    //close-content
    $(".close-btn,.overlay").click(function() {
        $(this).parents(".close-content").css("display", "none");
    });

    $('.search-button').on('click', function() {
        $('.search-holder').toggle();
    });

    //smooth scroll ancor
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    if ($('.scroll-to-top').exists()) {
        //Click event to scroll to top
        $('.scroll-to-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }


    /*
     *********************************************************
     owl carousel
     *********************************************************
     */

  

    function setSliderHeight() {
        $('.main-slideshow').find('.item').height($(window).height() - 73);
    }




    if ($('.paralax-bg').exists()) {
        $('.paralax-bg').height($(window).height() - $('.header').height() - 73);
    }


    if ($('.main-slideshow').exists()) {

        setSliderHeight();

        $(".main-slideshow").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            addClassActive: true,
            afterMove: function(elem) {
                animateSliderSeporator();
                animateSliderCircle();

                //animate tekst
                $('.owl-item.active .title').textillate('start');
                $('.owl-item.active .animate-text').textillate('start')

            },
            afterInit: function(elem) {
                animateSliderSeporator();
                animateSliderCircle();

            }

        });
    }


    $('.owl-item .title').textillate({ in : {
            effect: 'fadeInLeft',
            autoStart: false,
            delay: 25
        }
    });

    $('.owl-item .animate-text').textillate({ in : {
            effect: 'fadeInLeft',
            autoStart: false,
            delay: 15
        }
    });

    $('.pagetitle').textillate({ in : {
            effect: 'fadeInLeft',
            autoStart: false,
            delay: 25
        }
    });


    /*
     *********************************************************
     animation all element
     *********************************************************
     */

    if ($('.categories-holder').exists() && !Modernizr.touchevents) {
        $('.categories-holder').action({
            before: function() {
                $('.categories-holder > .line').css({
                    height: 0
                });
            },
            after: function(el) {
                $('.categories-holder > .line').animate({
                    height: 240
                }, 1500)
            }
        });
    }
    /*
     *********************************************************
     categories-block
     *********************************************************
     */
    if ($('.categories-block').exists() && !Modernizr.touchevents) {
        $('.categories-block .item').action({
            before: function() {
                $('.categories-block .item').css({
                    opacity: 0,
                    top: 80
                });

                $('.categories-block .next-item-line').css({
                    height: 0
                });

                $('.categories-block .to-text-line').css({
                    width: 0
                });

                $('.categories-block .second').css({
                    '-webkit-transform': 'scale(0)',
                    'transform': 'scale(0)'
                });


                $('.categories-block .item:even .triangle').css('left', '-2000px');
                $('.categories-block .item:odd .triangle').css('left', '2000px');

            },
            after: function(el) {
                el.animate({
                    opacity: 1,
                    top: 0
                }, 600, function() {
                    el.find('.triangle').animate({
                        left: -95
                    }, 350, function() {
                        el.find('.second').css({
                            '-webkit-transform': 'scale(1)',
                            'transform': 'scale(1)'
                        });
                    });
                });

                setTimeout(function() {
                    el.find('.next-item-line').animate({
                        height: 130
                    }, 600);
                    el.find('.to-text-line').animate({
                        width: 130
                    }, 600);
                }, 100)
            }
        });
    }
    /*
     *********************************************************
     platform
     *********************************************************
     */
    if ($('.platform-holder').exists() && !Modernizr.touchevents) {
        $('.platform-holder').action({
            before: function() {
                $('.platform-holder .platform').css({
                    opacity: 0,
                    top: 80
                });
            },
            after: function(el) {
                el.find('.platform').each(function(index) {
                    var $this = $(this);
                    var timeOut_counter = 300 * index;
                    setTimeout(function() {
                        $this.animate({
                            opacity: 1,
                            top: 0
                        }, 1000)
                    }, timeOut_counter);

                });
            }
        });
    }
    

    /*
     *********************************************************
     animate platform icon
     *********************************************************
     */

    $('.platform').hover(function() {
        var step = $(this).data('step') * -1,
            result = 0,
            allstep = $(this).data('frame'),
            that = $(this);

        window.animateSprite = setInterval(function() {
            if (result > step * (allstep - 2)) {
                result += step;
            } else {
                result = 0;
            }

            that.find('.image').css('background-position', result + 'px 0');
        }, 100)

    }, function() {
        clearInterval(window.animateSprite);
        $(this).find('.image').css('background-position', '');
    });


    /*
     *********************************************************
     partners holder
     *********************************************************
     */

    if ($('.partners-holder').exists() && !Modernizr.touchevents) {
        $('.partners-holder').action({
            before: function() {
                $('.partners-holder .item-partner').css({
                    opacity: 0,
                    top: 80
                });
            },
            after: function(el) {
                el.find('.item-partner').each(function(index) {
                    var $this = $(this);
                    var timeOut_counter = 100 * index;
                    setTimeout(function() {
                        $this.animate({
                            opacity: 1,
                            top: 0
                        }, 1000)
                    }, timeOut_counter);

                });
            }
        });
    }

    /*
     *********************************************************
     about us
     *********************************************************
     */

    if ($('.lead-holder').exists() && !Modernizr.touchevents) {

        $('.lead-holder').action({
            before: function() {
                $('.lead-holder  .line').css({
                    width: 0
                });
            },
            after: function(el) {
                $('.lead-holder .line').animate({
                    width: 180
                }, 1500)
            }
        });
    }

    if ($('.achievements-holder').exists() && !Modernizr.touchevents) {
        $('.achievements-holder').action({
            before: function() {
                $('.achievements-holder > .line').css({
                    height: 0
                });
            },
            after: function(el) {
                $('.achievements-holder > .line').animate({
                    height: 240
                }, 1500)
            }
        });
    }

    if ($('.achievements-box').exists() && !Modernizr.touchevents) {
        $('.achievements-box').action({
            before: function() {
                $('.achievements-box .achievement').css({
                    opacity: 0,
                    top: 80
                });
            },
            after: function(el) {
                el.find('.achievement').each(function(index) {
                    var $this = $(this);
                    var timeOut_counter = 400 * index;
                    setTimeout(function() {
                        $this.animate({
                            opacity: 1,
                            top: 0
                        }, 1000)
                    }, timeOut_counter);

                });
            }
        });
    }

    /*
     *********************************************************
     news
     *********************************************************
     */
    if ($('.news-list-holder').exists() && !Modernizr.touchevents) {

        $('.news-list-holder').action({
            before: function() {
                $('.news-list-holder > .line').css({
                    height: 0
                });
            },
            after: function(el) {
                $('.news-list-holder > .line').animate({
                    height: 240
                }, 1500)
            }
        });
    }


    if ($('.news-box').exists() && !Modernizr.touchevents) {
        $('.news-box .news').action({
            before: function() {
                $('.news-box .news').css({
                    opacity: 0,
                    top: 80
                });

                $('.news-box .news .to-text-line').css({
                    width: 0
                });

            },
            after: function(el) {
                el.animate({
                    opacity: 1,
                    top: 0
                }, 1000);

                setTimeout(function() {

                    el.find('.to-text-line').animate({
                        width: 75
                    }, 1000);
                }, 500)
            }
        });
    }

    if ($('.support-form').exists() && !Modernizr.touchevents) {
        $('.support-form').action({
            before: function() {
                $('.support-form').css({
                    opacity: 0

                });

            },
            after: function(el) {
                el.animate({
                    opacity: 1

                }, 1500);

            }
        });
    }

    /*
     *********************************************************
     resize function
     *********************************************************
     */
    $(window).on('resize', function() {
        setSliderHeight();

        if ($(window).width() <= 320) {
            disableFancy();
        }
    });


    /*
     *********************************************************
     paralax
     *********************************************************
     */
    var paralaxBg = $(this).find(".paralax-bg").attr("style");

    $(document).on("mousemove", "body", function(event) {
        var x = -1 * parseInt(event.pageX);
        var y = -1 * parseInt(event.pageY);
        $(this).find(".paralax-image img").attr("style", "transform:translate3d(" + x * 0.03 + "px ,0, 0); -webkit-transform: translate3d(" + x * 0.03 + "px ,0, 0)");
        $(this).find(".paralax-bg").attr("style", paralaxBg + "transform:translate3d(" + x * 0.004 + "px ,0 , 0); -webkit-transform: translate3d(" + x * 0.004 + "px , 0, 0)");
    });


    /*
     *********************************************************
     timeline
     *********************************************************
     */
    if ($('.categories-timeline').exists() && !Modernizr.touchevents) {
        $('.cat-row').action({
            before: function() {
                $('.cat-row > .line').css({
                    height: 0
                });

                $('.cat-row  .item').css({
                    opacity: 0,
                    top: 30

                });

            },
            after: function(el) {
                setTimeout(function() {
                    var $this = el;
                    $this.find('.line').animate({
                        height: 100 + '%'
                    }, 1500);
                }, 1000);

                el.find('.item').each(function(index) {
                    var $this = $(this);
                    var timeOut_counter = 300 * index;
                    setTimeout(function() {
                        $this.animate({
                            opacity: 1,
                            top: 0
                        }, 400);


                    }, timeOut_counter);

                });
            }
        });
    }

    /*
     *********************************************************
     scroll
     *********************************************************
     */

    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= window.height) {}
    });


    /*
     *********************************************************
     menu
     *********************************************************
     */

    var mobileMenu = true;
    var $nav = $(".nav");
    $(document).on("click", ".menu-icon", function() {
        $(this).toggleClass("active");
        $nav.animate({
            width: 100 + "%"
        }, 200);
        if (!mobileMenu) {
            $nav.stop().animate({
                width: 0
            }, 200);
        } else {
            $nav.stop().animate({
                width: 100 + "%"
            }, 200);
        }
        mobileMenu = !mobileMenu;
    });
    $(window).resize(function() {
        if ($(this).width() > 767) {
            $nav.removeAttr("style");
            $(".menu-icon").removeClass("active");
            mobileMenu = true;
        }
    });


    /*
     *********************************************************
     contacts
     *********************************************************
     */

    if ($('.form-block').exists() && !Modernizr.touchevents) {
        $('.form-block').action({
            before: function() {
                $('.form-block > div > .line').css({
                    height: 0
                });
            },
            after: function(el) {
                setTimeout(function() {
                    var $this = el;
                    $this.find('.line').animate({
                        height: 230
                    }, 1500);
                }, 1000);
            }
        });

        $('.form-block [class*="col-"]').action({
            before: function() {
                $('.form-block [class*="col-"]').css({
                    opacity: 0,
                    top: 80
                });

            },
            after: function(el) {
                el.each(function(index) {
                    var $this = $(this);
                    var timeOut_counter = 2000 * index + 500;
                    setTimeout(function() {
                        $this.animate({
                            opacity: 1,
                            top: 0
                        }, 400);


                    }, timeOut_counter);
                });
            }
        });

        $('.info').action({
            before: function() {
                $('.info .next-item-line').css({
                    height: 0
                });
            },
            after: function(el) {
                setTimeout(function() {
                    var $this = el;
                    $this.find('.next-item-line').animate({
                        height: 80
                    }, 1500);
                }, 1000);
            }
        });

    }

});

//animate slider seporator
function animateSliderSeporator() {
    $('.owl-item').find('.seporate').css({
        width: 0
    });
    $('.owl-item.active').find('.seporate').animate({
        width: 182
    }, 1000);
}
//animate svg circle
function animateSliderCircle() {
    $('.owl-item').find('.circle').css({
        'stroke-dashoffset': 1000
    });
    $('.owl-item.active').find('.circle').animate({
        'stroke-dashoffset': 0
    }, 1500);

}

function disableFancy() {
    $('.porfolio-holder .item a').on('click', function() {
        return false;
    })
}
