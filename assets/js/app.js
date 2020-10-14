$(document).ready(function () {

    $(".menu").on("click",function(){
        $(this).toggleClass("rotate");
        $("nav").toggleClass("open")
        $("body").toggleClass("hidden")
    })
   
    $(".h-s-slide").on("click", function () {
        $(this).toggleClass("rotate");
        $(".left-side-bar").toggleClass("slideToggle");
    })

    $(".list li").on("click", function () {
        $(".list li").removeClass("active");
        $(".list li ul").slideUp();
        if ($(this).find("ul").is(":not(':visible')")) {
            $(this).addClass("active")
            $(this).find("ul").slideDown()
        }

    })

    $('.f-a-section .artcile-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            
            {
              breakpoint: 800,
              settings: {
                dots: false,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true
              }
            },
            
            
          ]
      });
      
      function mobSlider(){
          if(window.innerWidth < 800) {
            $(".t-t-section .artcile-slider").slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true
              });
          }
      }
      mobSlider()
    $(window).on("resize",function(){
        mobSlider()
    })
});
