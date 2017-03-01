(function($) {
    'use strict';

    jQuery(document).ready(function(){

    // Preloader
    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('.preloader-area').delay(350).fadeOut('slow');
    });

    // Smooth Scroll
    $('a.smooth_scroll').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 10
        }, 1000);
    });

    // Magnific Popup
    $('.work-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Scroll-Top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });


    // Counter Up

    $(".timeline-number").counterUp({
            time: 2000,
            delay: 10
        });

    // wow
    new WOW().init();
   
    });
})(jQuery); 