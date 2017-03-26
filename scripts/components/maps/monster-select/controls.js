import Salamander from './../../monsters/salamander';
import Hydra from './../../monsters/hydra';
import GiantAnt from './../../monsters/giant-ant';

export default function (key, player) {
  const boundaries = monsterWorld.getCurrentMap().movement.boundaries;
  let monsterSelected;

  if (key === 'space') {
    if (player.location.x === boundaries.left) {
      monsterSelected = new Salamander(1);
    } else if (player.location.x === boundaries.right) {
      monsterSelected = new GiantAnt(1);
    } else {
      monsterSelected = new Hydra(1);
    }
    monsterSelected.controller = player;
    player.monsterInventory.push(monsterSelected);
    monsterWorld.setCurrentMap(monsterWorld.maps.firstMap);
    player.initLocation();
  }
}
