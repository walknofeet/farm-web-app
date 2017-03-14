var DATE1 = document.getElementById("DATE1");
var DATE2 = document.getElementById("DATE2");
var myDate = new Date();
DATE1.innerHTML = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " " + myDate.getHours() +
	":" + myDate.getMinutes() + ":" + myDate.getSeconds();
DATE2.innerHTML = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " " + myDate.getHours() +
	":" + myDate.getMinutes() + ":" + myDate.getSeconds();

var evaluation = document.getElementById("evaluation");
var allLi = evaluation.children;
var checkAll = document.getElementById("checkAll");

checkAll.onclick = function() {

	if(checkAll.innerHTML == "查看全部评价") {
		for(var i = 0; i < allLi.length; i++) {
			allLi[i].className = "curr";
		}
		checkAll.innerHTML = "关闭所有评价";
	} else {
		for(var i = 0; i < allLi.length; i++) {
			allLi[i].className = null;
		}
		allLi[0].className = "curr";
		checkAll.innerHTML = "查看全部评价";
	}

}