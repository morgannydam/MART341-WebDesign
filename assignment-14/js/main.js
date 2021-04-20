
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(300, 2000);
ctx.stroke();

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.moveTo(200, 100);
ctx.lineTo(900, 1000);
ctx.stroke();

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 350, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(215, 170, 160, 120, 122 * Math.PI);
ctx.stroke();

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(315, 170, 60, 20, 22 * Math.PI);
ctx.stroke();

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.fillText("Hello World", 55, 95);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello", 300, 195);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "100px Arial";
ctx.strokeText("Hello", 30, 80);


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "100px Arial";
ctx.strokeText("Hello", 150, 380);
