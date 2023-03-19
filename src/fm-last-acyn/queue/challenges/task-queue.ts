// explain, why would you consider using linked list as an underlying ds instead of js array
type Task<T> = () => Promise<T>;

export class TaskQueue<T> {
  private queue: Array<Task<T>>; // Use a more efficient data structure
  private concurrency: number;
  private running: number;

  constructor(concurrency: number) {
    this.concurrency = concurrency;
    this.queue = [];
    this.running = 0;
  }

  public async enqueue(task: Task<T>): Promise<void> {
    return new Promise((resolve, reject) => {
      this.queue.push(task);

      const processNext = async () => {
        if (this.running < this.concurrency && this.queue.length > 0) {
          const nextTask = this.queue.shift()!;
          this.running++;

          try {
            const result = (await nextTask()) as any;
            resolve(result);
          } catch (error) {
            reject(error);
          } finally {
            this.running--;
            processNext();
          }
        }
      };

      processNext();
    });
  }
}
