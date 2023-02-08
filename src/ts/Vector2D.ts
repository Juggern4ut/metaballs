export default class Vector2D {
  x: number = 0;
  y: number = 0;
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Takes another Vector2D as a parameter and adds it to this one
   * @param other The vector to add to this vector
   */
  add(other: Vector2D): void {
    this.x += other.x;
    this.y += other.y;
  }

  /**
   * Clones this vector
   * @returns A new Vector that has the same properties as this one
   */
  clone(): Vector2D {
    return new Vector2D(this.x, this.y);
  }
}
