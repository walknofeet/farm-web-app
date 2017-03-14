var HTML = document.documentElement;
HTML.style.fontSize = (window.innerWidth / 720) * 100 + "px";
window.onresize = function() {
	if(window.innerWidth <= 720) {
		HTML.style.fontSize = (window.innerWidth / 720) * 100 + "px";
	} else {
		HTML.style.fontSize = "100px";
	}
}

var nav = document.getElementById("nav").children;

function chosen(obj) {
	for(var i = 0; i < nav.length; i++) {
		nav[i].className = "";
	}
	obj.className = "curr";
}