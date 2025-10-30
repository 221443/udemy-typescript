"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.color = "red";
    }
    Vehicle.prototype.getColor = function () {
        return this.color;
    };
    Vehicle.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehicle.prototype.printColor = function () {
        console.log("This vehicle's color is: " + this.getColor());
    };
    Vehicle.prototype.drive = function () {
        console.log("Driving...");
    };
    Vehicle.prototype.honk = function () {
        console.log("Beep beep!");
    };
    Vehicle.prototype.honkPrivate = function () {
        console.log("Beep beep! (from private method)");
    };
    Vehicle.prototype.honkPrivateCaller = function () {
        this.honkPrivate();
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, wheels) {
        var _this = _super.call(this) || this;
        //this.color = color; // Error: Property 'color' is private and only accessible within class 'Vehicle'.
        _this.setColor(color); // Use public setter to set color
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.getWheels = function () {
        return this.wheels;
    };
    Car.prototype.honkProtected = function () {
        console.log("Car honk (protected)!");
    };
    Car.prototype.honkProtectedCaller = function () {
        this.honkProtected();
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle();
vehicle.printColor();
vehicle.drive();
vehicle.honk();
//vehicle.honkProtected(); // Error: Property 'honkProtected' is protected and only accessible within class 'Vehicle' and its subclasses.
vehicle.honkPrivateCaller(); // This works because it's called from a public method within the class.
var car = new Car("blue", 4);
car.printColor();
car.drive();
car.honk();
car.honkPrivateCaller();
car.honkProtectedCaller(); // This works because it's called from a public method within the class.
console.log("Car wheels: ".concat(car.getWheels()));
