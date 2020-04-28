import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick';


export default class World {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start () {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);
    let bricks = [
      
    ]
    const brick = new Brick(this, { x: 50, y: 50 });

    this.gameObjects = [
      this.paddle,
      this.ball,
      brick,
    ];
  }

  update (deltaT) {
    this.gameObjects.forEach((obj) => {
      obj.update(deltaT);
    });
  }

  draw (ctx) {
    this.gameObjects.forEach((obj) => {
      obj.draw(ctx);
    });
  }
}
