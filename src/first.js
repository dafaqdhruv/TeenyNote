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


const electron = require('electron')
const app = electron.app
const browserWindow = electron.browserWindow

function createWindow(){

	let win = new browserWindow({
		height : 600,
		width : 800,
		webPreferences : {
			nodeIntegration : true
		}
	})

	win,loadFile('file.html')
	return win
}


app.on('ready',() =>{const mainWin = createWindow()})

app.on('window-all-closed, () => {app.quit()})