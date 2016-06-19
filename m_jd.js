$(function(){
//滑动
	var swiper = new Swiper('.swiper-container');
//加载延迟
	var panduan=false;
	$('.floor .gb').click(function(){
		$('.floor').hide();
		panduan=true;
	})
	$('.cebian0 img').hover(function(){
		$('.cebian0').animate({right:'0'})
	},function(){
		$('.cebian0').animate({right:'-3%'})
	})


	$('header input').click(function(){
		$('.yincang').show()
	})
	$('.cebian1').hide();
	setInterval(function(){
		var y=$('body').scrollTop();
		if(y>500){
            $('.cebian1').show()

		}else{
            $('.cebian1').hide()

		}
	},100)
    setInterval(function(){
    	var y=$('body').scrollTop();
    	if(!panduan&&y<50){
    		$('header').css({top:'50px','background-color':'rgba(255,255,255,0)'})

    	}else{
    		$('header').css({top:'0px','background-color':'rgba(0,0,0,0.8)'})
    	}

    },20)

})