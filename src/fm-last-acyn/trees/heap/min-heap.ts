export class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    if (this.length === 1) {
      this.data = [];
      this.length = 0;
      return out;
    }

    this.length--;
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    const lIndex = this.leftChild(idx);
    const rIndex = this.rightChild(idx);

    if (idx >= this.length || lIndex >= this.length) {
      return;
    }

    const lV = this.data[lIndex];
    const rV = this.data[rIndex];
    const v = this.data[idx];

    // we're greater that the smallest
    if (lV > rV && v > rV) {
      this.data[idx] = rV;
      this.data[rIndex] = v;
      this.heapifyDown(rIndex);
    } else if (rV > lV && v > lV) {
      this.data[idx] = lV;
      this.data[lIndex] = v;
      this.heapifyDown(lIndex);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const p = this.parent(idx);
    const parenV = this.data[p];
    const v = this.data[idx];

    if (parenV > v) {
      this.data[idx] = parenV;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}
