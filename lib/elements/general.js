var general = exports;

general.addProperty = function(k, v) {
  this.properties[k] = v;

  return this;
};

general.setPos = function(x, y) {
  this.properties.x = x || 0;
  this.properties.y = y || 0;

  return this;
};

general.source = function() {
  var properties = Object.keys(this.properties).map(function(i) {
    return i + '=' + JSON.stringify(this.properties[i].toString());
  }, this).join(' ');

  return '<' + this.name + ' ' + properties + ' />';
};

