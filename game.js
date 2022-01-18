// CANVAS
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// BACKGROUND
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "img/background.png";

// GAME OBJECTS
var hero = {
  speed: 256, //Movement speed in pixels
  x: 0,
  y: 0
  //Movement direction
};
var monster = {
  x: 0,
  y: 0
};
var monstersCaught = 0; //Counter
