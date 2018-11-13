$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    // vPosH1();
 
    // run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
 
// mouse event link https://api.jquery.com/category/events/mouse-events/
function demoFunction() {
    $('.numberFive').click(function() {
        $('.box').addClass('colorchange5');
        $('.box').removeClass('colorchange4');
        $('.box').removeClass('colorchange3');
        $('.box').removeClass('colorchange2');
        $('.box').removeClass('colorchange1');
        // $('.header').css('font-size', '200px')
    })
    $('.numberFour').dblclick(function() {
         $('.box').addClass('colorchange4');
        $('.box').removeClass('colorchange5');
        $('.box').removeClass('colorchange3');
        $('.box').removeClass('colorchange2');
        $('.box').removeClass('colorchange1');
        // $('.header').css('font-size', '200px')
    })
    $('.numberThree').mouseenter(function() {
         $('.box').addClass('colorchange3');
        $('.box').removeClass('colorchange4');
        $('.box').removeClass('colorchange5');
        $('.box').removeClass('colorchange2');
        $('.box').removeClass('colorchange1');

        // $('.header').css('font-size', '200px')
    })
    $('.numberTwo').dblclick(function() {
         $('.box').addClass('colorchange2');
        $('.box').removeClass('colorchange4');
        $('.box').removeClass('colorchange3');
        $('.box').removeClass('colorchange5');
        $('.box').removeClass('colorchange1');
        // $('.header').css('font-size', '200px')
    })
    $('.numberOne').click(function() {
          $('.box').addClass('colorchange1');
        $('.box').removeClass('colorchange4');
        $('.box').removeClass('colorchange3');
        $('.box').removeClass('colorchange2');
        $('.box').removeClass('colorchange5');
        // $('.header').css('font-size', '200px')
    })
    $('.jqHover').hover(function() {
        $("#numberFive").toggleClass('redBG');
    })
}
