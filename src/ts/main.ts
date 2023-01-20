import Cell from "./Cell";
import Vector2D from "./Vector2D";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const domRes = document.querySelector("#resolution") as HTMLSelectElement;
const showCells = document.querySelector("#showCells") as HTMLInputElement;

let resolution = 4;
let showBorders = false;

const cells: Cell[] = [];

for (let i = 0; i < 1; i++) {
  const randomX = Math.random() * 640;
  const randomY = Math.random() * 640;
  const randomXDir = Math.random() * 10 - 5;
  const randomYDir = Math.random() * 10 - 5;
  const randomYRadius = Math.random() * 50 + 5;
  cells.push(
    new Cell(
      new Vector2D(randomX, randomY),
      randomYRadius,
      new Vector2D(randomXDir, randomYDir)
    )
  );
}

showCells.addEventListener("change", (e) => {
  showBorders = e.target.checked;
});

domRes.addEventListener("change", (e: Event) => {
  if (e && e.target) {
    resolution = parseInt(e.target.value);
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
