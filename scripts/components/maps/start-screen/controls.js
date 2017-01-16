import characterSelect from './../character-select/character-select';

export default function ( key, player ) {
  if ( key === 'space' ) {
    currentMap = characterSelect;
    player.initLocation();
  }
}
