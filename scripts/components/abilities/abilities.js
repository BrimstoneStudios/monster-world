var allAbilities = {};

class Abilities {
  constructor(name, accuracy, category, power, type) {
    this.name = name;
    this.accuracy = accuracy;
    this.category = category;
    this.power = power;
    this.type = type;
  }

  useAbility () {
    abilityUsed.call( this, currentMap.battleSystem.playerBattleMonster );
  }
}

allAbilities.bite = new Abilities('Bite', 0.9, 'physical', 45, 'normal');

export default allAbilities;
