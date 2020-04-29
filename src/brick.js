import detectCollision from './collisionDetection';

export default class Brick {
  constructor (World, position) {
    this.image = document.getElementById('brick');
    this.width = 80;
    this.height = 48;
    this.game = World;
    this.position = position;
    this.destroyed = false;
  }

  draw (ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  update () {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.spd.y = -this.game.ball.spd.y;
      this.destroyed = true;
    }
  }
}
