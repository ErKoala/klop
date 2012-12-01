var polygon = exports;

polygon.points = function() {
  var args = [].slice.call(arguments),
      points = args.map(function(arg) {
        if (Array.isArray(arg))
          return arg.shift() +' ' + arg.shift()
        else
          return arg
      }).join(',');

  this.properties.points = points;

  return this;
};