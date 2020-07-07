'use strict'

function clock(){
	setInterval(()=>{

					let date = new Date();
					let h = date.getHours();
					let m = date.getMinutes();
					let s = date.getSeconds();
					let dd = date.getDate();
					let mm = date.getMonth()+1;
					let yyyy = date.getFullYear();

					h = (h<10)?('0'+h):(h);
					m = (m<10)?('0'+m):(m);
					s = (s<10)?('0'+s):(s);
					dd = (dd<10)?('0'+dd):(dd);
					mm= (mm<10)?('0'+mm):(mm);

					document.getElementById("date").innerHTML = `Date : ${dd}/${mm}/${yyyy}\nTime : ${h}:${m}:${s}`;

					var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
					document.getElementById("date").style.paddingLeft = width - 350;
					document.getElementById("note").style.width = width-100;
				}, 250);
};