import { generateWithState } from "../utils/generate.js";

// Define a runner function that operates on the state
function runner(state, step) {
  // Perform some operation on the state
  const result = state + step;

  // Return the result and whether the generator should reset
  return { result, reset: step >= 5 }; // Reset when step reaches 5
}

// Initialize the generator with an initial state function
const initialState = () => 0; // Initial state is 0
const generator = generateWithState(runner, initialState);

// Iterate through the generator and print results
for (let i = 0; i < 10; i++) {
  const shouldReset = i % 3 === 0; // Reset every 3 iterations
  const { result, reset } = generator.next(shouldReset).value; // No reset parameter here
  console.log(`Step ${i}: Result ${result}, Reset: ${reset}`);
}