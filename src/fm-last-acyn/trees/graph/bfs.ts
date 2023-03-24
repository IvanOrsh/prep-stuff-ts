export type WeightedAdjacencyMatrix = number[][];

// what are we working with?
// where do we start?
// what are we looking for?
// return the path we took

/* <--- 1 ----
 0 -----------> 1
  | \             
  |   \            
 4|     \ 5        4   
  |       \      /
  V         \  /  5
 2 ---------> 3
        2


        seen: [t, f, ...]
        prev: [-1...]
        Q: [0]

        while (Q.len)
          curr = Q.dequeue();
          if curr === needle break;
          for c in curr:
            if seen continue;
            seen[c] = true;
            prev[c] = curr
            Q.enqueue(c);
*/
export function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; ++i) {
      if (adjs[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
  } while (q.length);

  // build it backwards
  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  if (out.length) {
    return [source].concat(out.reverse());
  }

  return null;
}
