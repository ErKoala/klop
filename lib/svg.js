var elements = require('./elements'),
    eol = require('os').EOL,
    utile = require('utile');

module.exports = function() {
  var image = {
    elements: [],

    element: function(name, opts) {
      this.elements.push(
        elements[name](opts)
      );

      return this.elements[this.elements.length - 1]
    },

    render: function() {
      var source = this.elements.map(function(element) {
        return element.source();
      }).join('\n');

      return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">' + eol + source + eol + '</svg>';
    }
  };

  utile.each(elements, function(v, k) {
    image[k] = image.element.bind(image, k);
  });

  return image;
};