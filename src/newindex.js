'use strict'

const note = require('./note.js')
const fs = require('fs')
const file = 'Notes.JSON'

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


// while(id<10){
// 	let hey = new note(id,`yeaboi #${id++}`,`${dd}/${mm}/${yyyy}`,`${h}:${m}:${s}`);
// 	let heyString = JSON.stringify(hey)+'\n';
// 	setVal(heyString,'Notes.txt');
// 	console.log(heyString)	
// 	// ye = getVal('Notes.txt');
// 	// console.log(JSON.stringify(ye[]));
// }

//clearFile('Notes.txt');

var ye = getVal(file);
console.log(JSON.stringify(ye));
console.log();
console.log(ye[1]);

// fs.writeFile('Notes.txt','','utf-8',(err)=>{if(err)throw err;})




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