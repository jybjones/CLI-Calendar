#!/usr/bin/env node

var should = require('chai').should();
var month = require(process.cwd() + '/lib/month.js');


describe('zellers', function (){
 var zellers = require(process.cwd() + '/lib/zellers.js');
 it('should return correct weekday for July 2015', function(){
   zellers(3, 2015).should.equal(1);
 });
});

