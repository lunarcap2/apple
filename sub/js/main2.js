/* Javascript Document */

$(function(){
    
    //section 마다 높이값 맞춤.		
	var ht = $(window).height();		
	$("section").height(ht);
		
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});
	
	
//header_menu 
var nav = $('.header_menu');
    var navoffset = $('.header_menu').offset();  
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  
            nav.css('position','fixed').css('top',0).css('background','rgba(38,24,18,1');
			$(".logo2").css("display","block");
        }else {
            nav.css('position','absolute').css('top',100).css('background','transparent'); 
			$(".logo2").css("display","none");
        }
    });
    
    /* submenu */
    $(function(){
    $(".gnb>li").on("mouseover",function(){
        $(".gnb>li").find(".submenu").stop().slideDown();
        $(".menu_back").stop().slideDown();
    });
    $(".gnb>li").on("mouseleave",function(){
        $(".gnb>li").find(".submenu").stop().slideUp();
        $(".menu_back").stop().slideUp();
    });
});
    
	
	
	
	/* menu li on */
	$(window).on("scroll",function(){		
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
						
		for(var i=1; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb>li").removeClass();
				$(".gnb>li").eq(i).addClass("on");
			};
		}								
	});
	
	
	/* menu li on 오른쪽 점*/
	$(window).on("scroll",function(){		
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
						
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			};
		}								
	});


//section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
		
		//마우스 휠을 올렸을때	
          if (delta > 0) {  			
             var prev = $(this).prev().offset().top;			
			 $("html,body").stop().animate({"scrollTop":prev},600);
			 
		//마우스 휠을 내렸을때	 
          }else if (delta < 0) {  			
			 var next = $(this).next().offset().top;			 
			 $("html,body").stop().animate({"scrollTop":next},600);			          }          
     });
    
});