
export default class InputHandler {
  constructor (paddle, game) {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        case 32:
          game.togglePause();
          break;
        default:
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 37:
          if (paddle.spd < 0) paddle.stop();
          break;
        case 39:
          if (paddle.spd > 0) paddle.stop();
          paddle.stop();
          break;
        default:
      }
    });
  }
}
