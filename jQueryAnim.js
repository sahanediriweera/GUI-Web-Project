'use strict';

$(function() {

    var width = 730;
    var animationSpeed = 2000;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');

    var $slideContainer = $slider.find('.slides');

    var $slides = $slideContainer.find('.slide');

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                    console.log("Anumation speed:" + animationSpeed);
                }
            });
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slider.on('mousecenter', stopSlider).on('mouseleave', startSlider);

    startSlider();

});