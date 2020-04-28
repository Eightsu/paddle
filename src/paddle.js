export default class Paddle {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 150;
    this.height = 30;
    this.maxSpd = 10;
    this.spd = 0;

    this.postion = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 8,
    };
  }

  draw (ctx) {
    ctx.fillStyle = 'grey';
    ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
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
    this.postion.x += this.spd;
    if (this.postion.x < 0) this.postion.x = 0;
    if (this.postion.x + this.width >= this.gameWidth) this.postion.x = this.gameWidth - this.width;
  }
}
