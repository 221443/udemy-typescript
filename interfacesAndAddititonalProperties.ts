// If we use only the properties defined in the interface, TypeScript
// allows us to pass objects with additional properties.
interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  dateOfManufacture: new Date(),
  broken: true,
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Date of Manufacture: ${this.dateOfManufacture}
    Broken: ${this.broken}`;
  },
};

// The function have to use only the properties defined in the interface. 
const printVehicle2 = (vehicle: Vehicle) => {
  console.log(`Summary: ${vehicle.summary()}`);
};
printVehicle2(oldCivic);


export {};
