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
