/**
 * Created by Administrator on 2016/8/30.
 */


var layout = '<div class="box" id="box"></div>';
layout += '<div class="loading" id="loading"></div>';
document.write(layout);

setTimeout(function(){
        document.getElementById('loading').style.display="none";
        document.getElementById('box').style.display="none";
    },3000);
setTimeout(function () {
    document.getElementById('loading').style.display="block";
    document.getElementById('box').style.display="block";
},5000);




