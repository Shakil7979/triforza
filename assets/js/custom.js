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
var menu_count1 = 0;
$(document).on('click','.solutions_menu',function(){
  if(menu_count == 0){
    $('.mega_menu').show();
    $(this).addClass('active'); 
    $('.drop_menu').removeClass('active'); 
    $('.dorp_down').hide();
    menu_count = 1;
    menu_count1 = 0;
  }else{ 
    $('.mega_menu').hide();
    $(this).removeClass('active'); 
    menu_count = 0
  }
  return false;
});

$(document).on('click','.drop_menu',function(){
  if(menu_count1 == 0){
    $('.dorp_down').show();
    $('.mega_menu').hide();
    $('.solutions_menu').removeClass('active'); 
    $(this).addClass('active'); 
    menu_count1 = 1;
    menu_count = 0
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
      $('.menu_mobile_last').show(); 
      $('.click_bars').html('<i class="fa-solid fa-xmark"></i>'); 
      menu_count2 = 1
    }else{ 
      $('.menu_mobile_last').hide(); 
      $('.mega_menu').hide();
      $('.dorp_down').hide();
      $('.click_bars').html('<i class="fas fa-bars"></i>'); 
      menu_count2 = 0
    }

    return false;
});


$(document).ready(function() {
  // Initially hide collapsible menus
  $('.collaps_menu').hide();

  // Event delegation to handle clicks on menu items with sub-menus
  $('.menu_ul > li > a').click(function(event) {
      // Only process clicks for devices under 992px
      if ($(window).width() < 992) {
          // Prevent default link behavior
          event.preventDefault();
          
          // Toggle the next 'ul' element within the same parent 'li'
          $(this).next('ul').slideToggle('slow'); // Use slideToggle with 'slow' speed
      }
  });
  
  // Ensure that submenus are not visible when resizing to larger viewports
  $(window).resize(function() {
      if ($(window).width() >= 992) {
          $('.menu_ul ul').css('display', ''); // Reset to default CSS instead of show/hide to respect CSS rules
      } else {
          $('.menu_ul ul').slideUp('slow'); // Use slideUp with 'slow' speed
      }
  });
}); 