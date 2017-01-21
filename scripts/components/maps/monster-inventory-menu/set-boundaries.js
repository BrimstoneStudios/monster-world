import allMaps from './../all-maps';

export default function () {
  const menu = allMaps.monsterInventoryMenu;

  menu.boundaries.bottom = menu.boundaries.top;
  menu.boundaries.bottom += (player.monsterInventory.length - 1) * menu.movement.y;
}
