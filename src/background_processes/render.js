'use strict'

const electron = require('electron');
const DataHandle = require('./DataHandle.js');
const path = require('path');
const Window = require('./window.js');

const { ipcRenderer } = require('electron')

function template(obj){
	let html = `<div class = "card">
					<div class = "title">${obj.title} ${obj._isEdited ? '*' : ''}</div>
					<div class = "timestamp">${obj.date}	${obj.time}</div>
					<div class = "text">${obj.text.substring(0,47)}...</div>
				</div>`;
	return html;
}

class render{

	constructor(){
		this.DataSource = new DataHandle();
		this.newNote = new Window (path.join(__dirname,'./showNote.html'), {}, false);
		this.listView = new Window (path.join(__dirname,'./listNotes.html'), {}, false);
	}

	renderNewNoteWindow(){
		this.newNote.show();
		console.log("render newnote");
		// ipcRenderer.send('reopen-main');
		this.checkWindow(this.newNote);
	}

	renderListNotesWindow(){
		this.listView.show();
		console.log("render listView");
		let html = '';
		let temp = this.DataSource.DS.getDataObject();
		temp.forEach(x => {html += template(x)});	
		console.log(html)
		document.getElementBYId("list").innerHTML = html;
		console.log('done')
	}

	checkWindow(x){
		x.on('closed',() => {
			console.log('Fuck me in the ass')
			ipcRenderer.send('reopen-main');
			x = null;
		})

	}
}

module.exports = render;

// console.log(__dirname);

// let DH = new DataHandle();
// let gg = DH.getByID(4);
// console.log(gg);
// console.log();
// console.log(template(gg));


// let html = '';
// let temp = DH.DS.getDataObject();
// temp.forEach(x => {html += template(x)});	
// console.log(html);