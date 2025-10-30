// Not using interface to define the structure of an object
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary: "This is an old car",
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean; summary: string }) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary}`);
};
printVehicle(oldCivic);

// Using interface to define the structure of an object
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary: string;
}

const printVehicle2 = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary}`);
};
printVehicle2(oldCivic);

// Interfaces can be reused and extended, making them more flexible for complex structures.

export {};
