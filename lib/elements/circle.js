var circle = exports;

circle.setRadius = function(r) {
  this.properties.r = r;

  return this;
};

circle.setPos = function(x, y) {
  this.properties.cx = x;
  this.properties.cy = y;

  return this;
};