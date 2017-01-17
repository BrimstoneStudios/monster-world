import allMaps from './../all-maps';

export default function () {
  allMaps.inventoryMenu.boundaries.bottom = allMaps.inventoryMenu.boundaries.top;
  allMaps.inventoryMenu.boundaries.bottom += (player.inventory.length - 1) * allMaps.inventoryMenu.movement.y;
}
