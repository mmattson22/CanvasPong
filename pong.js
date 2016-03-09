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
