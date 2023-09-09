import { generateRecursively } from "../utils/generate.js";
// Define a runner function
function runner(currentState, step) {
  return currentState + step;
}

// Create a generator
const generator = generateRecursively(runner, 0, 5);

// Iterate through the generated values
for (const value of generator) {
  console.log(value); // Prints 0, 1, 3, 6, 10
}