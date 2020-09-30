$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      rtl: true,
      margin: 10,
      autoplay:true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              dots: true,
              loop: true
          },
          750: {
              items: 2,
              dots: true,
              nav:false,
              loop: true
          },
          992: {
            items: 3,
            dots: true,
            nav:false,
            loop: true
        },
          1500: {
              items: 4,
              dots: true,
              nav:false,
              loop: false
          }
      }
  });

});