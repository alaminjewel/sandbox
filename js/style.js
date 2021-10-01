var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    responsive:{
      600:{
          items:3
      },
      1000:{
          items:5
      }
    }
  })