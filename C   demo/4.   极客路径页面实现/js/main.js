var jkcommon={
	init:function(){
		this.lessImgShow();
	},
	stopEventBubble:function(event){
		var e=event;
		if (e) {
			e.stopPropagation();
		}
	},
	lessImgShow:function(){
		$('.learnimg-box').bind("mouseover",function(e){
			var _pop=$(this).find('.img-pop');
			$(this).css({border:"2px solid #1abc9c",width:"226px",height:"226px"});
			TweenMax.to(_pop,0.5,{top:0,ease:Bounce.easeOut});
			jkcommon.stopEventBubble(e);			
		})

		$(document).bind("mouseover",function(){
			$('.learnimg-box').css({border:"none",with:"230px",height:"230px"});
			var _pop=$(this).find(".img-pop");
			TweenMax.to(_pop,0.5,{top:230,ease:Linear.easrNone});
		})
	}
}

$(function(){
	jkcommon.init();
});