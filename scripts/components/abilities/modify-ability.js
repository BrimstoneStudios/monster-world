import rng from './../rng';

export default function (ability, attacker, defender) {
  const attributeAffected = ability.attribute;
  let target;

  ability.targetSelf ? target = attacker : target = defender;


  if (attributeAffected === 'condition') {
    if (rng() <= ability.modifier) {
      target[attributeAffected] = ability.conditionApplied;
    }
  } else {
    target[attributeAffected] *= ability.modifier;
  }
}
