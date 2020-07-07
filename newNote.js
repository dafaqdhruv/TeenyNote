const Mousetrap = require('mousetrap')

// const DataHandler =  new DataHandle();

// ipcRenderer.on('save', () => {
// 	let title = document.getElementById("title");
// 	let text = document.getElementById('note');
// 	DataHandler.createObject(title,text);
// 	DataHandler.showAll();
// })

Mousetrap.bind('CmdOrCtrl+W', () => { 
	console.log('close shortcut pressed')
	window.close();
 })


console.log( Mousetrap);