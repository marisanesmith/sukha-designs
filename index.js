$('p').scroll(function(){
    $('introScroll').fadeIn(2000);
})

$(document).ready(function() {
    $('.hamburger-icon').on('click', function() {
        $('.animated-icon').toggleClass('open');
    });
})