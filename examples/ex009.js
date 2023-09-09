// Import the fixed generator function
import { generateRecursively } from "../utils/generate.js";

// Function to generate coin combinations
function generateCoinCombinations(state, step) {
  const coins = [1, 5, 10, 25]; // Coin denominations in cents (pennies, nickels, dimes, quarters)
  const targetValue = 50; // The target value in cents (50 cents = $0.50)

  if (step >= coins.length) {
    return null; // No more coin combinations are possible
  }

  const coin = coins[step];
  const maxCoins = Math.floor(targetValue / coin);
  for (let count = 0; count <= maxCoins; count++) {
    const currentTotal = count * coin;
    if (currentTotal <= targetValue) {
      const remainingValue = targetValue - currentTotal;
      return { coin, count, remainingValue };
    }
  }
}

// Initialize the generator with coin-specific parameters
const coinGenerator = generateRecursively(generateCoinCombinations, 0, 4); // 4 denominations of coins

// Iterate over the generator to get coin combinations
for (const coinCombination of coinGenerator) {
  console.log(`${coinCombination.count} x ${coinCombination.coin} cents`);
  if (coinCombination.remainingValue === 0) {
    console.log("Total value reached!");
  } else {
    console.log(`Remaining value: ${coinCombination.remainingValue} cents\n`);
  }
}
