"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oldCivic = {
    name: "civic",
    year: 2000,
    dateOfManufacture: new Date(),
    broken: true,
    summary: function () {
        return "\n    Name: ".concat(this.name, "\n    Year: ").concat(this.year, "\n    Date of Manufacture: ").concat(this.dateOfManufacture, "\n    Broken: ").concat(this.broken);
    },
};
// The function have to use only the properties defined in the interface.
var printVehicle = function (vehicle) {
    console.log("Summary: ".concat(vehicle.summary()));
};
printVehicle(oldCivic);
var oldCivic2 = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name, ", Year: ").concat(this.year, ", Broken: ").concat(this.broken);
    },
};
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "Color: ".concat(this.color, ", Carbonated: ").concat(this.carbonated, ", Sugar: ").concat(this.sugar);
    },
};
var printSummary2 = function (item) {
    console.log(item.summary());
};
printSummary2(oldCivic2);
printSummary2(drink);
