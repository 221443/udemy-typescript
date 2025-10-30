// Not using interface to define the structure of an object
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

const printVehicle = (vehicle: { name: string; year: number; dateOfManufacture: Date; broken: boolean; summary(): string }) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Date of Manufacture: ${vehicle.dateOfManufacture}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary()}`);
};
printVehicle(oldCivic);

// Using interface to define the structure of an object
interface Vehicle {
  name: string;
  year: number;
  dateOfManufacture: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle2 = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Date of Manufacture: ${vehicle.dateOfManufacture}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary()}`);
};
printVehicle2(oldCivic);

// Interfaces can be reused and extended, making them more flexible for complex structures.

export {};
