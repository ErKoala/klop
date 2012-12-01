var text = exports;

text.init = function() {
  this.content = '';
};

text.inner = function(c) {
  this.content += c;

  return this;
};

this.tspan = function(c, p) {
  var properties = Object.keys(p).map(function(i) {
    return i + '=' + JSON.stringify(p[i].toString());
  }).join(' '); // from #source

  this.content += '<tspan ' + properties + '>' + c + '</tspan>';

  return this;
};

this.textPath = function(c, p) {
  var properties = Object.keys(p).map(function(i) {
    return i + '=' + JSON.stringify(p[i].toString());
  }).join(' '); // from #source

  this.content += '<textPath ' + properties + '>' + c + '</textPath>';

  return this;
};

text.source = function() {
  var properties = Object.keys(this.properties).map(function(i) {
    return i + '=' + JSON.stringify(this.properties[i].toString());
  }, this).join(' '); // from original #source

  return '<text ' + properties + '>' + this.content + '</text>';
};