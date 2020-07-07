'use strict'

class note {

	constructor (ID,title = 'Sample Heading...',text = 'Random Text...',date = this.getDate(),time = this.getTime()){
		this.id = ID;
		this.title = title;
		this.text = text;
		this.date = date;
		this.time = time;
		this._isEdited = false;
	}

	get  value(){
		return this;
		
	}

	getDate(){
		let date = new Date();
		let dd = date.getDate();
		let mm = date.getMonth() + 1;
		let yyyy = date.getFullYear();

		dd = (dd > 10) ? (dd) : ('0'+dd);
		mm = (mm > 10) ? (mm) : ('0'+mm);
		yyyy = (yyyy > 10) ? (yyyy) : ('0'+yyyy);

		return `${dd}/${mm}/${yyyy}`;
	}

	getTime(){
		let date = new Date();
		let h = date.getHours();
		let m = date.getMinutes();
		let s = date.getSeconds();

		h = (h > 10) ? (h) : ('0' + h);
		m = (m > 10) ? (m) : ('0' + m);
		s = (s > 10) ? (s) : ('0' + s);

		return `${h}:${m}:${s}`;
	}
}

module.exports = note;