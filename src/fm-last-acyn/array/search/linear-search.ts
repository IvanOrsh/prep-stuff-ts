// pretend that [] is an array

// a: [           ]
//    0           N
//
// search(arr, v)

export class LinearSearch<T> {
  constructor(
    private equal: (a: T, b: T) => boolean = (a: T, b: T) => a == b
  ) {}

  public findIndex(arr: T[], elem: T): number {
    for (let i = 0; i < arr.length; i++) {
      if (this.equal(elem, arr[i])) {
        return i;
      }
    }
    return -1;
  }
}
