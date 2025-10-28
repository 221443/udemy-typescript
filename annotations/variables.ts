// Here are annotations used too heavily, when i have all the thing on one line
// the annotation is not needed. Check the code below for rules when to use annotations.
const apples: number = 5;
let speed: string = "fast";

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations?
//1) Function that return the "any" type.
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

//2)

export {};
