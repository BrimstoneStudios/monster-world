export default function ( ability, defender ) {
  if ( type[ability.type].super.indexOf( defender.type ) >= 0 ) {
    battle.abilityUsed.damageMod = 'super';
    damageModifier = 1.5;
  } else if ( type[ability.type].notVery.indexOf( defender.type ) >= 0) {
    battle.abilityUsed.damageMod = 'notVery';
    damageModifier = 0.5;
  } else {
    battle.abilityUsed.damageMod = 'none';
    damageModifier = 1;
  }
  return damageModifier;
}
