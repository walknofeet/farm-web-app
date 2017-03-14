var HTML = document.documentElement;
HTML.style.fontSize = (window.innerWidth/720)*100+"px";
window.onresize = function(){
	if(window.innerWidth <= 720){
		HTML.style.fontSize = (window.innerWidth/720)*100+"px";
	}else{
		HTML.style.fontSize = "100px";
	}	
}

var main = document.getElementById("main");
for(var i = 0 ; i < 10 ; i++ ){
	main.innerHTML += '<div><img src="../images/farm_list/farm_list_pic1.jpg"/><span>'
					+'<em>周末农场</em><i>地址：陕西省西安市灞桥区西安市灞桥区</i>'
					+'<a href="javascript:void(0)">查看详情</a></span></div>';
}




















