// Javascript Document

$(function(){
    
   
   
   //오른쪽 menu_box ic_menu
	$(".ic_menu").on("click",function(){
	  $(".menu_box").fadeIn();
	});
	
	$(".menu_box .close").on("click",function(){
	  $(".menu_box").fadeOut();
	});
    
    //go_top
    
    $(window).scroll(function () { //화면 스크롤시 아래코드 실행
        var num = $(this).scrollTop(); // 스크롤값을 가져온다.
        if (num > 250) { //스크롤을 200 이상 했을시 보이고 이하는 감추기
            $(".top").css("display", "block");
            /*    $(".top").css("opacity","1");
                $(".logo").css("margin-top","10px"); */
        } else {
            $(".top").css("display", "none");
            /*    $(".top").css("opacity","0");
                $(".logo").css("margin-top","0px"); */
        }
    });
    
  // scroll top button
    var scrollTimeout;

    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop:0},500);
        return false;
    });

    $(window).scroll(function(){
        clearTimeout(scrollTimeout);
        if($(window).scrollTop()>400){
            scrollTimeout = setTimeout(function(){$('.scroll-top:hidden').fadeIn()},100);
        }
        else{
            scrollTimeout = setTimeout(function(){$('.scroll-top:visible').fadeOut()},100);    
        }
    });
    
    /* bookflip */
   
/****************************************************************************
//** Software License Agreement (BSD License)
//** Book Flip slideshow script- Copyright 2011, Will Jones (coastworx.com)
//** This Script is wholly developed and owned by CoastWorx.com
//** Copywrite: http://www.coastworx.com/
//** You are free to use this script so long as this coptwrite notices
//** and link back to http://www.coastworx.com stays intact in its entirety.
//** If you want to remove the link back to http://www.coastworx.com then purchase a licence.
//** You are NOT Permitted to claim this script as your own or
//** use this script for commercial purposes without the express
//** permission of CoastWorx Technologies!
//***************************************************************************/

pWidth=500; //width of each page
pHeight=482; //height of each page

numPixels=20;  //size of block in pixels to move each pass
pSpeed=15; //speed of animation, more is slower

startingPage="0";//select page to start from, for last page use "e", eg. startingPage="e"
allowAutoflipFromUrl = true; //true allows querystring in url eg bookflip.html?autoflip=5

pageBackgroundColor="#000";
pageFontColor="#ffffff";

pageBorderWidth="1";
pageBorderColor="#3D4D5D";
pageBorderStyle="solid";  //dotted, dashed, solid, double, groove, ridge, inset, outset, dotted solid double dashed, dotted solid

pageShadowLeftImgUrl ="black_gradient.png";
pageShadowWidth = 80;
pageShadowOpacity = 60;
pageShadow=1 //0=shadow off, 1= shadow on left page

allowPageClick=true; //allow page turn by clicking the page directly
allowNavigation=true; //this builds a drop down list of pages for auto navigation.
pageNumberPrefix="page "; //displays in the drop down list of pages if enabled

ini();
    
});