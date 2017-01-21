import allMaps from './../all-maps';

export default function () {
  const movement = allMaps.inventoryMenu.movement;
  const menuBoundaries = movement.boundaries;

  menuBoundaries.bottom = menuBoundaries.top;
  menuBoundaries.bottom += (player.inventory.length - 1) * movement.distance.y;
}
