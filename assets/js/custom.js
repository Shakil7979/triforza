$(document).ready(function(){
    "use strict";
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots:true,
        navText: ["<img src='assets/images/left_arrow.png'>","<img src='assets/images/right_arrow.png'>"]
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


// Grabbing the menu item and the mega menu for additional behavior
const menuItem2 = document.querySelector(".drop_menu");
const megaMenu2 = document.querySelector(".dorp_down");

// Optional: You could add event listeners for hover events
// This might be useful for advanced interactions or animations
menuItem2.addEventListener("mouseenter", () => {
    megaMenu2.style.display = "block";  
    $('.mega_menu').hide();
    $('.solutions_menu').removeClass('active'); 
    $(this).addClass('active'); 
});

menuItem2.addEventListener("mouseleave", () => {
    megaMenu2.style.display = "none";  
    $('.dorp_down').hide();
    $(this).removeClass('active'); 
});


// Grabbing the menu item and the mega menu for additional behavior
const menuItem = document.querySelector(".solutions_menu");
const megaMenu = document.querySelector(".mega_menu");

// Optional: You could add event listeners for hover events
// This might be useful for advanced interactions or animations
menuItem.addEventListener("mouseenter", () => {
    megaMenu.style.display = "block"; 
    $('.drop_menu').removeClass('active'); 
    $('.dorp_down').hide(); 
    $(this).addClass('active'); 
});

menuItem.addEventListener("mouseleave", () => {
    megaMenu.style.display = "none"; 
    $(this).removeClass('active'); 
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