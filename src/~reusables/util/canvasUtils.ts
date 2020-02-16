import Point from "../classes/Point";

export function getMouseCoordsOnCanvas(
  e: MouseEvent,
  canvas: HTMLCanvasElement
) {
  const rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  return new Point(x, y);
}

export function findDistance(coord1: Point, coord2: Point) {
  let expression1 = Math.pow(coord2.x - coord1.x, 2);
  let expression2 = Math.pow(coord2.y - coord1.y, 2);
  let distance = Math.sqrt(expression1 + expression2);
  return distance;
}
