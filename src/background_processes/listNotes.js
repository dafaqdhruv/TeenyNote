'use strict'

const DH = require('./background_processes/DataHandle.js')
const { ipcRenderer } = require('electron');

let handler = new DH();

function template(obj){
	let html = `<div class = "card" onclick = "loadNoteWindow(${obj.id})">
					<div class = "title">${obj.title} ${obj._isEdited ? '*' : ''}</div>
					<div class = "timestamp">${obj.date}	${obj.time}</div>
					<div class = "text">${obj.text.substring(0,27)}...</div>
				</div>`;
	return html;
}


function loadNoteWindow(id){
	console.log('ID +++++ ')
	console.log(id);
	ipcRenderer.send('load-note-window',id);
}



let html = '';
let temp = handler.DS.getDataObject();
temp.forEach(x => {html += template(x)});	
console.log(html)
document.getElementById("list").innerHTML = html;