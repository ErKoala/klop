var ellipse = exports;

ellipse.setRPos = function(x, y) {
  this.properties.rx = x;
  this.properties.ry = y;

  return this;
};

ellipse.setPos = function(x, y) {
  this.properties.cx = x;
  this.properties.cy = y;

  return this;
};