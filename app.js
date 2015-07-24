#!/usr/bin/env node
var getMonth = require('./lib/month');
var getYear = require('./lib/year');

var month = process.argv[2];
var year = process.argv[3];
var Calendar = require('./lib/zellers');

Calendar.zellers(month, year);
