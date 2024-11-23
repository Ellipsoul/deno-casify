// 9 CPU cores will be used
const numbers: number[] = [45, 45, 45, 45, 45, 45, 45, 45, 45];

// Iterate over the numbers and create a worker for each
numbers.forEach((n: number): void => {
  const worker = new Worker(
    new URL('./fib_worker.ts', import.meta.url).href,
    {
      type: 'module',
    },
  );
  // 1a. send data to worker to start
  worker.postMessage({ n });

  // 2b. Receive completed work from worker
  worker.onmessage = (e) => {
    console.log(`Main Thread (n=${n}):`, e.data);
    worker.terminate();
  };
});
