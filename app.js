#!/usr/bin/env node
var getMonth = require('./lib/month');
var getYear = require('./lib/year');

var month = process.argv[2];
var year = process.argv[3];
var Zellers = require('./lib/zellers');

Zellers(month, year);
