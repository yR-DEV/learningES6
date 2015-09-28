"use strict";

var evens = [1, 2, 3, 4];
var squared = evens.map(function (v) {
  return v * v;
});
console.log(squared); //-> [ 1, 4, 9, 16 ]
