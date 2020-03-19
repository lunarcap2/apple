// Javascript Document

$(function(){
    
    // 대메뉴 gnb
	$(".gnb>.gmenu").on("mouseover",function(){
	  $(this).find(".submenu").stop().fadeIn(300);
	  $(".menu_back").stop().fadeIn(300);
    });
   $(".gnb>li").on("mouseleave",function(){
	  $(this).find(".submenu").stop().fadeOut(300);
	  $(".menu_back").stop().fadeOut(300);
   });
    
    //login ic_login
    $(".menu_btn").on("click",function(){
       $(".login_list").slideToggle(200); 
    });
    
    //search
    $(".m_search").on("click",function(){
       $(".search_box").fadeIn(); 
    });
    
    $(".search_box .close").on("click",function(){
       $(".search_box").fadeOut(); 
    });
    
    /* mobile X btn*/
    $('.menu_btn').click(function(){
				$('p.x1').toggleClass('active');
				$('p.x2').toggleClass('active');
				$('p.x3').toggleClass('active');
				$('.back').toggleClass('active');
				$('.menu').toggleClass('active');
  
});
    
    // mobile submenu
    $(".list>li").mouseover(function(){
       $(this).find(".m_submenu").stop().slideDown(); 
    });
    $(".list>li").mouseleave(function(){
       $(this).find(".m_submenu").stop().slideUp(); 
    });
    
    });