import allLevels from './../all-levels';

export default function () {
  allLevels.inventoryMenu.boundaries.bottom = allLevels.inventoryMenu.boundaries.top;
  allLevels.inventoryMenu.boundaries.bottom += ( ( player.inventory.length - 1 ) * allLevels.inventoryMenu.movement.y );
}
