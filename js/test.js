var someFunc = function(){
	console.log("This is someFunc this: ");
	console.log(this);
}

var someOther = function() {
	console.log("This is someOther this ");
	console.log(this);
	someFunc.call(this);
}


var monster = {
	func : someOther.bind(this),
}