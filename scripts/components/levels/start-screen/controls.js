import allLevels from './../all-levels';

export default function ( key, player ) {
  if ( key === 'space' ) {
    player.initLocation();
    // currentLevel = allLevels.characterSelect;
  }
}
