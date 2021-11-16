$('p').scroll(function(){
    $('introScroll').fadeIn(2000);
})

// $(document).ready(function() {
//     $('.hamburger-icon').on('click', function() {
//         $('.animated-icon').toggleClass('open');
//     });
// })


// Typed JS Code

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 10,
    backSpeed: 5,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity
  });