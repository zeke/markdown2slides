var test = require('tap').test
var markdown2slides = require('../')

test('parse standard markdown', function (t) {
    t.plan(1);
    t.equal(markdown2slides('md/standard.md'), 
      '<ol class="slides"><li><p>a</p></li><li><p>b</p></li><li><p>c</p></li></ol>');
});

test('parse markdown with extraneous hr tags', function (t) {
    t.plan(1);
    t.equal(markdown2slides('md/extraneous-hr-tags.md'), 
      '<ol class="slides"><li><p>slide 1</p></li><li><p>slide 2</p></li></ol>');
});