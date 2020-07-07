'use strict'

const note = require('./background_processes/note.js')
const fs = require('fs')
const file = 'Notes.json'

let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let dd = date.getDate();
let mm = date.getMonth()+1;
let yyyy = date.getFullYear();
let id = 1;


function getVal(filename){
	let temp = fs.readFileSync(filename,'utf-8',(err,data)=>{if(err)throw err;}) 
	return temp;
}
function setVal(val,filename){
	fs.appendFile(filename,val,'utf-8',(err)=>{if(err)throw err;})
}
function clearFile(filename){
	fs.truncate(filename,0,()=>{console.log('emptied')})
}

var hey = '';
var heyString = [];
var heyJSON;
clearFile(file);

while(id<10){
	hey = new note(id,`yeaboi #${id++}`,`${dd}/${mm}/${yyyy}`,`${h}:${m}:${s}`);
	heyString.push( hey);
}
heyJSON = JSON.stringify(heyString);
setVal(heyJSON,'Notes.json');
console.log(heyString)	
console.log(heyJSON)
var ret = JSON.parse(heyJSON)
console.log(ret[4])
//clearFile(file);

// var ye = getVal(file);
// var yeOBJ = JSON.parse(ye);
// console.log(yeOBJ);
// console.log();
// console.log(ye);




/*
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
*/