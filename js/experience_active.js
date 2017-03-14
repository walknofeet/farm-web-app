var HTML = document.documentElement;
HTML.style.fontSize = (window.innerWidth / 720) * 100 + "px";
window.onresize = function() {
	if(window.innerWidth <= 720) {
		HTML.style.fontSize = (window.innerWidth / 720) * 100 + "px";
	} else {
		HTML.style.fontSize = "100px";
	}
}



var mainCont = document.getElementById("main_cont");
for( var i = 0 ; i <8 ; i++ ){
	mainCont.innerHTML += '<li><a href="javascript:void(0)" class="img"><img src="../images/experience/e_pic1.jpg"/>'
					   + '</a><span><p><em>水牛耕地</em><i>200元</i><b><a href="javascript:void(0)" class="invite">邀请好友</a>'
					   + '<a href="javascript:void(0)" class="join">参与报名</a>	</b></p><strong><em>周末农场</em>'
					   + '<i>地址：陕西省西安市灞桥区西安市灞桥区</i></strong></span><dfn><img src="../images/experience/camera.png"/></dfn></li>';
}







