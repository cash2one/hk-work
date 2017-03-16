// JavaScript Document
$(function(){
	
	

	var tempw="20px";
	
	$("#section01 .lsec01 li").each(function(index, element) {
		
        $(this).hover(
			function(){
				var that=this;
				$(that).css({zIndex:"10"});
				$(that).siblings().stop().animate({opacity:"0.8"},"100");
			},
			function(){
				var that=this;
				$(that).css({zIndex:index});
				$(that).siblings().stop().animate({opacity:"1"},"100");
			}
		);
    });
	
		$("#section01 .lsec01 ul").hover(
			function(){
				
				for(var i=5;i>=0;i--){
					var j=5-i;
					$("#section01 .lsec01 li").eq(i).css({left:(160*j)+"px"});
				}

			},
			function(){
				for(var i=5;i>=0;i--){
					
					$("#section01 .lsec01 li").eq(i).css({left:(60*i)+"px"});
				}
			}
		);
	});
		
		
