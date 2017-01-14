var PsychicType = function ( lvl ) {
  Monster.call( this, lvl );
};

PsychicType.prototype = Object.create( Monster.prototype );
PsychicType.prototype.constructor = PsychicType;
PsychicType.prototype.type = 'psychic';
