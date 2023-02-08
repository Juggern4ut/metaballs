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

  /**
   * Updates the Position of this cell
   */
  update(): void {
    if (this.position.x < this.radius || this.position.x > 640 - this.radius) {
      this.direction.x *= -1;
    }

    if (this.position.y < this.radius || this.position.y > 640 - this.radius) {
      this.direction.y *= -1;
    }

    this.position.add(this.direction);
  }

  /**
   * Calculates the distance between the cell and the given point
   * @param x The x-coordinate of the target
   * @param y The y-coordinate of the target
   * @returns The distance between this cell and the target point
   */
  dist(x: number, y: number): number {
    const deltaX = Math.abs(this.position.x - x);
    const deltaY = Math.abs(this.position.y - y);
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }

  /**
   * Renders the cell as a circle to the given RenderingContext
   * @param ctx The RenderingContext to render the cell to
   */
  show(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * Splits the cell into two new cells that are slightly smaller
   * @returns An Array containing two new Cells
   */
  split(): Cell[] {
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
