'use strict'

const { BrowserWindow } = require ('electron')

const defaultProps = {

	height : 600,
	width : 800,
	show : false,
	// frame :false,
	webPreferences : {
		nodeIntegration : true
	}
}

class Window extends BrowserWindow{

	constructor(file, { ...windowSettings}, to_show = true){

		super({...defaultProps, ...windowSettings})

		this.loadFile(file)
		this.webContents.openDevTools()

		if(to_show){
			this.once('ready-to-show',() => {this.show()} )
		}
	}

}

module.exports = Window;