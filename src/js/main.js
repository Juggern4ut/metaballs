"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cell_1 = __importDefault(require("./Cell"));
const Vector2D_1 = __importDefault(require("./Vector2D"));
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const domRes = document.querySelector("#resolution");
const showCells = document.querySelector("#showCells");
let resolution = parseInt(domRes.value);
let showBorders = showCells.checked;
const cells = [];
for (let i = 0; i < 3; i++) {
    const randomX = Math.random() * 580 + 30;
    const randomY = Math.random() * 580 + 30;
    const randomXDir = Math.random() * 10 - 5;
    const randomYDir = Math.random() * 10 - 5;
    const randomYRadius = Math.random() * 10 + 20;
    cells.push(new Cell_1.default(new Vector2D_1.default(randomX, randomY), randomYRadius, new Vector2D_1.default(randomXDir, randomYDir)));
}
showCells.addEventListener("change", (e) => {
    const t = e.target;
    showBorders = t.checked;
});
domRes.addEventListener("change", (e) => {
    if (e && e.target) {
        const t = e.target;
        resolution = parseInt(t.value);
    }
});
canvas.addEventListener("click", (e) => {
    for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        if (c.dist(e.pageX, e.pageY) <= c.radius) {
            const newCells = c.split();
            cells.push(newCells[0]);
            cells.push(newCells[1]);
            cells.splice(i, 1);
            break;
        }
    }
});
setInterval(() => {
    ctx.clearRect(0, 0, 640, 640);
    pixels();
    cells.forEach((c) => {
        c.update();
        if (showBorders) {
            c.show(ctx);
        }
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
            sum = sum > 360 ? 360 : sum;
            sum = sum < 120 ? 120 : sum;
            //ctx.fillStyle = `rgb(${sum}, ${sum}, ${sum})`;
            ctx.fillStyle = `hsl(${sum}, 100%, 50%)`;
            ctx.fillRect(x, y, resolution, resolution);
        }
    }
};
//# sourceMappingURL=main.js.map