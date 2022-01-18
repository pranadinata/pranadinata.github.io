var today = new Date();
var date1 = new Date(2020, 9, 1);
var date2 = new Date(today.getFullYear(), today.getMonth(),today.getDate());

var diff = new Date(date2.getTime() - date1.getTime());
let year_diff = diff.getUTCFullYear() - 1970;


// document.getElementById('year_').innerHTML = '2';
 
document.getElementById("year_").innerHTML = "whatever";
// console.log(diff.getUTCFullYear() - 1970);
// console.log(diff.getUTCMonth());
// console.log(diff.getUTCDate() - 1);


