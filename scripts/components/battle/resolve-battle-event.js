import rng from './../rng';
import allMaps from './../maps/all-maps';

export default function () {
  // if true enter battle
  if ( rng() <= 0.5 ) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = currentMap;
    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    currentMap = allMaps.battleLevel;
    player.initLocation();
  }
}
