var path = exports;

var data = {
  M: "moveTo",
  L: "lineTo",
  H: "horizontalLineTo",
  V: "verticalLineTo",
  C: "curveTo",
  S: "smoothCurveTo",
  Q: "quadraticBezierCurve",
  T: "smoothQuadraticBezierCurveTo",
  A: "ellipticalArc",
  Z: "closePath"
};

path.init = function() {
  this.properties.d = '';
  this.originalSource = this.source;

  Object.keys(data).forEach(function(i) {
    this[data[i]] = this.addData.bind(this, i);
    this[data[i] + 'Relative'] = this.addData.bind(this, i.toLowerCase());
  }, this);
};

path.addData = function(t) {
  var args = [].slice.call(arguments, 1);

  this.properties.d += ' ' + t + args.join(' ');

  return this;
};