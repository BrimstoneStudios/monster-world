export default function () {
  const movement = monsterWorld.maps.monsterInventoryMenu.movement;
  const boundaries = movement.boundaries;

  boundaries.bottom = boundaries.top;
  boundaries.bottom += (player.monsterInventory.length - 1) * movement.distance.y;
}
