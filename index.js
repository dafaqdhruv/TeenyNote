'use strict'

const path = require('path');
const { app, ipcMain } = require('electron')

const Window = require('./src/window')
const DataStore = require('./src/DataStore.js')

const todosData = new DataStore( {name : 'Todos Main'})


function main () {
	const mainWin = new Window({file : "./index.html"});

}

app.on('ready', () => {setTimeout(()=>{main()},300)})

app.on('window-all-closed', function () { app.quit()})

