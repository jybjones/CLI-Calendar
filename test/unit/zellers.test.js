#!/usr/bin/env node

var should = require('chai').should();
var zellers = require(process.cwd() + '/lib/zellers.js');
var month = require(process.cwd() + '/lib/month.js');
var cp = require('child_process');


describe('zellers', function (){
 it('should return correct weekday for July 2015', function(){
   zellers(3, 2015).should.equal(1);
 });
});

