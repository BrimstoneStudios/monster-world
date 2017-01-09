import allLevels from './../all-levels';

export default function ( key, player ) {
  if ( key === 'space' ) {
    currentLevel = allLevels.characterSelect;
    player.initLocation();
  }
}
