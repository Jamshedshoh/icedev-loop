export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function loop(runner, starter, finisher, times = 10, delay = 1000) {
  starter();
  let step = 0;
  while (1) {
    runner(step);
    if (delay > 0) await sleep(delay);

    step++;
    if (times-- <= 0) {
      break;
    }
  }

  finisher();
}