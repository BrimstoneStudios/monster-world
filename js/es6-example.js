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