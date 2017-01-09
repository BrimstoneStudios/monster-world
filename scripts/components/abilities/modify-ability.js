export default function ( ability, attacker, defender ) {
  var target;

  ability.targetSelf ? target = attacker : target = defender;

  attributeAffected = ability.attribute;
  if ( attributeAffected === 'condition' ) {
    if ( rng() <= ability.modifier ) {
      target[attributeAffected] = ability.conditionApplied;
    }
  } else {
    target[attributeAffected] = target[attributeAffected] * ability.modifier;
  }
}
