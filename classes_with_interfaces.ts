interface Position2D {
  x: number;
  y: number;
}

interface CoordinateZ {
  z: number;
}

class Point implements Position2D, CoordinateZ {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {
  }
}

class PointLocation implements Position2D {
  constructor(
    public x: number,
    public y: number,
    public name: string,
  ) {
  }
}

const point = new Point(0, 0, 0);
const home = new PointLocation(0, 0, 'home');

function print2d(point: Position2D) {
  console.log(`x: ${point.x}, y: ${point.y}`)
}

print2d(point);
print2d(home);
