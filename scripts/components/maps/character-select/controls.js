import allMaps from './../all-maps';

export default function (key, player) {
  if (key === 'space') {
    if (player.location.x === currentMap.boundaries.right) {
      player.savedAttributes.sprite = 'images/characters/monk.gif';
    } else {
      player.savedAttributes.sprite = 'images/characters/deathCaster.gif';
    }

    currentMap = allMaps.monsterSelect;
    player.initLocation();
  }
}
