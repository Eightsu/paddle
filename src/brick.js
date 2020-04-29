export default class Brick {
  constructor (World, position) {
    this.image = document.getElementById('brick');
    this.width = 80;
    this.height = 48;
    this.game = World;
    this.gameWidth = World.gameWidth;
    this.gameHeight = World.gameHeight;
    this.position = position;
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

  update (deltaT) {

  }
}
