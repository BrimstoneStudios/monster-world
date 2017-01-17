import rng from './../rng';

export default function (ability, attacker, defender) {
  let target;
  const attributeAffected = ability.attribute;

  ability.targetSelf ? target = attacker : target = defender;


  if (attributeAffected === 'condition') {
    if (rng() <= ability.modifier) {
      target[attributeAffected] = ability.conditionApplied;
    }
  } else {
    target[attributeAffected] *= ability.modifier;
  }
}
