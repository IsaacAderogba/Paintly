export default class Paint {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  tool: string;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.tool = "";
  }

  set activeTool(tool: string) {
    this.tool = tool;
  }

  init(tool: string) {
    this.tool = tool;
    this.canvas.onmousedown = e => this.onMouseDown(e);
  }

  onMouseDown(e: MouseEvent) {
    this.canvas.onmousemove = e => this.onMouseMove(e);
    document.onmouseup = e => this.onMouseUp(e);
  }

  onMouseMove(e: MouseEvent) {}

  onMouseUp(e: MouseEvent) {
    this.canvas.onmousemove = null;
    document.onmouseup = null;
  }
}
