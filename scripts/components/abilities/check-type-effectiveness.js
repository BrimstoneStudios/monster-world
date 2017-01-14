export default function ( ability, defender ) {
  var damageModifier;

  if ( ability.type.effective.indexOf( defender.type ) >= 0 ) {
    currentMap.battleSystem.abilityUsed.damageMod = 'super';
    damageModifier = 1.5;
  } else if ( ability.type.ineffective.indexOf( defender.type ) >= 0) {
    currentMap.battleSystem.abilityUsed.damageMod = 'notVery';
    damageModifier = 0.5;
  } else {
    currentMap.battleSystem.abilityUsed.damageMod = 'none';
    damageModifier = 1;
  }
  return damageModifier;
}
