var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: "This is an old car",
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Broken: ".concat(vehicle.broken));
    console.log("Summary: ".concat(vehicle.summary));
};
printVehicle(oldCivic);
var printVehicle2 = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Broken: ".concat(vehicle.broken));
    console.log("Summary: ".concat(vehicle.summary));
};
printVehicle2(oldCivic);
// Interfaces can be reused and extended, making them more flexible for complex structures.
