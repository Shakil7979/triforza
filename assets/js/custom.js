$(document).ready(function(){
    "use strict";
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots:true,
        
    });
    // $('.our_client_content').slick({
    //     arrows: true,
    //     centerPadding: "0px",
    //     dots: true,
    //     slidesToShow: 1,
    //     infinite: false
    //   });
  });

// $(function() {
//     // Owl Carousel
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//       items: 1,
//       loop: true,
//       nav: true,
//       margin: 10,
//     });
//   });

var menu_count = 0;
$(document).on('click','.solutions_menu',function(){
  if(menu_count == 0){
    $('.mega_menu').show();
    $(this).addClass('active'); 
    menu_count = 1
  }else{ 
    $('.mega_menu').hide();
    $(this).removeClass('active'); 
    menu_count = 0
  }
  return false;
});

var menu_count1 = 0;
$(document).on('click','.drop_menu',function(){
  if(menu_count1 == 0){
    $('.dorp_down').show();
    $(this).addClass('active'); 
    menu_count1 = 1
  }else{ 
    $('.dorp_down').hide();
    $(this).removeClass('active'); 
    menu_count1 = 0
  }

  return false;
});


var menu_count2 = 0;
$(document).on('click','.click_bars',function(){ 

    if(menu_count2 == 0){
      $('.menu ul').show(); 
      $('.click_bars').html('<i class="fa-solid fa-xmark"></i>'); 
      menu_count2 = 1
    }else{ 
      $('.menu ul').hide(); 
      $('.mega_menu').hide();
      $('.dorp_down').hide();
      $('.click_bars').html('<i class="fas fa-bars"></i>'); 
      menu_count2 = 0
    }

    return false;
});