// Types: normal, fire, water, grass
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A special effect on some abilities


// Template:

// : {
// 	name: '',
// 	type: '',
// 	category:'',
// 	power:,
// 	accuracy:,
// 	effect:,
// },

// Attack function for physical attacks
var attackFunc = function(){
	console.log(this);
	// Still needs random modifier, effectiveness modifier, accuracy modifier
	var damage = (((power*state.this.attack)*0.1)/state.enemyToBattle.defense);
	state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
	if (state.enemyToBattle.currentHp < 0){
		state.enemyToBattle.currentHp = 0;
		state.playerBattleMonster.expGain();
	}
};

// Attack function for special attacks
var spAttackFunc = function(){
	var damage = (((this.power*state.playerBattleMonster.spAttack)*0.1)/state.enemyToBattle.spDefense);
	state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
	if (state.enemyToBattle.currentHp < 0){
		state.enemyToBattle.currentHp = 0;
		state.playerBattleMonster.expGain();
	}
};


// Attack function for enemy monsters
var enemyAbilityUsed = function(){
	var randomAttack = Math.floor(Math.random() * state.enemyToBattle.abilities.length);
	state.enemyAttackUsed = state.enemyToBattle.abilities[randomAttack];
	var damage = 0;
	if(state.enemyAttackUsed.category === "special"){
		damage =(((state.enemyAttackUsed.power*state.enemyToBattle.spAttack)*0.1)/state.playerBattleMonster.spDefense);
	}
	else{
		damage =(((state.enemyAttackUsed.power*state.enemyToBattle.attack)*0.1)/state.playerBattleMonster.defense);
		
	}
	
	state.playerBattleMonster.currentHp = Math.round(state.playerBattleMonster.currentHp - damage);
	
	if(state.playerBattleMonster.currentHp <= 0){
		state.playerBattleMonster.currentHp = 0;
		if (state.playerBattleMonster.player === 1){
			// Render game over
			state.battleState = 0;
			state.currentLevel = 'gameOver';
			player.x = 0;
			player.y = 0;
		}
		state.battleState = 'battleMonsterDie';
	}
}

// Database of monster abilities
var abilities2 = {
	scratch: function() {
		var name = 'Scratch';
		var type = 'normal';
		var category = 'physical';
		var power = '40';
		var accuracy = '1';
		var effect = '';
		attackFunc.call(this);
	}
};










