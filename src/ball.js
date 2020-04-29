import detectCollision from './collisionDetection';


export default class Ball {
  constructor (World) {
    this.size = 32;
    this.game = World;
    this.gameWidth = World.gameWidth;
    this.gameHeight = World.gameHeight;
    this.image = document.getElementById('ball');
    this.spd = {
      x: 2,
      y: -2,
    };

    this.position = {
      x: 50,
      y: 400,
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

    if (detectCollision(this, this.game.paddle)) {
      this.spd.y = -this.spd.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
