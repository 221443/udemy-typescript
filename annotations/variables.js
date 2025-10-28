"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Here are annotations used too heavily, when i have all the thing on one line
// the annotation is not needed. Check the code below for rules when to use annotations.
var apples = 5;
var speed = "fast";
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Array
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function
var logNumber = function (i) {
    console.log(i);
};
//When to use annotations?
//1) Function that return the "any" type.
var json = '{"x":10,"y":20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
//2) When we declare a variable on one line, than initialise it later.
var words = ["red", "green", "blue"];
var foundWord; // TypeScript infers this as boolean from the assignment below
for (var i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}
// To see the "any" type issue, try this:
var foundWord2; // This would be 'any' but no error until...
console.log(foundWord2); // NOW you'll see an error: Variable 'foundWord2' implicitly has an 'any' type
// The correct annotation for the original example:
var foundWord3;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord3 = true;
    }
}
