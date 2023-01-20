import Cell from "./Cell";
import Vector2D from "./Vector2D";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const resolution = 4;

const cells: Cell[] = [];

for (let i = 0; i < 15; i++) {
  const randomX = Math.random() * 640;
  const randomY = Math.random() * 640;
  const randomXDir = Math.random() * 10 - 5;
  const randomYDir = Math.random() * 10 - 5;
  const randomYRadius = Math.random() * 20 + 5;
  cells.push(
    new Cell(
      new Vector2D(randomX, randomY),
      randomYRadius,
      new Vector2D(randomXDir, randomYDir)
    )
  );
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
