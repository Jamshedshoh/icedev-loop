import { loop } from './utils/loop.js';

loop((step) => {
  console.log("Running", step);
}, () => {
  console.log("Started");
}, () => {
  console.log("Finished");
}, 5, 1000);

import { generate, generateWithState } from "./utils/generate.js";

const gen = generate(
  (step) => {
    return step * 10;
  },
  () => {
    console.log("Initialized");
  }
);

console.log(gen.next().value);
console.log(gen.next(false).value);
console.log(gen.next().value);

const gen1 = generate(
  (step) => {
    var state = [];

    return () => {
      state.push(step)
      return state;
    };
  },
  () => {
    console.log("Initialized");
  }
);


console.log(gen1.next().value())
console.log(gen1.next().value())
console.log(gen1.next().value())
console.log(gen1.next().value())
console.log(gen1.next().value())


const gen2 = generateWithState(
  (state, step) => {

    return () => {
      state.push(step)
      return state;
    };
  },
  () => {
    console.log("Initialized");
    return [];
  }
);


console.log(gen2.next().value())
console.log(gen2.next().value())
console.log(gen2.next().value())
console.log(gen2.next().value())
console.log(gen2.next().value())

const gen3 = generateWithState(
  (state, step) => {

    return () => {
      state[`key${step}`] = step;
      return state;
    };
  },
  () => {
    console.log("Initialized");
    return {};
  }
);


console.log(gen3.next().value())
console.log(gen3.next().value())
console.log(gen3.next().value())
console.log(gen3.next().value())
console.log(gen3.next().value())