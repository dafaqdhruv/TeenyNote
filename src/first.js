/*console.log("HEllo  world");

function draw_pattern (n){

	let i = 0;
	let j = 0;
	let k = 0;

	for(i = 0;i < n/2;i++){
		for (j = 0; j<(n/2 -i);j++){
			process.stdout.write('*');
		}
		while(j<(n/2 +i)){
			process.stdout.write(' ');
			j++;
		}
		while(j<n){
			process.stdout.write('*');
			j++;
		}
		console.log();
	}
}

draw_pattern(50);*/


// const electron = require('electron')
// const app = electron.app
// const browserWindow = electron.browserWindow

// function createWindow(){

// 	let win = new browserWindow({
// 		height : 600,
// 		width : 800,
// 		webPreferences : {
// 			nodeIntegration : true
// 		}
// 	})

// 	win,loadFile('file.html')
// 	return win
// }


// app.on('ready',() =>{const mainWin = createWindow()})

// app.on('window-all-closed, () => {app.quit()})


console.log("sodno");
  // function Clock({ template }) {
  
  //   let timer;
  
  //   function render() {
  //     let date = new Date();
  
  //     let hours = date.getHours();
  //     if (hours < 10) hours = '0' + hours;
  
  //     let mins = date.getMinutes();
  //     if (mins < 10) mins = '0' + mins;
  
  //     let secs = date.getSeconds();
  //     if (secs < 10) secs = '0' + secs;
  
  //     let output = template
  //       .replace('h', hours)
  //       .replace('m', mins)
  //       .replace('s', secs);
  
  //     console.log(output);
  //   }
  
  //   this.stop = function() {
  //     clearInterval(timer);
  //   };
  
  //   this.start = function() {
  //     render();
  //     timer = setInterval(render, 1000);
  //   };
  
  // }

class Clock{
	
    constructor({template}){
    this.template2 = template;
    this.timer = 0;

    console.log(this.template2);
    }
   	render = () => {
      let date = new Date();

      this.hours = date.getHours();
      if (this.hours < 10) this.hours = '0' + this.hours;
  
      this.mins = date.getMinutes();
      if (this.mins < 10) this.mins = '0' + this.mins;
      this. secs = date.getSeconds();
      if(this.secs < 10) this.secs = '0' + this.secs;
  
      let output = this.template2.replace('h', this.hours).replace('m',  this.mins).replace('s',  this.secs);
  
       console.log(output);
     
    }

    start = () => {
      this.render();
      console.log('iuagf');
      this.timer = setInterval(()=>{this.render()},1000)
    }
    stop = () => {
      clearInterval(timer);
    }
}
    

  let clock = new Clock({template: 'h:m:s'});
 clock.start();

