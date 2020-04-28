import Paddle from './src/paddle';

const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// ctx.clearReact(0, 0, canvas.width, canvas.height);




const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
