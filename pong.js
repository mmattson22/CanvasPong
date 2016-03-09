var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

var c = document.createElement('canvas');
var width = 400;
var height = 600;
c.width = width;
c.height = height;
var ctx = c.getContext('2d');

window.onload = function() {
  document.body.appendChild(c);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

var update = function() {
};

var render = function() {
  ctx.fillStyle = "#7F7F7F";
  ctx.fillRect(0, 0, width, height);
};

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

Paddle.prototype.render = function() {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

function Player() {
   this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer() {
  this.paddle = new Paddle(175, 10, 50, 10);
}

Player.prototype.render = function() {
  this.paddle.render();
};

Computer.prototype.render = function() {
  this.paddle.render();
};

var player = new Player();
var computer = new Computer();

var render = function() {
  ctx.fillStyle = "#7F7F7F";
  ctx.fillRect(0, 0, width, height);
  player.render();
  computer.render();
};
