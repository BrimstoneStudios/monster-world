export default class {
  constructor () {
    this.location = {
      x: 0,
      y: 0
    }
  }

  update () {
    if ( typeof currentLevel.sprite !== 'undefined' ) {
      this.sprite = currentLevel.sprite;
    } else {
      this.sprite = this.savedAttributes.sprite;
    }
  }

  render () {
    ctx.drawImage( Resources.get( this.sprite ), this.location.x, this.location.y );
  }
}

// PlayerMon.prototype = Object.create( NormalType.prototype );
// PlayerMon.prototype.constructor = PlayerMon;
// PlayerMon.prototype.name = 'PlayerMon';
// PlayerMon.prototype.player = 1;
// PlayerMon.prototype.hpMult = 0;
// PlayerMon.prototype.attackMult = 3;
// PlayerMon.prototype.defenseMult = 0;
// PlayerMon.prototype.spAttackMult = 2;
// PlayerMon.prototype.spDefenseMult = 1;
// PlayerMon.prototype.speedMult = 3;
// PlayerMon.prototype.abilities = [abilities.scratch, abilities.stare];
