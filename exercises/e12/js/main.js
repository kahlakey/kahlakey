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
        $('.box').toggleClass('colorchange5');
        // $('.header').css('font-size', '200px')
    })
    $('.numberFour').dblclick(function() {
        $('.box').toggleClass('colorchange4');
        // $('.header').css('font-size', '200px')
    })
    $('.numberThree').mouseenter(function() {
        $('.box').toggleClass('colorchange3');
        // $('.header').css('font-size', '200px')
    })
    $('.numberTwo').click(function() {
        $('.box').toggleClass('colorchange2');
        // $('.header').css('font-size', '200px')
    })
    $('.numberOne').click(function() {
        $('.box').toggleClass('colorchange1');
        // $('.header').css('font-size', '200px')
    })
    $('.jqHover').hover(function() {
        $("#numberFive").toggleClass('redBG');
    })
}
