import allLevels from './../all-levels';

export default function () {
  allLevels.monsterInventoryMenu.boundaries.bottom = allLevels.monsterInventoryMenu.boundaries.top;
  allLevels.monsterInventoryMenu.boundaries.bottom += ( ( player.monsterInventory.length - 1 ) * allLevels.monsterInventoryMenu.movement.y );
}
