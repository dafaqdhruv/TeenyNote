'use strict'

const path = require('path');
const { app, ipcMain, BrowserWindow} = require('electron')
const { Menu, MenuItem } = require('electron')


const Window = require('./src/background_processes/window')
// const Render= require('./src/render.js')


// Menu.setApplicationMenu(menu)

const _indexFiLe = path.join(__dirname,'index.html');
const _newNoteFile = path.join(__dirname,'src','showNote.html');
const _listNotesFile = path.join(__dirname,'src','listNotes.html');

function main () {

	const mainWin = new Window(_indexFiLe,{},true);
	let newNoteWindow = new Window(_newNoteFile, {parent : mainWin}, false)
	let listNotesWindow = new Window(_listNotesFile, {parent : mainWin}, false)




	// const Renderer = new Render();
	// const menu = Menu.buildFromTemplate([{label : "FUCK me",
	//  click : () => {
	// 	// ipcMain.send('save')
	// 	newNoteWindow.webContents.send('save');
	// }
	// }
	// ])
	// Menu.setApplicationMenu(menu)




	console.log(mainWin.isDestroyed());


	ipcMain.on('open-new-note-window', () => {

		if(newNoteWindow === null){
			newNoteWindow = new Window({ file : _newNoteFile, parent : mainWin}, false)
		}

		console.log('shit bruh thats al you had to say');
		// ipcMain.send('new-note');
		// Renderer.renderNewNoteWindow();
		// if(newNoteWindow ==
		console.log("ligma nuts new note")

		// if (newNoteWindow.isDestroyed()) {
		// 	console.log('yeet')
		// 	newNoteWindow.loadFile(_newNoteFile);
 		// 	}
		newNoteWindow.reload();
		newNoteWindow.show();
		mainWin.hide();
	})

	ipcMain.on('open-list-notes-window', () => {
		console.log('shit bruh thats al you had to say to list the motes');
		// ipcMain.send('new-note');
		// Renderer.renderNewNoteWindow();
		// if(newNoteWindow ==
		// console.log("YEEEUTS DELETUS")
		// this.listView.show();
		// console.log("render listView");
		// let html = '';
		// let temp = this.DataSource.DS.getDataObject();
		// temp.forEach(x => {html += template(x)});	
		// console.log(html)
		// document.getElementBYId("list").innerHTML = html;
		listNotesWindow.reload();
		listNotesWindow.show();
		mainWin.hide();
	})
	
	ipcMain.on('reopen-main',()=>{
		if(!mainWin.isVisible)
			mainWin.show();
	})

	ipcMain.on('load-note-window',(event,id) =>{
		console.log(id);
		newNoteWindow.reload();
		newNoteWindow.show();
		newNoteWindow.webContents.send('load',id);
		listNotesWindow.hide();
	})

	newNoteWindow.on('close',(e) => {
		// newNoteWindow.onBeforeUnload = (e) =>{
			// console.log(Wnidow.getFocusedWindow())
			// console.log(newNoteWindow.isFocused());
			// console.log(mainWin.isFocused());
			// e.returnValue = false;
			if(!mainWin.isVisible()){
				e.preventDefault();	
				console.log(mainWin.isVisible());
				console.log('Preventing closure newNoteWindow');
				listNotesWindow.webContents.send('save');
				listNotesWindow.hide();
				newNoteWindow.hide();
				mainWin.show();	
				mainWin.focus();

			}
			else {
				console.log('audacity of this bicth new note');
				console.log(mainWin.isVisible());
				// newNoteWindow.close();
				// listNotesWindow.close();
				mainWin.close();
			}

	})

	listNotesWindow.on('close',(e) => {
			// newNoteWindow.onBeforeUnload = (e) =>{
			// console.log(Wnidow.getFocusedWindow())
			// console.log(newNoteWindow.isFocused());
			// console.log(mainWin.isFocused());
			// e.returnValue = false;
			if(!mainWin.isVisible()){
				e.preventDefault();	
				console.log('Preventing closure listNotesWindow');
				newNoteWindow.hide();
				listNotesWindow.hide();
				mainWin.show();	
				mainWin.focus();	
			}
			else {
				// listNotesWindow.close();
				console.log('audacity of this bicth list notes');

				// listNotesWindow.close();
				mainWin.close();
			}
	})

	// mainWin.on('close',(e) => {
	// 	console.log('you can kill me but you cant hide')
	// 	if(!listNotesWindow.isDestroyed()){ 	listNotesWindow.isDestroyed(); console.log("i had to kill this pussy ass bitch again list note");}
	// 	if(!newNoteWindow.isDestroyed()){ 	newNoteWindow.isDestroyed(); console.log("i had to kill this pussy ass bitch again new note");}
	// })

	listNotesWindow.on('closed',() => {
		listNotesWindow = null;
		console.log('LN null')
	})

	newNoteWindow.on('closed',() => {
		newNoteWindow = null;
		console.log('NN null')
	})
	
}

// menu.append(new MenuItem({
//   label: 'Save',
//   accelerator: 'CmdOrCtrl+S',
//   click: () => { 
//   	ipcMain.send('save');
//   	console.log('Saved!') }
// }))
// menu.append(new MenuItem({
//   label: 'close',
//   accelerator: 'CmdOrCtrl+W',
//   click: () => { 
//   	ipcMain.send('save');
//   	console.log('Saved!') }
// }))




app.on('ready', () => {setTimeout(()=>{main()},300)})

app.on('window-all-closed', function () { 
	if(process.platform !== 'darwin'){
		app.quit();
	}	

})

// Menu.setApplicationMenu(Menu.buildFromTemplate([
//     {
//       label: "Quit",
//       accelerator: "CmdOrCtrl+Q",
//       click() {
//         app.quit();
//       }
//     },
//     {
//       label: "Close Tab",
//       accelerator: "CmdOrCtrl+W",
//       click() {
//       //   if(mainWin.isVisible())	mainWin.close();
//       //   if(newNoteWin.isVisible())	newNoteWin.close();
//       //   if(listNotesWin.isVisible())	listNotesWin.close();
//       window.close();
//       }
//     }
// ]));