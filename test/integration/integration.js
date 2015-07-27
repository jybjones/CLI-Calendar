var should = require('chai').should();
var cp = require('child_process');

describe('CLI', function () {
  describe('Leap February', function () {
    it('should handle leap years', function (){
      //leap February 2 2012
      // var goalOutput = cp.execSync('cal 2 2012');
      // var output = cp.execSync('./cal 2 2012');
      // output.should.equal(goalOutput);
      // cp.exec('cal 2 2012', function(err, goalOutput) {
      //   cp.execFile('./cal 2 2012', function(err, output) {
      //     output.should.equal(goalOutput);
      //     done();
      //   });
    //or with function below, you can just do:
    testCal('2 2012');
      });

    it('should handle non-leap years', function() {
      //non leap 2/2014
      testCal('2 2014');
    });
  });
  describe('Month Lengths', function() {
    it('should handle a 4-week month', function() {
      // 2/2015
      testCal(' 2 2015');
    });
    it('should handle a 5-week month', function () {
      // 1/2015
    });
    it('should handle a 6-week month', function() {
      // 2/2015
    });
  });
  describe('Year', function(){
    it('should handle printing a full year', function(){
        // 2015
        testCal('2015');
    });
  });
  describe('Current Month', function(){
    it('should handle no argument', function(){
      // Current
      testCal();
    });
  });
  describe('Usage', function(){
    it('should print help for bad arguments', function(){
      // 1752
      // 13
      //asdf
      testCal('1752');
      testCal('13 2015');
      testCal('10000';)
    });
  });
    });


describe('CLI', function(){
  it('should thank me for downloading', function(){
    cp.execFile('./app.js', function(err, stdout) {
      stdout.should.equal('Thanks for downloading my app!\n');
      done();
    });
  });
});

function testCal(arg) {
  var sep = arg ? ' ' : '';
  var goal = cp.execSync('cal' + sep + arg).toString();
  console.log(goal);
  var output = cp.execSync('/.cal.js' + sep + arg).toString();
  output.should.equal(goal);
  // cp.exec(cmd, function(err, goal) {
  //   cp.exec('./' + cmd, function (err, output) {
  //     output.should.equal(goal);
  //     done();
}
