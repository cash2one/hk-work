/*@charset "gb2312";*/

$(function(){
	 var wechat_developer_reload = function(){
		$('body').append('<input type="button" value="refresh" onclick="window.location.reload();"/>');	 
	} 
	//wechat_developer_reload();
	
	if (window.console) {
		console.info(">>Join us? Email：developer@qietu.com");
	}		
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height',$(window).height());
	
	$('.header .nav i').click(function(){
		if($('.header .nav').hasClass('selected')){
			$('.header .nav').removeClass('selected');
		}				
		else{
			$('.header .nav').addClass('selected');
		}
	})
	
	$('.cp-nav .nav').click(function(){
		if($('.cp-nav .subnav').hasClass('selected')){
			$('.cp-nav .subnav').removeClass('selected')
			
		}
		else{
			$('.cp-nav .subnav').addClass('selected')
		}
	})
	
	$('.xwzx .head li').click(function(){
		$('.xwzx .head li').removeClass('selected');
		$(this).addClass('selected');
		
		$('.xwzx .body ul').hide().eq($(this).index()).show();
		return false;
	})
})

