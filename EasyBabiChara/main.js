const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
	var Screen = electron.screen;
	var size = Screen.getPrimaryDisplay().workAreaSize;
	mainWindow = new BrowserWindow({
		width: size.width, 
		height: size.height,
		transparent: true,
		frame: false,
		resizable: false,
		alwaysOnTop: true
	});
	mainWindow.setIgnoreMouseEvents(true, {forward: true});
	mainWindow.setHasShadow(false);
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});