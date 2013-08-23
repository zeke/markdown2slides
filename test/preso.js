var test = require('tap').test
var preso = require('../')

test('parse article', function (t) {
    t.plan(1);
    t.equal(preso('articles/foo.md'), '<ol><li><p>slide 1</p></li><li><p>slide 2</p></li></ol>');
});