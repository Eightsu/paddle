export default class Ball {
  constructor () {
    this.image = document.getElementById('ball');
  }

  draw (ctx) {
    ctx.drawImage(this.image, 10, 10, 64, 64);
  }

  update () {

  }
}
