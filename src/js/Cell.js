"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cell {
    constructor(pos, r, dir) {
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
    dist(x, y) {
        const deltaX = Math.abs(this.position.x - x);
        const deltaY = Math.abs(this.position.y - y);
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }
    show(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map