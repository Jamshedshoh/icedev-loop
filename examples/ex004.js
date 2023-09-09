import { generateWithState } from "../utils/generate.js";

// Define a runner function that simulates a fruit stand owner's actions
function fruitStandOwnerActions(inventory, step) {
  // Simulate selling fruits to customers
  const results = [];
  for (const fruit of inventory) {
    const { name, quantity } = fruit;
    const sold = Math.min(3, quantity); // Sell up to 3 fruits
    fruit.quantity -= sold;
    results.push({ fruit: name, sold });
  }

  // Check if any fruit needs restocking (quantity is zero)
  const restock = inventory.some(fruit => fruit.quantity === 0);

  return { results, restock };
}

// Initialize the generator with an initial state function
const initialState = () => [
  { name: 'orange', quantity: 10 },
  { name: 'apple', quantity: 15 }
];

const fruitGenerator = generateWithState(fruitStandOwnerActions, initialState);

// Iterate through the generator and simulate fruit stand owner actions
for (let i = 0; i < 5; i++) {
  const { results, restock } = fruitGenerator.next().value;

  console.log(`Step ${i}:`);
  for (const actionResult of results) {
    console.log(`Sold ${actionResult.sold} ${actionResult.fruit}s`);
  }

  if (restock) {
    console.log('Out of stock! Restocking fruits...');
    fruitGenerator.next(true); // Reset the generator
  }
  
  console.log('----------------');
}
