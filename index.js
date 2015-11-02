'use strict';

var uniqueRandomArray = require('unique-random-array');
var ukhaans = require('./ukhaan.json');

exports.ukhaans = ukhaans;
exports.ukhaan = uniqueRandomArray(ukhaans);
