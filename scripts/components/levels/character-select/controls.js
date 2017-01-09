import allLevels from './../all-levels';

export default function ( key, player ) {
  if ( key === 'space' ) {
    if ( player.location.x === allLevels.characterSelect.boundaries.right ) {
      player.savedAttributes.sprite = 'images/characters/monk.gif';
    } else {
      player.savedAttributes.sprite = 'images/characters/deathCaster.gif';
    }

    currentLevel = allLevels.monsterSelect;
    player.initLocation();
  }
};
