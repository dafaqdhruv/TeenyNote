'use strict'

const fs = require('fs');
const path = require('path');
const note = require('./note.js')

const TeenyNoteDirectory = path.join(__dirname,"..","..")
const TeenyNoteSourceDirectory = path.join(__dirname,"..");
const TeenyNoteDataDirectory = path.join(TeenyNoteSourceDirectory,"data");
const TeenyNoteMediaDirectory = path.join(TeenyNoteSourceDirectory,"media");
const DataFile = path.join(TeenyNoteSourceDirectory,'data','Notes.json')

class DataStore{
	constructor (filename = DataFile){
		
		this._mainStorageFile = filename;
		this._ensureDirectories();
	}

	_ensureDirectories(){

		if(!fs.existsSync(TeenyNoteDirectory)){
			fs.mkdirSync(TeenyNoteDirectory)
		}
		if(!fs.existsSync(TeenyNoteSourceDirectory)){
			fs.mkdirSync(TeenyNoteSourceDirectory)
		}
		if(!fs.existsSync(TeenyNoteMediaDirectory)){
			fs.mkdirSync(TeenyNoteMediaDirectory)
		}
		if(!fs.existsSync(TeenyNoteDataDirectory)){
			fs.mkdirSync(TeenyNoteDataDirectory)
		}
		console.log(TeenyNoteDirectory)
		console.log(TeenyNoteSourceDirectory)
		console.log(TeenyNoteMediaDirectory)
		console.log(TeenyNoteDataDirectory)
		console.log(this._mainStorageFile)
	}

	getDataObject(){
		let obj = fs.readFileSync(this._mainStorageFile,'utf-8',(err)=>{if(err) throw err;})
		return obj.length ? JSON.parse(obj) : [];
	}

	setDataObject(data){
		data = JSON.stringify(data);
		fs.writeFileSync(this._mainStorageFile,data,'utf-8',(err)=>{
			if (err) throw err;
			else console.log("Saved");
		});
	}

	emptyFile(){
		fs.truncateSync(this._mainStorageFile,0,(err) => {if(err) throw err;});
		console.log("emptied");
	}
}

module.exports = DataStore;

// let ha = new DataStore();
// let a = ha. getDataObject();
// console.log(a);