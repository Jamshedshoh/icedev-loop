import { generateRecursively } from "../utils/generate.js";

// Define a function to count ways to make change
function countChange(coinDenominations, amount) {
  // Initialize an array to store the number of ways to make change for each amount
  const ways = Array(amount + 1).fill(0);
  ways[0] = 1; // There's one way to make change for zero cents (no coins used)

  // Create a generator to iterate through intermediate results
  const generator = generateRecursively((state, step) => {
    for (const coin of coinDenominations) {
      if (step >= coin) {
        state[step] += state[step - coin];
      }
    }
    return state;
  }, ways, amount + 1);

  // Iterate through the generator to calculate the number of ways to make change
  for (const result of generator) {
    // The final result will be in result[amount]
  }

  return ways[amount];
}

// Example usage
const coinDenominations = [1, 2, 5];
const amount = 5;
const waysToMakeChange = countChange(coinDenominations, amount);
console.log(`Number of ways to make change for ${amount} cents: ${waysToMakeChange}`);
