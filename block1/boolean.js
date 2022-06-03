var boolean_true = true;
var boolean_false = false;

var a = '10';
var b = 10;

var result = a > b;
console.log(result);

console.log (a === b);

var range_start = 0;
var range_final = 100;
var number_to_compare = 48;

console.log(number_to_compare > range_start && number_to_compare < range_final);

var work = true;
var final_exam = 10;
var attendance = false;

console.log((work || final_exam >= 5) && !attendance);

// Exercise class
// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan
// ------a--------c-----b------d-----------

var a = 5;
var b = 20;
var c = 10;
var d = 25;

console.log(((c > a && c < b) || (d > a && d < b)) || ((a > c && a < d) || (b > c && b < d)));
