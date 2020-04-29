import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import { level1, buildLevel } from './levels';


const GAME_STATE = {
  GAMEOVER: 3,
  MENU: 2,
  RUNNING: 1,
  PAUSED: 0,
};

export default class World {
  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start () {
    this.gameState = GAME_STATE.RUNNING;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this.paddle, this);
    const bricks = buildLevel(this, level1);


    this.gameObjects = [
      this.paddle,
      this.ball,
      ...bricks,
    ];
  }

  togglePause () {
    if (this.gameState === GAME_STATE.PAUSED) {
      this.gameState = GAME_STATE.RUNNING;
    } else {
      this.gameState = GAME_STATE.PAUSED;
    }
  }

  update (deltaT) {
    if (this.gameState === GAME_STATE.PAUSED) return;
    this.gameObjects.forEach((obj) => {
      obj.update(deltaT);
    });

    this.gameObjects = this.gameObjects.filter((obj) => !obj.destroyed);
  }

  draw (ctx) {
    this.gameObjects.forEach((obj) => {
      obj.draw(ctx);
    });

    if (this.gameState === GAME_STATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = 'rgba(0,0,0,.5)';
      ctx.fill();

      ctx.font = '72px "Press Start 2P"';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText('Paused', this.gameWidth / 2, this.gameHeight / 2);
    }
  }
}
