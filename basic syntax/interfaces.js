"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Not using interface to define the structure of an object
var oldCivic = {
    name: "civic",
    year: 2000,
    dateOfManufacture: new Date(),
    broken: true,
    summary: function () {
        return "\n    Name: ".concat(this.name, "\n    Year: ").concat(this.year, "\n    Date of Manufacture: ").concat(this.dateOfManufacture, "\n    Broken: ").concat(this.broken);
    },
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Date of Manufacture: ".concat(vehicle.dateOfManufacture));
    console.log("Broken: ".concat(vehicle.broken));
    console.log("Summary: ".concat(vehicle.summary()));
};
printVehicle(oldCivic);
var printVehicle2 = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Date of Manufacture: ".concat(vehicle.dateOfManufacture));
    console.log("Broken: ".concat(vehicle.broken));
    console.log("Summary: ".concat(vehicle.summary()));
};
printVehicle2(oldCivic);
