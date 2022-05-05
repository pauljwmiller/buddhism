var x = setInterval(function(){
var timer = 600;
var minutes = Math.floor(timer // 60);
var seconds = Math.floor(timer % 60);
index.getElementById("demo").innerHTML = minutes "minutes and " + seconds "seconds";
}