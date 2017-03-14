// JavaScript Document

$(function(){
	$(".nav p a").click(function(){
		
		$(".nav p span").slideUp();
		$(this).siblings("span").slideToggle();
		
	});
	$(".nav p span em").click(function(){
		
		$(this).parent("span").siblings("a").text($(this).text());	
		$(".nav p span").slideUp();
		
	});
	
		
	
});	





























