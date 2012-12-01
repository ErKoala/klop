var fs = require('fs')
    expect = require('expect.js'),
    svg = require('../');

describe('#text', function() {
  it('should generate text content correctly', function() {
    var img = svg();

    img.element('text')
      .fill('red')
      .inner('test')

      .tspan('First line', {
        x: 10,
        y: 45
      })

      .tspan('Second line', {
        x: 10,
        y: 70
      })

      .setPos(10, 20);

    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-text.svg', 'utf-8'));
  });
});

describe('#circle', function() {
  it('should generate circle content correctly', function() {
    var img = svg();

    img.element('circle')
      .width(30)
      .height(30)
      .setRadius(20)
      .setPos(100, 22);

    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-circle.svg', 'utf-8'));
  });
});

describe('#ellipse', function() {
  it('should generate ellipse content correctly', function() {
    var img = svg();

    img.element('ellipse')
      .width(30)
      .height(30)
      .setRPos(100, 50)
      .setPos(100, 22);

    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-ellipse.svg', 'utf-8'));
  });
});

describe('#rect', function() {
  it('should generate rect content correctly', function() {
    var img = svg();

    img.element('rect')
      .width(30)
      .height(30)
      .setPos(100, 22);

    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-rect.svg', 'utf-8'));
  });
});

describe('#line', function() {
  it('should generate line content correctly', function() {
    var img = svg();

    img.element('line', {'stroke-width': '20'})
      .stroke('red')
      .fill('lime')
      .setPos(100, 100, 200, 200);

    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-line.svg', 'utf-8'));
  });
});

describe('#polygon', function() {
  it('should generate polygon content correctly', function() {
    var img = svg();

    img.element('polygon')
      .stroke('red')
      .fill('lime')
      .points(220, [10, 300], [210, 170], [250, 123], 234);


    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-polygon.svg', 'utf-8'));
  });
});

describe('#path', function() {
  it('should generate path content correctly', function() {
    var img = svg();

    img.element('path')
      .stroke('red')
      .fill('none')
      .moveTo(100, 350)
      .quadraticBezierCurveRelative(150, -300, 300, 0);

    expect(img.render()).to.be(fs.readFileSync(__dirname + '/test-path.svg', 'utf-8'));
  });
});