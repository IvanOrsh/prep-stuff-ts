// [    ... <= P_0 < ....      ]
// 0      P_1 < | <    P_2     N
// ⬆️      |     |       |
// lo     |     |       |      hi

/*     0 ... 31
          16
    0-15       17-31
     8          24
1-7    9-15 
 4      12
     9-11 13-15
            14
        13 13 15 15
*/

/*
  [8, 7, 6, 4, 5 ]
               _
   ⬆️  ⬆️  ⬆️  ⬆️
  [4, 7, 6, 8, 5 ]
  ...

*/

// INCLUSIVE ENDINGS (which is not so typical)

function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIndex = partition(arr, lo, hi);

  // go to the pivot
  qs(arr, lo, pivotIndex - 1);
  // and beyond
  qs(arr, pivotIndex + 1, hi);
}

// produces pivot's index
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export function quickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
