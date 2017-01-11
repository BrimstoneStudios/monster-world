import allMaps from './../all-maps';

export default function () {
  allMaps.monsterInventoryMenu.boundaries.bottom = allMaps.monsterInventoryMenu.boundaries.top;
  allMaps.monsterInventoryMenu.boundaries.bottom += ( ( player.monsterInventory.length - 1 ) * allMaps.monsterInventoryMenu.movement.y );
}
