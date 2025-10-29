// Arrow Function
var addArrowFunction = function (a, b) {
    return a + b;
};
console.log(typeof addArrowFunction);
// Arrow Function with Implicit Return
var addAFIR = function (a, b) { return a + b; };
console.log(typeof addAFIR);
// Function Expression
var addFE = function (a, b) {
    return a + b;
};
console.log(typeof addFE);
// Function Declaration
function addFD(a, b) {
    return a + b;
}
console.log(typeof addFD);
var addFTA = function (a, b) {
    return a + b;
};
console.log(typeof addFTA);
var addFI = function (a, b) {
    return a + b;
};
console.log(typeof addFI);
/*
Key Differences:
 - Arrow functions (=>) don't have their own this binding
 - Function declarations are hoisted, so they can be called before they're defined
 - Function expressions are not hoisted
 - Type aliases and interfaces allow you to reuse function signatures across your codebase
 - Implicit return (option 2) works only for single-expression functions
*/
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
var logger = function (message) {
    console.log(message);
};
// Not used often. "never" tells us that the function will never reach the return statement
var throwError = function (message) {
    throw new Error(message);
};
// If it is possible that the function will return something, the retrun type should written
var throwErrorWithRetrunTypeString = function (message) {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
