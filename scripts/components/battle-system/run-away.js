import rng from './../rng';
import failedEscape from './failed-escape.js';
import escapedBattle from './escaped-from-battle';
import changeBattleState from './change-battle-state';

export default function () {
  if ( rng() <= 0 ) {
    changeBattleState(escapedBattle);
  } else {
    changeBattleState(failedEscape);
  }
}
