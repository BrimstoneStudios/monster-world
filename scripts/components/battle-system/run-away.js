import rng from './../rng';
import escapedBattle from './escaped-from-battle';
import changeBattleState from './change-battle-state';

export default function () {
  if ( rng() <= 1 ) {
    changeBattleState(escapedBattle);
  } else {
    // changeBattleState(battleFailedRunAway);
  }
}
