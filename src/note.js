'use strict'

class note {

	constructor (ID,text,date,time){
		this.id = ID;
		this.text = text;
		this.date = date;
		this.time = time;
	}

	get  value(){
		return this;
		
	}
}

module.exports = note;