class Point {
  x: number; // public by default
  y: number;
  private z: number; // visible only in the class Point
  protected age = 0; // visible only in the class Point and its child classes
  readonly name = 'string'; // can't be changed

  constructor(
    x: number,
    y: number,
  ) {
    this.x = x;
    this.y = y;
    this.init();
  }

  print(): void {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }

  static staticPrint() {
    console.log(this);
  }

  private init(): void {
    console.log('Init Point');
  }
}

/*
class Coordinate extends Point {
  constructor(x: number, y: number,) {
    super(x, y);
    this.age = 10;
  }
}*/

const point = new Point(0, 0);
console.log(point.x, point.y);
point.print();
Point.staticPrint();
