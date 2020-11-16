const { app, BrowserWindow, dialog, Menu } = require('electron');
const path = require('path');

process.env.NODE_ENV = 'production';

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		}
	});

	mainWindow.loadFile(path.join(__dirname, 'index.html'));
	//mainWindow.webContents.openDevTools();
};
app.on('ready', function () {
	createWindow();
});
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
