import { generateWithState } from '../utils/generate.js'

// Define a runner function to approximate the golden ratio
function goldenRatioApproximation(state, step) {
  // Initialize the Fibonacci sequence with the first two numbers
  if (!state) {
    state = {
      prev: 1, // F(n-1)
      current: 1, // F(n)
    };
  } else {
    // Calculate the next Fibonacci number
    const next = state.prev + state.current;

    // Update state for the next iteration
    state = {
      prev: state.current,
      current: next,
    };
  }
  
  return state;
}

// Initialize the generator with an initial state
const initialState = () => goldenRatioApproximation();

const goldenRatioGenerator = generateWithState(goldenRatioApproximation, initialState);

// Approximate the golden ratio using the Fibonacci sequence
for (let i = 0; i < 10; i++) {
  const { prev, current } = goldenRatioGenerator.next().value;
  console.log(`Step ${i + 1}: Approximation of φ (Golden Ratio) = ${current / prev}`);
}
