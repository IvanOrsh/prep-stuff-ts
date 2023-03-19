/*

'#' - wall
'S' - start
'E' - ending

[
  "###########E##",
  "#            #",
  "#S############",
]
     
     up
left   right
   bottom

base case:
  1. its a wall
  2. off the map
  3. its the end
  4. if we have seen it

recursive step:
  go to all 4 directions
  

solution: recursion

*/

// directions we can go
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export type Point = {
  x: number;
  y: number;
};

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // 1. base case
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze[0].length
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // end of maze
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true; // found the end successfully
  }

  // seen before
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 2. recursive case:
  // - pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // - recurse
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path
      )
    ) {
      return true;
    }
  }

  // - post
  path.pop();

  return false;
}

export function maze_solver(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
