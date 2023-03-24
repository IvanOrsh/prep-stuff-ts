// TODO: test

export class PriorityQueue<T> {
  private heap: { priority: number; value: T }[] = [];

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  private bubbleUp(): void {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index].priority < this.heap[this.getParentIndex(index)].priority
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private bubbleDown(): void {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)].priority <
          this.heap[smallerChildIndex].priority
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].priority < this.heap[smallerChildIndex].priority) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

  public enqueue(value: T, priority: number): void {
    this.heap.push({ value, priority });
    this.bubbleUp();
  }

  public dequeue(): T | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last!;
      this.bubbleDown();
    }

    return root.value;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
