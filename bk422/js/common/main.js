$(function(){
	var winH=$(window).height(),
		winW=$(window).width(),
		spnavHeight=$(".sp-nav").outerHeight(),
	 	$navHeight=$(".sp-nav").height(),
		$spnavFooterHeight=$("#spnavFooterHeight").height(),
		heightPath=winH-$navHeight-$spnavFooterHeight;



	var sp767={
		_slider_nav_height:function(){
		$(".sp-slider-nav").css({"top":spnavHeight+'px'});//content对浮动导航的距离
		$("#nav").height($navHeight);//导航条高度
		// $(".discovery-wrap,.tech-wrap,.cooperate-wrap").find("#main-content").css("padding-top",spnavHeight+h5Height);	//支撑最小高度
		},
		_slider_nav_animation:function(){
			$(".hanBer").click(function(){
				$(this).find('p').each(function(){
					$(this).toggleClass("p-nth-child"+$(this).index()+"");
				})						
				$(".sp-slider-nav").fadeIn();
				$(".sp-slider-nav").toggleClass('sp-slider-nav-active');
			});
		}
	}
	//屏幕宽度小于768执行
	if(winW<768){												
		sp767._slider_nav_height();
		sp767._slider_nav_animation();
	//手机导航条跟随
	// var spslidernavHeight=$(".sp-slider-nav").height();
	// $(window).scroll(function(){
	// 	var scrollDis=$(window).scrollTop(),
	// 		judgeDis=spslidernavHeight+spnavHeight;
	// 	if(scrollDis>judgeDis){
	// 		$(".sp-nav").addClass('sp-nav-track');
	// 	}
	// 	else if(scrollDis==0){
	// 		$(".sp-nav").removeClass('sp-nav-track');
	// 	}
	// });
	/*三角形返回顶部*/
	$(window).scroll(function(){
		var $winScroll=$(window).scrollTop();
		
		if($winScroll>winH){
			$(".triangle").fadeIn();
		}
		else{
			$(".triangle").fadeOut();
		}
		})
	$(".triangle").click(function(){
		$('html,body').animate({
			scrollTop:"0px"
		},200)
	})
	}
	

	
});
