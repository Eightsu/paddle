import Paddle from './src/paddle';
import InputHandler from './src/input';
import Ball from './src/ball';

const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
const ball = new Ball();
new InputHandler(paddle);

// paddle.draw(ctx);

let history = 0;


function gameLoop (timeStamp) {
  const deltaT = timeStamp - history;
  history = timeStamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(deltaT);
  paddle.draw(ctx);
  ball.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
