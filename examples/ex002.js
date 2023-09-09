import { generateWithState } from "../utils/generate.js";

// Define a runner function that simulates a pet owner's actions
function petOwnerActions(pets, step) {
  // Simulate feeding and playing with pets
  const results = [];
  for (const pet of pets) {
    const isDog = pet.type === 'dog';
    const action = isDog ? 'playing' : 'petting';
    const energy = isDog ? 5 : 3;
    
    // Simulate interaction and update energy
    results.push({ pet: pet.name, action, energy });
    pet.energy -= energy;
  }

  // Check if any pet needs a timeout (energy below a certain threshold)
  const reset = pets.some(pet => pet.energy <= 0);
  
  return { results, reset };
}

// Initialize the generator with an initial state function
const initialState = () => [
  { name: 'Fluffy', type: 'cat', energy: 10 },
  { name: 'Buddy', type: 'dog', energy: 15 },
  { name: 'Whiskers', type: 'cat', energy: 12 }
];

const petGenerator = generateWithState(petOwnerActions, initialState);

// Iterate through the generator and simulate pet owner actions
for (let i = 0; i < 5; i++) {
  const { results, reset } = petGenerator.next().value;

  console.log(`Step ${i}:`);
  for (const actionResult of results) {
    console.log(`${actionResult.pet} is ${actionResult.action}. Energy: ${actionResult.energy}`);
  }

  if (reset) {
    console.log('Some pets need a timeout!');
    petGenerator.next(true); // Reset the generator
  }
  
  console.log('----------------');
}
