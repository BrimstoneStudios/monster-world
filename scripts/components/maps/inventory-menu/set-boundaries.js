import allMaps from './../all-maps';

export default function () {
  const menu = allMaps.inventoryMenu;

  menu.boundaries.bottom = menu.boundaries.top;
  menu.boundaries.bottom += (player.inventory.length - 1) * menu.movement.y;
}
