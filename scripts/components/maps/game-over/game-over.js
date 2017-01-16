import allWhite from './../all-white';

export default {
  boundaries: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  initLocation: {
    x: 0,
    y: 0
  },
  levelName: 'gameOver',
  tiles: allWhite,
  sprite: 'images/characters/gameOver.png',
  controls: function ( key ) {
    if ( key === 'space') {
      location.reload();
    }
  },
}
