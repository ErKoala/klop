var line = exports;

line.setPos = function(x1, y1, x2, y2) {
  this.properties.x1 = x1;
  this.properties.y1 = y1;
  this.properties.x2 = x2;
  this.properties.y2 = y2;

  return this;
};