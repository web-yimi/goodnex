$(document).ready(function(){
	$('.top .nav .nav-list .list').each(function(index){
		$(this).hover(function(){
			$('.top .nav .nav-list .hidden').eq(index).css('display','block')
		},function(){
			$('.top .nav .nav-list .hidden').eq(index).css('display','none')
		})
	})
	$('.top-hidden .con .right a').each(function(index){
		$(this).hover(function(){
			$('.top-hidden .con .right a .hidden').eq(index).css('display','block')
		},function(){
			$('.top-hidden .con .right a .hidden').eq(index).css('display','none')
		})
	})
	$(window).scroll(function(){
		var top=$(window).scrollTop();	
		console.log(top)
		if(top>=400){
			$('.top-hidden').show()
		}else{
			$('.top-hidden').hide()
		}
	})
	//选项卡

	$('.section-four .container .row .col-lg-8 .left .select li').each(function(index){
		$(this).click(function(){
			$('.section-four .container .row .col-lg-8 .left .select-con li').each(function(){
				$(this).removeClass('selected-con')
				$('.section-four .container .row .col-lg-8 .left .select li').removeClass('selected')
			})
			$('.section-four .container .row .col-lg-8 .left .select-con li').eq(index).addClass('selected-con')
			$('.section-four .container .row .col-lg-8 .left .select li').eq(index).addClass('selected')
		})
	})
	//banner轮播
	var n=0;
	var next=0;
	var t=setInterval(move,5000);
	function move(type){
		var type=type||'right';
		if(type=='right'){
			next=n+1;
			if(next>=jQuery('.banner .container .row li').length){
				next=0;
			}
		}else if(type=='left'){
			next=n-1;
			if(next<0){
				next=jQuery('.banner .container .row li').length-1;
			}	
		}
		jQuery(".banner .container .row li").eq(n).hide().end().eq(next).show()
		n=next;
		}

})
