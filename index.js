import Paddle from './src/paddle';

const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let history = 0;


function gameLoop (timeStamp) {
  let deltaT = timeStamp - history;
  history = timeStamp;
  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaT);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop()
