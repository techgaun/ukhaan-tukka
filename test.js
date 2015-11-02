import test from 'ava';
var ukhaan = require('./');
var jsonData = require('./ukhaan.json');

test('ukhaan() returns random ukhaan', t => {
  t.assert(ukhaan.ukhaan());
  t.assert(ukhaan.ukhaan() != ukhaan.ukhaan())
	t.end();
});

test('ukhaan.ukhaans return all ukhaans', t=> {
  t.assert(ukhaan.ukhaans.length === jsonData.length);
  t.end();
});
