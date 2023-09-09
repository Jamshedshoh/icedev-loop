import { generateWithState } from "../utils/generate.js";

// Define a runner function that simulates a fruit seller's actions
function fruitSellerActions(inventory, step) {
  // Simulate selling and restocking fruits
  const results = [];
  for (const fruit of inventory) {
    const { name, quantity, restockThreshold } = fruit;
    
    // Simulate selling and update quantity
    const soldQuantity = Math.min(quantity, Math.floor(Math.random() * 5) + 1); // Sell up to 5 fruits
    results.push({ fruit: name, action: 'sold', quantity: soldQuantity });
    fruit.quantity -= soldQuantity;

    // Check if the fruit needs to be restocked
    if (quantity < restockThreshold) {
      const restockedQuantity = Math.floor(Math.random() * 10) + 5; // Restock between 5 and 14 fruits
      results.push({ fruit: name, action: 'restocked', quantity: restockedQuantity });
      fruit.quantity += restockedQuantity;
    }
  }

  return results;
}

// Initialize the generator with an initial state function
const initialState = () => [
  { name: 'Orange', quantity: 20, restockThreshold: 10 },
  { name: 'Apple', quantity: 15, restockThreshold: 8 }
];

const fruitGenerator = generateWithState(fruitSellerActions, initialState);

// Iterate through the generator and simulate fruit seller actions
for (let i = 0; i < 5; i++) {
  const results = fruitGenerator.next().value;

  console.log(`Step ${i}:`);
  for (const actionResult of results) {
    console.log(`${actionResult.quantity} ${actionResult.fruit}s ${actionResult.action}`);
  }
  
  console.log('----------------');
}
