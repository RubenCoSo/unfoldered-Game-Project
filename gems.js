class Gem {
  constructor(ctx, map) {
    this.ctx = ctx;
    this.gemSize = {
      w: 100,
      h: 100,
    };

    this.map = map;

    this.gemPosition = {
      x: Math.floor(Math.random() * (2400 - map.x) + map.x),
      y: Math.floor(Math.random() * (2400 - map.y) + map.y),
    };

    this.correctionLeft = false;
    this.correctionRight = false;
    this.correctionUp = false;
    this.correctionDown = false;

    this.gem = new Image();
    this.gem.src = "./Untitled.png";
  }

  draw() {
    this.ctx.drawImage(
      this.gem,
      this.map.x + this.gemPosition.x,
      this.map.y + this.gemPosition.y,
      this.gemSize.w,
      this.gemSize.h
    );
  }
}
