import { TaskQueue } from "./task-queue";

describe("TaskQueue", () => {
  it("should run tasks concurrently", async () => {
    const concurrency = 5;
    const queue = new TaskQueue<number>(concurrency);

    const tasks = [
      async () => {
        return 1;
      },
      async () => {
        return 2;
      },
      async () => {
        return 3;
      },
      async () => {
        return 4;
      },
      async () => {
        return 5;
      },
    ];

    const expectedResults = [1, 2, 3, 4, 5];

    const results = await Promise.all(tasks.map((task) => queue.enqueue(task)));

    expect(results).toEqual(expectedResults);
  });
});
