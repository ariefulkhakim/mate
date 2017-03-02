// ==============================================
// Theme Name : MATE || Portfolio Templete Simple
// Author     : Arieful Khakim
// Url        : ariefulkhakim.github.io/mate
// ==============================================

(function($) {
    'use strict';

    jQuery(document).ready(function(){

    // Preloader
    $('#preloader').fakeLoader({
        timeToHide: 1500,
        zIndex: 999999,
        spinner: 'spinner6',
        bgColor: '#e24331',
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

    $('.timeline-number').counterUp({
        delay: 100,
        time: 2000
    });

    // wow
    // new WOW().init();
   
    });
})(jQuery); 