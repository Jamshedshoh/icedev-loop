export function* generator(i) {
  yield i;
}

export function* generate(runner, init) {
  init();
  let step = 0;
  while (1) {
    const reset = yield runner(step);
    if (reset) {
      step = 0;
    } else {
      step++;
    }

  }
}

export function* generateWithState(runner, init) {
  const state = init();
  let step = 0;
  while (1) {
    const reset = yield runner(state, step);
    if (reset) {
      step = 0;
    } else {
      step++;
    }
  }
}

export function* generateRecursively(runner, initialValue, runCount) {
  let state = initialValue;
  for (let step = 0; step < runCount; step++) {
    state = runner(state, step);
    yield state
  }
}