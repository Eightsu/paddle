export default class Ball {
  constructor (World) {
    this.size = 64;
    this.game = World;
    this.gameWidth = World.gameWidth;
    this.gameHeight = World.gameHeight;
    this.image = document.getElementById('ball');
    this.spd = {
      x: 8,
      y: 8,
    };

    this.position = {
      x: 10,
      y: 2,
    };
  }

  draw (ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  update (deltaT) {
    this.position.x += this.spd.x;
    this.position.y += this.spd.y;

    if (this.position.x + 52 > this.gameWidth || this.position.x < 0) {
      this.spd.x = -this.spd.x;
    }
    if (this.position.y + 48 > this.gameHeight || this.position.y < 0) {
      this.spd.y = -this.spd.y;
    }

    const bottom = this.position.y + this.size;
    const paddleTop = this.game.paddle.position.y;
    const leftOfPaddle = this.game.paddle.position.x;
    const rightOfPaddle = this.game.paddle.position.x + this.game.paddle.width;


    // let paddleTop = this.game.paddle.position.x;

    if (bottom >= paddleTop
      && this.position.x + 2 >= leftOfPaddle
      && this.position.x + this.size <= rightOfPaddle) {
      this.spd.y = -this.spd.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
