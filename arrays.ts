const carMakers = ["ford", "toyota", "chevy"];

const carMakersAnnotated: string[] = ["ford", "toyota", "chevy"];

// const arrayAny: any[]
const arrayAny = [];

// const dates: Date[]
const dates = [new Date(), new Date()];

// const carsByMake: string[][]
const carsByMake = [["f140"], ["corolla"], ["camaro"]];

// Help with inference when extracting values - no annotation needed when declaring
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // Error

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
}
);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100); // Error

export {};
