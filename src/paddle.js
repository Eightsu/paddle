export default class Paddle {
  constructor (gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;

    this.postion = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 8,
    };
  }

  draw (ctx) {
    ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
  }
}
