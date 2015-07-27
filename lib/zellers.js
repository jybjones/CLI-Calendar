module.exports = function zellers(month, year) {
  "use strict";
    var q = 1;
    var m = parseInt(month, 10);
    var y = year;
    if (month < 3){
      m += 12;
      y -= 1;
    }

    console.log('y', y);
    console.log(typeof(m));
    var k = y%100;
    console.log('k', k);
    var j = Math.floor(y/100);
    console.log('j', j)
    // var q = day;
    return (q + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k/4) + Math.floor(j/4) + (5 * j)) % 7;
};


// h is the day of the week (0 = Saturday,  6 = Friday)
// // q is the day of the month
// // m is the month (3 = March, 4 = April, 14 = February)
// // K the year of the century (year \mod 100).
// // J is the century
