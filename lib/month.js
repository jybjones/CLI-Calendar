#!/usr/bin/env node
var zellers = require('./zellers');

var month = {

};


function dayofweek(day, month, year) {
    var century = Math.floor(year / 100);
    var yr = year % 100;

    if (month <= 2) {
        month += 10;
        --year;
    }
    else
      month -= 2;

    return (Math.floor((26 * month - 2) / 10) +
      day + yr +
      Math.floor(yr / 4) +
      Math.floor(century / 4) +
      203 - 2 * century) % 7;
}

module.exports = month;

// Get last day of the month.
// function getmaxday(month, year) {
//     var monthlen = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     var maxday = monthlen[month - 1];
//     if (month == 2 && leapyear(year))
//   ++maxday;
//     return maxday;
// }

// // console.log('Today is', ());
// function monthname(month) {
//     var monthnames = [
//   "January", "February", "March",
//   "April", "May", "June",
//   "July", "August", "September",
//   "October", "November", "December"];
//     return monthnames[month - 1];
// }

// function dow() {
//   var dow = int((date + ((13 * (month + 1)) / 5) + k + int(k / 4) + int(j / 4) + (5 * j)) % 7);
//     if (dow === 1) {
//       day = "Sunday";
//     } else if (dow === 2) {
//       day = "Monday"
//     } else if (dow == 3) {
//       day = "Tuesday"
//     } else if (dow === 4) {
//        day = "Wednesday"
//     } else if (dow === 5) {
//       day = "Thursday"
//     } else if (dow === 6) {
//       day = "Friday"
//     } else (day = "Saturay")
//     return day
// }
