var characterSelectControls = function ( key, player ) {
  if ( key === 'space' ) {
    if ( player.location.x === levels.characterSelect.boundaries.right ) {
      player.savedAttributes.sprite = 'images/characters/monk.gif';
    } else {
      player.savedAttributes.sprite = 'images/characters/deathCaster.gif';
    };

    levels.currentLevel = levels.monsterSelect;
    player.initLocation();
  }
};
