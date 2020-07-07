'use strict'

const { ipcRenderer } = require('electron')

document.getElementById('button-new-note').addEventListener('click',() => {
	ipcRenderer.send('open-new-note-window');
})

document.getElementById('button-listNotes').addEventListener('click',() => {
	ipcRenderer.send('open-list-notes-window');
})