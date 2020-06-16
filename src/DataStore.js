'use strict'

const Store = require('electron-store');

class DataStore extends Store {

	constructor(settings){

		super(settings);
		this.todos = this.get('todos') || [];
	}

	saveTodos () {
		this.set('todos',this.todos);
		return this;
	}

	getTodos () {

		this.todos = this.get('todos') || [];
		return this;
	}

	addTodo (todo) {

		this.todos = [ ...this.todos,todo];
		return this.saveTodos();
	}

	deleteTodo (todo) {

		this.todos = this.todos.filter(t => t !== todo);
		return this.saveTodos();

	}
}


module.exports = DataStore;

/*
const fs = require('fs');
const path = require('path');
const note = require('./note_class')

const readTitles = 0;
function newf() {

	const file = fs.createReadStream('Notes.txt','utf-8')

	file.on('data',(chunk) => {
		console.log(chunk.toString())
		
	});
	console.log('85');

}

let data = 'yea oiiiiii';
let date = new Date();
var tempNote = new note(data,`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,`${date.getHours()}/${date.getMinutes()}/${date.getSeconds()}`);
console.log(JSON.stringify(tempNote));

*/