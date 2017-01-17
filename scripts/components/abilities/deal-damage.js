export default function (attacker, ability, damageModifier, defender) {
  // Still needs accuracy modifier
  // Physical attacks use the attack and defense attributes
  var damage;

  if (ability.category === 'physical') {
    damage = ability.power * (attacker.attack * 1.5) * 0.04 / defender.defense * damageModifier;
  } else if (ability.category === 'special') { // Special attacks use the spAttack and spDefense attributes
    damage = ability.power * (attacker.spAttack * 1.5) * 0.04 / defender.spDefense * damageModifier;
  }

  if (typeof damage !== 'undefined') {
    defender.currentHp = Math.round(defender.currentHp - damage);
  }
}
