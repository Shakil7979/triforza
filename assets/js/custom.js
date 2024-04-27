$(document).ready(function(){
    "use strict";
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots:true,
        navText: ["<img src='assets/images/left_arrow.png'>","<img src='assets/images/right_arrow.png'>"]
    }); 
  });
 

// mega menu click script  
// var menu_count = 0;
// var menu_count1 = 0;
// $(document).on('click','.solutions_menu',function(){
//   if(menu_count == 0){
//     $('.mega_menu_mail').show();
//     $(this).addClass('active'); 
//     $('.drop_menu').removeClass('active'); 
//     $('.drop_down_menu').hide();
//     menu_count = 1;
//     menu_count1 = 0;
//   }else{ 
//     $('.mega_menu_mail').hide();
//     $(this).removeClass('active'); 
//     menu_count = 0
//   }
//   return false;
// });


// dorp down menu click  
// $(document).on('click','.drop_menu',function(){
//   if(menu_count1 == 0){
//     $('.drop_down_menu').show();
//     $('.mega_menu_mail').hide();
//     $('.solutions_menu').removeClass('active'); 
//     $(this).addClass('active'); 
//     menu_count1 = 1;
//     menu_count = 0
//   }else{ 
//     $('.drop_down_menu').hide();
//     $(this).removeClass('active'); 
//     menu_count1 = 0
//   }

//   return false;
// });

 
// mega menu hover script 
const menuItem = document.querySelector(".mega_show_at");
const megaMenu = document.querySelector(".mega_menu_mail");
 
menuItem.addEventListener("mouseenter", () => {
    megaMenu.style.display = "block"; 
    $('.drop_menu').removeClass('active'); 
    $('.drop_down_menu').hide();  
    $('.solutions_menu').addClass('active');
});

menuItem.addEventListener("mouseleave", () => {
    megaMenu.style.display = "none";    
    $('.solutions_menu').removeClass('active');
});

// drop down menu hover script 
const menuItem2 = document.querySelector(".drop_menu_at");
const megaMenu2 = document.querySelector(".drop_down_menu");
 
menuItem2.addEventListener("mouseenter", () => {
    megaMenu2.style.display = "block";  
    $('.mega_menu_mail').hide();
    $('.solutions_menu').removeClass('active'); 
    $('.drop_menu').addClass('active'); 
});

menuItem2.addEventListener("mouseleave", () => {
    megaMenu2.style.display = "none";  
    $('.drop_down_menu').hide();
    $('.drop_menu').removeClass('active'); 
});



// mobile menu script 
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


// mobile collaps menu script 
$(document).ready(function() { 
  $('.collaps_menu').hide();
 
  $('.menu_ul > li > a').click(function(event) { 
      if ($(window).width() < 992) { 
          event.preventDefault();
           
          $(this).next('ul').slideToggle('slow'); 
      }
  });
   
  $(window).resize(function() {
      if ($(window).width() >= 992) {
          $('.menu_ul ul').css('display', ''); 
      } else {
          $('.menu_ul ul').slideUp('slow');
      }
  });
}); 