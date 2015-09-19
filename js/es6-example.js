
//var fireAttack = function(){
 // console.log("I'M fire attacking!", this.name);
//}

// function getMonster(){
//   var monster = {};
//   monster.fireAttack = fireAttack.bind(monster);
//   return monster;
// }

// var monster = getMonster();
// monster.fireAAttack();

// function megaMonster(){
//   var proto = getMonster();
//   proto.megaAttack = function(){
//     console.log(this.damage + "RARRR!!!!");
//   }
//   return proto;
// }


class Monster {
  constructor(){
  	console.info("BWAHAHA! I AM A MONSTER")
  }
}

class FireType extends Monster {
  constructor(){
  	super();
  	console.info("AND ALSO FIRE!!!");
  }
}

var thing = new FireType();