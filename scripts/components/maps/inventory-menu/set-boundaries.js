export default function () {
  const movement = monsterWorld.maps.inventoryMenu.movement;
  const menuBoundaries = movement.boundaries;

  menuBoundaries.bottom = menuBoundaries.top;
  menuBoundaries.bottom += (monsterWorld.player.inventory.length - 1) * movement.distance.y;
}
