'use strict'

class animal {

	constructor (name, legs, tails){
		this.Specie = name;
		this.num_legs = legs;
		this.hasTail = tails;

	}

	present(){
		return `The ${this.Specie} has ${this.num_legs} legs and ${this.hasTail} tails`
	}
}

//const Dog = new animal('Dog', 4, 1);

class Dog extends animal{

	constructor(name,brood,legs,tails){
		super(name,legs,tails);
		this.breed = brood;
	}
}

Dog.prototype.display = function() {
	return `The ${this.breed} ${this.Specie} has ${this.num_legs} and ${this.hasTail} tails.`;
};


const Gret = new Dog("Dog","Golden Retriever", 4, 1);

console.log(Gret.display());