"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = __importDefault(require("./Vector2D"));
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
    split() {
        const res = [];
        res.push(new Cell(this.position.clone(), this.radius * 0.75, new Vector2D_1.default(Math.random() * 10 - 5, Math.random() * 10 - 5)));
        res.push(new Cell(this.position.clone(), this.radius * 0.75, new Vector2D_1.default(Math.random() * 10 - 5, Math.random() * 10 - 5)));
        return res;
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map