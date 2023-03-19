// simplified implementation of ring buffer
// TODO: test

export class RingBuffer<T> {
  private buffer: T[];
  private readIndex = 0;
  private writeIndex = 0;

  constructor(private readonly capacity: number) {
    this.buffer = new Array(capacity);
  }

  public get size(): number {
    if (this.writeIndex >= this.readIndex) {
      return this.writeIndex - this.readIndex;
    } else {
      return this.capacity - (this.readIndex - this.writeIndex);
    }
  }

  public enqueue(value: T): void {
    this.buffer[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.capacity;
    if (this.writeIndex === this.readIndex) {
      this.readIndex = (this.readIndex + 1) % this.capacity;
    }
  }

  public dequeue(): T {
    if (this.size === 0) {
      throw new Error("Ring buffer is empty");
    }
    const value = this.buffer[this.readIndex];
    this.readIndex = (this.readIndex + 1) % this.capacity;
    return value;
  }
}
