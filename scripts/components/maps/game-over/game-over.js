import allWhite from './../all-white';
import {Maps} from './../maps';


var gameOver = new Maps('gameOver', allWhite);

gameOver.setMovement = {
  boundaries: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  controls: function (key) {
    if (key === 'space') {
      location.reload();
    }
  },
  distance: {
    x: 0,
    y: 50,
  },
};

gameOver.setInitLocation = {
  x: 0,
  y: 0,
};

gameOver.setSprite = 'images/characters/gameOver.png';

export {gameOver as default};
