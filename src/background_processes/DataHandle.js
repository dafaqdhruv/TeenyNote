'use strict'

const DataStore = require('./DataStore.js')
const note = require('./note.js')

class DataHandle{

	constructor (){
		this.DS = new DataStore();
	}

	find(word, text){
		return (text.toLowerCase().indexOf(word) != -1) ? true : false;
	}
	fetchByWord(word){
		let temp = this.DS.getDataObject();
		let matches = temp.filter( x => this.find(word,x.text));
		return matches;
	}
	getIndex(id){
		let temp = this.DS.getDataObject();
		return temp.indexOf(temp.find(x => x.id === id))
	}

	getByID(id){
		let temp = this.DS.getDataObject();
		return temp.find(x => x.id == id)
	}

	showAll(){
		console.log(this.DS.getDataObject());
	}

	sortByID(temp){
		temp.sort((a,b)=>a.id-b.id);
	}

	getUniqueID(){
		let temp = this.DS.getDataObject();
		let ids = [];
		temp.forEach(x => {ids.push(x.id)});	
	    let max = (ids.length === 0) ? 0 : Math.max(...ids);

	    return max + 1;
	}

	createObject(title, text){
		let temp = this.DS.getDataObject();
		let obj = new note(this.getUniqueID(),title,text);
		temp.push(obj);
		this.sortByID(temp);
		this.DS.setDataObject(temp);
	}

	editObjectByID(id,title,text){
		let temp = this.DS.getDataObject();
		temp[this.getIndex(id)].title = title;
		temp[this.getIndex(id)].text = text;
		temp[this.getIndex(id)]._isEdited = true;
		this.DS.setDataObject(temp);

	}
	deleteObjectByID(id){
		id = parseInt(id,10);
		let temp = this.DS.getDataObject();
		temp = temp.filter(x => x.id != id)
		this.DS.setDataObject(temp);
	}
	deleteAllObjects(){
		this.DS.emptyFile();
	}

}

module.exports = DataHandle;

// // let newNote = new note(11,"NIGGER");
// // console.log(newNote);

// let ha = new DataHandle();
// let bitch = ["abcd","1234","zxy","5678"];
// // console.log(ha.getIndex('14'));

// ha.showAll();
// console.log(ha.fetchByWord('hey'));
// console.log(bitch.filter(x => x.includes('4')));
// ha.editObjectByID(4,"EDITED#","edited#")
// ha.createObject('Hey #1','#1');
// ha.createObject('Hey #2','#2');
// ha.createObject('Hey #3','#3');
// ha.createObject('Hey #4','#4');
// ha.createObject('Hey #5','#5');
// ha.createObject('Hey #6','#6');
// ha.createObject('Hey #7','#7');

// ha.deleteAllObjects();

// ha.createObject(newNote);

// ha.showAll();