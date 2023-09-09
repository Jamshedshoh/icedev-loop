import { generateRecursively } from "../utils/generate.js";
// Function to generate fruit names
function generateFruits(state, step) {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grapes', 'Kiwi', 'Lemon', 'Mango', 'Orange'];
  return fruits[step];
}

// Initialize the generator with fruit-specific parameters
const fruitGenerator = generateRecursively(generateFruits, 0, 10);

// Iterate over the generator to get fruit names
for (const fruit of fruitGenerator) {
  console.log(fruit);
}