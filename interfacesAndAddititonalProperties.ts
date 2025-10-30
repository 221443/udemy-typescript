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
const printVehicle = (vehicle: Vehicle) => {
  console.log(`Summary: ${vehicle.summary()}`);
};
printVehicle(oldCivic);

// Possible use of more generic interface
interface Reportable {
  summary(): string;
}

const oldCivic2 = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}, Carbonated: ${this.carbonated}, Sugar: ${this.sugar}`;
  },
};

const printSummary2 = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary2(oldCivic2);
printSummary2(drink);

export {};
