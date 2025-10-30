"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carMakers = ["ford", "toyota", "chevy"];
var carMakersAnnotated = ["ford", "toyota", "chevy"];
// const arrayAny: any[]
var arrayAny = [];
// const dates: Date[]
var dates = [new Date(), new Date()];
// const carsByMake: string[][]
var carsByMake = [["f140"], ["corolla"], ["camaro"]];
// Help with inference when extracting values - no annotation needed when declaring
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
// carMakers.push(100); // Error
// Help with 'map'
carMakers.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
var importantDatesInferred = [, new Date(), "2030-10-10"];
var importantDates = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
