import { generateRecursively } from "../utils/generate.js";

// Function to calculate the next Fibonacci number
function fibonacciRunner(state, step) {
  let [a, b] = state;
  let next = a + b;
  return [b, next]; // Return the previous Fibonacci number and the next one
}

// Initialize the generator with Fibonacci-specific parameters
const fibonacciGenerator = generateRecursively(fibonacciRunner, [0, 1], 10);

// Generate the Fibonacci sequence
for (const [current, _] of fibonacciGenerator) {
  console.log(current); // Print the current Fibonacci number
}