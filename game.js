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
  speed: 256, // Movement speed in pixels
  x: 0,
  y: 0
  // Movement direction
};
var monster = {
  x: 0,
  y: 0
};
var monstersCaught = 0; // Counter

// PLAYER INPUT
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
  delete keysDown[e.keyCode];
}, false);

// NOTE: keyCode is deprecated

//NEW GAME
// Reset the game when the player catches a monster
var reset = function () {
  // This resets the hero's location
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // This randomises monster's location
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// UPDATE GAME OBJECTS
var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // Player holding down
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier; 
  }
  if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
  }

  // Are the hero and monster in the same position?

  if (
    hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    reset()
  }
};