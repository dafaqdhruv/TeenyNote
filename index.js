'use strict'

const path = require('path');
const { app, ipcMain } = require('electron')

const Window = require('./src/window')
const DataStore = require('./src/DataStore')

const todosData = new DataStore( {name : 'Todos Main'})


function main () {

	let mainWindow = new Window ({
		file : path.join('./','index.html'),
		frame : false
	})

	let addTodoWindow

	mainWindow.once('show',() => {mainWindow.webContents.send('todos', todosData.todos)})

	ipcMain.on('add-todo-window', () => {

		console.log("biyatch")

		if(!addTodoWindow){

			addTodoWindow = new Window({ 
				file : path.join('./','add.html'),
				height : 400,
				width : 400,
				parent : mainWindow
			})

			addTodoWindow.on('closed', () => { addTodoWindow = null	})
		}

	})

	ipcMain.on('add-todo', (event,todo) => {
		const updatedTodos = todosData.addTodo(todo).todos
		mainWindow.send('todos',updatedTodos)
	})

	ipcMain.on('delete-todo', (event,todo) => {
		const updatedTodos = todosData.deleteTodo(todo).todos
		mainWindow.send('todos',updatedTodos)
	})

	console.log('STARTED BIYATCH')
}

app.on('ready', () => {setTimeout(()=>{main()},300)})

app.on('window-all-closed', function () { app.quit()})

