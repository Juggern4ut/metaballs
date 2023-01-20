import Vector2D from "./Vector2D";

export default class Cell {
  position: Vector2D;
  radius: number;
  direction: Vector2D;

  constructor(pos: Vector2D, r: number, dir: Vector2D) {
    this.position = pos;
    this.radius = r;
    this.direction = dir;
  }

  update() {
    if (this.position.x < this.radius || this.position.x > 640 - this.radius) {
      this.direction.x *= -1;
    }

    if (this.position.y < this.radius || this.position.y > 640 - this.radius) {
      this.direction.y *= -1;
    }

    this.position.add(this.direction);
  }

  dist(x: number, y: number) {
    const deltaX = Math.abs(this.position.x - x);
    const deltaY = Math.abs(this.position.y - y);
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }

  show(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }

  split() {
    const res = [];
    res.push(
      new Cell(
        this.position.clone(),
        this.radius * 0.75,
        new Vector2D(Math.random() * 10 - 5, Math.random() * 10 - 5)
      )
    );
    res.push(
      new Cell(
        this.position.clone(),
        this.radius * 0.75,
        new Vector2D(Math.random() * 10 - 5, Math.random() * 10 - 5)
      )
    );
    return res;
  }
}
