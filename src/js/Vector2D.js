"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2D {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    /**
     * Takes another Vector2D as a parameter and adds it to this one
     * @param other The vector to add to this vector
     */
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    /**
     * Clones this vector
     * @returns A new Vector that has the same properties as this one
     */
    clone() {
        return new Vector2D(this.x, this.y);
    }
}
exports.default = Vector2D;
//# sourceMappingURL=Vector2D.js.map