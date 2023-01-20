"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cell_1 = __importDefault(require("./Cell"));
const Vector2D_1 = __importDefault(require("./Vector2D"));
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const resolution = 4;
const cells = [];
for (let i = 0; i < 15; i++) {
    const randomX = Math.random() * 640;
    const randomY = Math.random() * 640;
    const randomXDir = Math.random() * 10 - 5;
    const randomYDir = Math.random() * 10 - 5;
    const randomYRadius = Math.random() * 20 + 5;
    cells.push(new Cell_1.default(new Vector2D_1.default(randomX, randomY), randomYRadius, new Vector2D_1.default(randomXDir, randomYDir)));
}
setInterval(() => {
    ctx.clearRect(0, 0, 640, 640);
    pixels();
    cells.forEach((c) => {
        c.update();
        //c.show(ctx);
    });
}, 50);
const pixels = () => {
    for (let y = 0; y < 640; y += resolution) {
        for (let x = 0; x < 640; x += resolution) {
            let sum = 0;
            cells.forEach((c) => {
                const dist = c.dist(x, y);
                sum += (500 * c.radius) / dist;
            });
            //ctx.fillStyle = `rgb(${sum}, ${sum}, ${sum})`;
            ctx.fillStyle = `hsl(${sum}, 100%, 75%)`;
            ctx.fillRect(x, y, resolution, resolution);
        }
    }
};
//# sourceMappingURL=main.js.map