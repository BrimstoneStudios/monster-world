export default function (key, player) {
  if (key === 'space') {
    if (player.location.x === monsterWorld.getCurrentMap().movement.boundaries.right) {
      player.savedAttributes.sprite = 'images/characters/monk.gif';
    } else {
      player.savedAttributes.sprite = 'images/characters/deathCaster.gif';
    }

    monsterWorld.setCurrentMap(monsterWorld.maps.monsterSelect);
    player.initLocation();
  }
}
