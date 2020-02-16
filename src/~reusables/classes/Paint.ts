import Point from "../classes/Point";
import { getMouseCoordsOnCanvas, findDistance } from "../util/canvasUtils";
import DataAttributesEnum from "../constants/dataAttributes";

export default class Paint {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  _tool: string = "";
  _lineWidth: number = 1;
  _brushWidth: number = 4;
  startPos: Point | null = null;
  currentPos: Point | null = null;
  savedData: ImageData | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  set activeTool(tool: string) {
    this._tool = tool;
  }

  set lineWidth(lineWidth: string) {
    this._lineWidth = parseInt(lineWidth);
    this.context.lineWidth = this._lineWidth;
  }

  set brushWidth(brushWidth: string) {
    this._brushWidth = parseInt(brushWidth);
  }

  init(tool: string) {
    this._tool = tool;
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

    if (
      this._tool === DataAttributesEnum.pencil ||
      this._tool === DataAttributesEnum.brush
    ) {
      this.context.beginPath();
      this.context.moveTo(this.startPos.x, this.startPos.y);
    }
  }

  onMouseMove(e: MouseEvent) {
    this.currentPos = getMouseCoordsOnCanvas(e, this.canvas);

    switch (this._tool) {
      case DataAttributesEnum.line:
      case DataAttributesEnum.rectangle:
      case DataAttributesEnum.circle:
      case DataAttributesEnum.triangle:
        this.drawShape();
        break;
      case DataAttributesEnum.pencil:
        this.drawFreeLine(this._lineWidth);
        break;
      case DataAttributesEnum.brush:
        this.drawFreeLine(this._brushWidth);
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

      if (this._tool === DataAttributesEnum.line) {
        this.context.moveTo(this.startPos.x, this.startPos.y);
        this.context.lineTo(this.currentPos.x, this.currentPos.y);
      } else if (this._tool === DataAttributesEnum.rectangle) {
        this.context.rect(
          this.startPos.x,
          this.startPos.y,
          this.currentPos.x - this.startPos.x,
          this.currentPos.y - this.startPos.y
        );
      } else if (this._tool === DataAttributesEnum.circle) {
        this.context.arc(
          this.startPos.x,
          this.startPos.y,
          findDistance(this.startPos, this.currentPos),
          0,
          2 * Math.PI,
          false
        );
      } else if (this._tool === DataAttributesEnum.triangle) {
        this.context.moveTo(
          this.startPos.x + (this.currentPos.x - this.startPos.x) / 2,
          this.startPos.y
        );
        this.context.lineTo(this.startPos.x, this.currentPos.y);
        this.context.lineTo(this.currentPos.x, this.currentPos.y);
        this.context.closePath();
      }

      this.context.stroke();
    }
  }

  drawFreeLine(toolWidth: number) {
    this.context.lineWidth = toolWidth;
    if (this.currentPos) {
      this.context.lineTo(this.currentPos.x, this.currentPos.y);
      this.context.stroke();
    }
  }
}
