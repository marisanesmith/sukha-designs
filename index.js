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


  // Animate on Scroll 
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 10, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
});