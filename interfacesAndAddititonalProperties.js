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
var printVehicle2 = function (vehicle) {
    console.log("Summary: ".concat(vehicle.summary()));
};
printVehicle2(oldCivic);
