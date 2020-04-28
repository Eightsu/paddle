import Paddle from './src/paddle';
import InputHandler from './src/input';
import Ball from './src/ball';
import World from './src/world';

const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const game = new World(GAME_WIDTH, GAME_HEIGHT);

game.start();

// paddle.draw(ctx);

let history = 0;


function gameLoop (timeStamp) {
  const deltaT = timeStamp - history;
  history = timeStamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  ctx.fillStyle = 'linen';
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaT);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
