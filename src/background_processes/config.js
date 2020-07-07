'use strict'

const fs = require('fs')
const os = require('os')
const path = require('path')
const pkg = require('../package.json')

const {join} = path;
const {default : defaultConfig} = pkg.configuration;

class Config{

	constructor(){
		this._configFile = join(__dirname,"src","data","config.json")
		_ensureConfigFile()
	}

	_ensureConfigFile(){
		if(fs.existsSync(this._configFile)) 
			return;
	
		const data = JSON.stringify(defaultConfig,null,4);
		fs.writeFileSync(_configFile,data,'utf-8');
	}

	_formatTeenyNoteDirectory(path){
		return join(__dirname)
	}

	get(){
		let config = {};
		const content = fs.readFileSync(this._configFile,'utf-8');
		config = JSON.parse(content);
		return Object.assign({},defaultConfig,config);
	}
}

module.exports = new Config();