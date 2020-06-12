'use strict'

const { BrowserWindow } = require ('electron')

const defaultProps = {

	height : 600,
	width : 800,
	show : false,
	webPreferences : {
		nodeIntegration : true
	}
}

class Window extends BrowserWindow{

	constructor({file, ...windowSettings}){

		super({...defaultProps, ...windowSettings})

		this.loadFile(file)
//		this.webContents.openDevTools()

		this.once('ready-to-show',() => {this.show()} )
	}

}

module.exports = Window