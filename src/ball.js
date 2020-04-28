export default class Ball {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = document.getElementById('ball');
    this.spd = {
      x: 10,
      y: 2,
    };

    this.position = {
      x: 10,
      y: 2,
    };

    this.size = 64;
  }

  draw (ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  update (deltaT) {
    this.position.x += this.spd.x;
    this.position.y += this.spd.y;

    if (this.position.x + this.size > this.gameWidth  || this.position.x < 0) this.spd.x = -this.spd.x;
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) this.spd.y = -this.spd.y;
  }
}
