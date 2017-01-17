import {Salamander} from './../../monsters/salamander';
import {Hydra} from './../../monsters/hydra';
import {GiantAnt} from './../../monsters/giant-ant';
import allMaps from './../all-maps';

export default function (key, player) {
  if (key === 'space') {
    var monsterSelected;

    if (player.location.x === 200) {
      monsterSelected = new Salamander(1);
    } else if (player.location.x === 300) {
      monsterSelected = new Hydra(1);
    } else {
      monsterSelected = new GiantAnt(1);
    }
    monsterSelected.controller = player;
    player.monsterInventory.push(monsterSelected);
    currentMap = allMaps.firstMap;
    player.initLocation();
  }
}
