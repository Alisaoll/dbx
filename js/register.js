
//登陆
$(document).ready(function(){
var clickimg_temp = false;
$(function(){
		changecontent();
	});
	//点击箭头切换内容
	function changecontent(){
		 var leftimg = $("#leftimg");
		 var img_index1 =  $("#img_index1");
		 var img_index2 =  $("#img_index2");
		 var content_index1 = $("#content_index1");	 
		 var content_index2 = $("#content_index2");	 
		leftimg.mouseover(function(){
			 $(this).attr("src","imgs/left_2.png");
			 });
		 leftimg.mouseout(function(){
			 $(this).attr("src","imgs/zuce5left.png");
			 });
		 leftimg.click(function(){
			 	if(!clickimg_temp){
				 clickimg_temp = true;
				 img_index2.animate({left:'0px'},'fast');
				 img_index1.animate({left:'-200px'},'fast');

				 content_index2.animate({left:'0px'},'fast');
				 content_index1.animate({left:'-375px'},'fast');
				 }else{
				 clickimg_temp = false;
				 img_index2.animate({left:'200px'},'fast');
				 img_index1.animate({left:'0px'},'fast');

				 content_index2.animate({left:'375px'},'fast');
				 content_index1.animate({left:'0px'},'fast');
				}
			 });
			 
		 var rightimg = $("#rightimg");
		 rightimg.mouseover(function(){
			 $(this).attr("src","imgs/right_2.png");
			 });
		 rightimg.mouseout(function(){
			 $(this).attr("src","imgs/zuce5right.png");
			 });
		 rightimg.click(function(){
			 if(!clickimg_temp){
				 clickimg_temp = true;
				 img_index2.animate({left:'0px'},'fast');
				 img_index1.animate({left:'-200px'},'fast');

				 content_index2.animate({left:'0px'},'fast');
				 content_index1.animate({left:'-375px'},'fast');
				 }else{
				 clickimg_temp = false;
				 img_index2.animate({left:'200px'},'fast');
				 img_index1.animate({left:'0px'},'fast');

				 content_index2.animate({left:'375px'},'fast');
				 content_index1.animate({left:'0px'},'fast');
				}
			 });
		 
		}	
});
