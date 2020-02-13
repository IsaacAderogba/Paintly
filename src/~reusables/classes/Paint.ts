import Point from "../classes/Point";
import { getMouseCoordsOnCanvas } from "../util/mouseCoordinates";
import DataAttributesEnum from "../constants/dataAttributes";

export default class Paint {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  tool: string = "";
  startPos: Point | null = null;
  currentPos: Point | null = null;
  savedData: ImageData | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  set activeTool(tool: string) {
    this.tool = tool;
  }

  init(tool: string) {
    this.tool = tool;
    this.canvas.onmousedown = e => this.onMouseDown(e);
  }

  onMouseDown(e: MouseEvent) {
    this.savedData = this.context.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.canvas.onmousemove = e => this.onMouseMove(e);
    document.onmouseup = e => this.onMouseUp(e);
    this.startPos = getMouseCoordsOnCanvas(e, this.canvas);
  }

  onMouseMove(e: MouseEvent) {
    this.currentPos = getMouseCoordsOnCanvas(e, this.canvas);

    switch (this.tool) {
      case DataAttributesEnum.line:
        this.drawShape();
        break;
      default:
        break;
    }
  }

  onMouseUp(e: MouseEvent) {
    this.canvas.onmousemove = null;
    document.onmouseup = null;
  }

  drawShape() {
    if (this.savedData && this.startPos && this.currentPos) {
      this.context.putImageData(this.savedData, 0, 0);
      this.context.beginPath();
      this.context.moveTo(this.startPos.x, this.startPos.y);
      this.context.lineTo(this.currentPos.x, this.currentPos.y);
      this.context.stroke();
    }
  }
}
