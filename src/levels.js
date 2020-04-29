import Brick from './brick';

export function buildLevel (World, level) {
  const bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      const position = {
        x: 80 * brickIndex,
        y: 20 + 48 * rowIndex,
      };

      if (brick === 1) {
        bricks.push(new Brick(World, position));
      }
    });
  });

  return bricks;
}


export const level1 = [
  [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
];
