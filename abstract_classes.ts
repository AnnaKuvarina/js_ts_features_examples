interface Position2D {
  x: number;
  y?: number;
}

// change to abstract
abstract class Point2D implements Position2D {
  constructor(
    public x: number,
    public y: number,
    ) {
  }

  abstract init(): void

  print() {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }
}

class Point3D extends Point2D {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {
    super(x, y);
  }

  init() {
    console.log('vvb')
  }
}

class PointLocation extends Point2D {
  constructor(
    public name: string,
    ...args: [number, number]
) {
    super(...args);
  }
  init() {
    console.log('vvb')
  }
}

const point3d = new Point3D(0,0,0);
const pointLocation = new PointLocation('home', 0, 0);
const point2d = new Point2D(0, 0);
