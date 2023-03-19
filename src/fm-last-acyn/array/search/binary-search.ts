// only works with ORDERED []

export function binarySearch<T>(
  sortedArr: T[],
  elem: T,
  compareFn: (a: T, b: T) => number
): number {
  // lo (low) - inclusive
  // hi (high) - EXCLUSIVE
  let lo = 0;
  let hi = sortedArr.length - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (compareFn(sortedArr[mid], elem) === 0) {
      return mid;
    }

    if (compareFn(elem, sortedArr[mid]) > 0) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
}
