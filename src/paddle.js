export default class Paddle {
  constructor (World) {
    this.gameWidth = World.gameWidth;
    this.width = 150;
    this.height = 30;
    this.maxSpd = 10;
    this.spd = 0;

    this.position = {
      x: World.gameWidth / 2 - this.width / 2,
      y: World.gameHeight - this.height - 8,
    };
  }

  draw (ctx) {
    // ctx.fillStyle = 'linen';
    ctx.strokeStyle='black'
    ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    ctx.stroke();
  }

  moveLeft () {
    this.spd = -this.maxSpd;
  }

  moveRight () {
    this.spd = this.maxSpd;
  }

  stop () {
    this.spd = 0;
  }

  update (deltaT) {
    this.position.x += this.spd;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width >= this.gameWidth) this.position.x = this.gameWidth - this.width;


  }
}
