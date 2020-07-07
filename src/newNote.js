// const remote = require('remote')
const { ipcRenderer } = require('electron')
const DataHandle = require('./background_processes/DataHandle.js')

// const Mousetrap = require('mousetrap')

const DataHandler =  new DataHandle();


ipcRenderer.on('save', () => {
	console.log("OHH YEAAH")
	let title = document.getElementById('title').value;
	let text = document.getElementById('note').textContent;
	console.log(title + ' ' +text)
	if(title.length != 0 && text.length != 0){
		DataHandler.createObject(title,text);
		DataHandler.showAll();
	}
})


ipcRenderer.on('load',(event,id) => {
	console.log('IDENTITY ==== ')
	console.log(id);
	let obj = DataHandler.getByID(id);
	console.log(obj);
	setInterval(()=>{
	document.getElementById('title').innerHTML = obj.title;
	document.getElementById('note').innerHTML = obj.text;
	document.getElementById('date').innerHTML = obj.date;
	document.getElementById('time').innerHTML = obj.time;
	},250);

})


// Mousetrap.bind('CmdOrCtrl+S', () => { 
// 	console.log('save shortcut pressed')
// 	// window.close();
//  })


// console.log('mousetrap == ' + Mousetrap);
// setInterval(()=>console.log('yeet'),1000)