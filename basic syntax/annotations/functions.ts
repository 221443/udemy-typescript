// Arrow Function
const addArrowFunction = (a: number, b: number): number => {
  return a + b;
};

console.log(typeof addArrowFunction);

// Arrow Function with Implicit Return
const addAFIR = (a: number, b: number): number => a + b;

console.log(typeof addAFIR);

// Function Expression
const addFE = function (a: number, b: number): number {
  return a + b;
};

console.log(typeof addFE);

// Function Declaration
function addFD(a: number, b: number): number {
  return a + b;
}

console.log(typeof addFD);

// Function with Type Alias
type AddFunctionAlias = (a: number, b: number) => number;

const addFTA: AddFunctionAlias = (a, b) => {
  return a + b;
};

console.log(typeof addFTA);

// Function with Interface
interface AddFunctionInterface {
  (a: number, b: number): number;
}

const addFI: AddFunctionInterface = (a, b) => {
  return a + b;
};

console.log(typeof addFI);

/*
Key Differences:
 - Arrow functions (=>) don't have their own this binding
 - Function declarations are hoisted, so they can be called before they're defined
 - Function expressions are not hoisted
 - Type aliases and interfaces allow you to reuse function signatures across your codebase
 - Implicit return (option 2) works only for single-expression functions
*/

function divide(a: number, b: number): number {
  return a / b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
};

// Not used often. "never" tells us that the function will never reach the return statement
const throwError = (message: string): never => {
  throw new Error(message);
};

// If it is possible that the function will return something, the retrun type should written
const throwErrorWithRetrunTypeString = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// Destructuring with Annotations

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (todaysWeather: { date: Date; weather: string }): void => {
  console.log(`Today's weather on ${todaysWeather.date}: ${todaysWeather.weather}`);
};

const logWeatherDestructured = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(`Today's weather on ${date}: ${weather}`);
};

logWeather(todaysWeather);
logWeatherDestructured(todaysWeather);


export {};
