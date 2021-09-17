$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: 'fade',
        controlsContainer: '.flexslider'
    });
});

wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();