import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick';
import { level1, buildLevel } from './levels';


export default class World {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start () {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle);
    const bricks = buildLevel(this, level1);


    this.gameObjects = [
      this.paddle,
      this.ball,
      ...bricks,
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
