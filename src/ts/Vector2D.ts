export default class Vector2D {
  x: number = 0;
  y: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector2D) {
    this.x += other.x;
    this.y += other.y;
  }

  clone(): Vector2D {
    return new Vector2D(this.x, this.y);
  }
}
