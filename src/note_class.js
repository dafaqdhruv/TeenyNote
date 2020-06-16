'use strict'

class note {

	constructor (text,date,time){
		this.text = text;
		this.date = date;
		this.time = time;
	}

	get  value(){
		return this;
		
	}
}

module.exports = note;