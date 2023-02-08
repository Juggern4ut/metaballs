import Cell from "./Cell";
import Vector2D from "./Vector2D";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const domRes = document.querySelector("#resolution") as HTMLSelectElement;
const showCells = document.querySelector("#showCells") as HTMLInputElement;

let resolution = parseInt(domRes.value);
let showBorders = showCells.checked;

const cells: Cell[] = [];

for (let i = 0; i < 3; i++) {
  const randomX = Math.random() * 580 + 30;
  const randomY = Math.random() * 580 + 30;
  const randomXDir = Math.random() * 10 - 5;
  const randomYDir = Math.random() * 10 - 5;
  const randomYRadius = Math.random() * 10 + 20;
  cells.push(
    new Cell(
      new Vector2D(randomX, randomY),
      randomYRadius,
      new Vector2D(randomXDir, randomYDir)
    )
  );
}

showCells.addEventListener("change", (e) => {
  const t = e.target as HTMLInputElement;
  showBorders = t.checked;
});

domRes.addEventListener("change", (e: Event) => {
  if (e && e.target) {
    const t = e.target as HTMLInputElement;
    resolution = parseInt(t.value);
  }
});

canvas.addEventListener("click", (e) => {
  const t = e.target as HTMLCanvasElement;

  const bb = t.getBoundingClientRect();
  const relativeY = e.pageY - bb.y - window.scrollY;
  const relativeX = e.pageX - bb.x - window.scrollX;

  for (let i = 0; i < cells.length; i++) {
    const c = cells[i];
    if (c.dist(relativeX, relativeY) <= c.radius) {
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
