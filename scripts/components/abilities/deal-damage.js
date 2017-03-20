export default function (attacker, ability, damageModifier, defender) {
  // Still needs accuracy modifier
  let damage;
  const power = ability.power;

  // Physical attacks use the attack and defense attributes
  if (ability.category === 'physical') {
    damage = power * (attacker.attack * 1.5) * 0.04 / defender.defense * damageModifier;

  // Special attacks use the spAttack and spDefense attributes
  } else if (ability.category === 'special') {
    damage = power * (attacker.spAttack * 1.5) * 0.04 / defender.spDefense * damageModifier;
  }

  if (typeof damage !== 'undefined') {
    defender.currentHp = Math.round(defender.currentHp - damage);
  }
}
