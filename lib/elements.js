var utile = require('utile'),
    general = require('./elements/general');

var params = ['fill', 'stroke', 'width', 'height', 'transform', 'id'],
    elements = exports;

['circle', 'rect', 'ellipse', 'line', 'polygon', 'path', 'text'].forEach(function(i) {
  elements[i] = function(opts) {
    var element = utile.clone(general);
    
    element.properties = opts || {};
    element.name = i;

    params.forEach(function(i) {
      element[i] = element.addProperty.bind(element, i);
    });

    try {
      element = utile.mixin(element, require('./elements/' + i));
    } catch(_) {}

    if (typeof element.init === 'function')
      element.init();

    return element;
  };
});