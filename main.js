'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

let win = null;

app.on('ready', () => {
	win = new BrowserWindow({
		'center': true,
		'width': 800,
		'height': 400,
		'min-width': 800,
		'min-height': 400,
		'use-content-size': true
	});

	win.loadURL('file://' + __dirname + '/app/index.html');
	win.setMenu(null);

	win.on('closed', () => {
		win = null;
	});
});