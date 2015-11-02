#!/usr/bin/env node

'use strict';

var meow = require('meow');
var ukhaan = require('./');

var cli = meow({
  help: [
    'Examples',
    ' $ ukhaan-tukka',
    '   घरको बाघ बनको स्याल!',
    ' $ ukhaan-tukka --all',
    '   नहुनु मामा भन्दा कानै मामा जाती ।',
    '   ...',
    '',
    ' Options',
    ' --all   Get all ukhaan tukka instead of random single ukhaan'
  ]
});

console.log(cli.flags.all ? ukhaan.ukhaans.join('\n') : ukhaan.ukhaan());
