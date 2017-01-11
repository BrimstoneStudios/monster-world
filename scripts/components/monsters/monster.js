// Monster class determines the initial stats of the monster based on the level and the multiplier
// Multipliers defined later on individual monsters.
export class Monster {
  constructor(lvl) {
    this.level = lvl;
    this.hp = 10 + ( this.level * this.hpMult );
    this.currentHp = this.hp;
    this.condition = 'healthy';
    this.attack = ( ( ( ( 5 + this.attackMult ) * 11 ) * this.level ) / 100 ) + 2;
    this.defense = ( ( ( ( 5 + this.defenseMult ) * 11 ) * this.level ) / 100 ) + 2;
    this.spAttack = ( ( ( ( 5 + this.spAttackMult ) * 11 ) * this.level ) / 100 ) + 2;
    this.spDefense = ( ( ( ( 5 + this.spDefenseMult ) * 11 ) * this.level ) / 100 ) + 2;
    this.speed = ( ( ( ( 5 + this.speedMult ) * 11 ) * this.level ) / 100 ) + 2;
    this.currentExp = 0;
    this.expToLevel = 10 + ( 3 * this.level );
    this.expReward = 5 + ( 3 * this.level );
  }
};
Monster.prototype.controller = 'computer';

Monster.prototype.update = function () {
};

// Render the monster onto the screen
Monster.prototype.render = function ( x, y ) {
  ctx.drawImage( Resources.get( this.sprite ), x, y, 100, 100 );
};

// Level up method to update stats based on current level
Monster.prototype.levelUp = function () {
  battle.levelUp = 1;
  this.level++;
  this.hp = 1 + ( this.level * this.hpMult );
  this.currentHp = this.currentHp + 5;
  this.attack = ( ( ( ( 5 + this.attackMult ) * 11 ) * this.level ) / 100 ) + 2;
  this.defense = ( ( ( ( 5 + this.defenseMult ) * 11 ) * this.level ) / 100 ) + 2;
  this.spAttack = ( ( ( ( 5 + this.spAttackMult ) * 11 ) * this.level ) / 100 ) + 2;
  this.spDefense = ( ( ( ( 5 + this.spDefenseMult ) * 11 ) * this.level ) / 100 ) + 2;
  this.speed = ( ( ( ( 5 + this.speedMult ) * 11 ) * this.level ) / 100 ) + 2;
  this.currentExp = 0;
  this.expToLevel = 10 + ( 4 * this.level );
};

// Show player and enemy monster stats on the screen during a battle
Monster.prototype.renderBtlMonStats = function ( player ) {
  ctx.font = '35px Arial';
  if ( player === 'player' ) {
    ctx.fillText( this.name, 350, 260 );
    ctx.fillText( 'Lv', 610, 260 );
    ctx.fillText( this.level, 650, 260 );
    ctx.fillText( 'HP:', 350, 300 );
    ctx.fillText( this.currentHp, 450, 300 );
    ctx.fillText( '/', 495, 300 );
    ctx.fillText( this.hp, 510, 300 );
  } else {
    ctx.fillText( this.name, 50, 60 );
    ctx.fillText( 'Lv', 310, 60 );
    ctx.fillText( this.level, 350, 60 );
    ctx.fillText( 'HP:', 50, 100 );
    ctx.fillText( this.currentHp, 150, 100 );
    ctx.fillText( '/', 195, 100 );
    ctx.fillText( this.hp, 210, 100 );
  }
};

