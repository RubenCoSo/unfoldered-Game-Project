class Map {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.mapPosition = {
      x: 0,
      y: 0,
    };
    this.mapSize = {
      w: 2800,
      h: 2800,
    };
    this.moveLeft = false;
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;

    this.canvasSize = canvasSize;
    this.map = new Image();
    this.map.src = "./pixil-frame-0.png";
  }

  drawMap() {
    this.ctx.drawImage(
      this.map,
      this.mapPosition.x,
      this.mapPosition.y,
      this.mapSize.w,
      this.mapSize.h
    );
  }

  move() {
    this.mapPosition.x + 20 < this.canvasSize.w / 2 && this.moveLeft
      ? (this.mapPosition.x += 6)
      : null;
    this.mapPosition.x - 20 > this.canvasSize.w * -3 && this.moveRight
      ? (this.mapPosition.x -= 6)
      : null;
    this.mapPosition.y < this.canvasSize.h / 2 && this.moveUp
      ? (this.mapPosition.y += 6)
      : null;
    this.mapPosition.y - 45 > this.canvasSize.h * -3 && this.moveDown
      ? (this.mapPosition.y -= 6)
      : null;
  }
}
