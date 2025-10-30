const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};
// Type alias for tuple
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 0];
const tea: Drink = ["brown", true, 3];

// Tuple is ordered list of elements with fixed length and types at each position.
// It will not be used very often, but can be useful in some scenarios.


const carSpecs: [number, number] = [400, 3354];
const carStats = {
    horsepower: 400,
    weight: 3354
};  
// Object is often preferred over tuple for better readability.