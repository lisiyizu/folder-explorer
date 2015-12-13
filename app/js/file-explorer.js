/*
file explorer | 0.9.0
liscense: none
*/

'use strict';

const fs = require('fs');
const path = require('path');

class FileExplorer {
	constructor() {
		this.up = document.querySelector('#up');
		this.content = document.querySelector('.content');
		this.currentDir = '';
	}

	init() {
		this.findFolders('C:/Program files');
		this.up.addEventListener('click', (e) => {
			e.preventDefault();
			let dir = path.dirname(this.currentDir);
			this.findFolders(dir);
		});
	}

	findFolders(dir) {
		let files = [];
		let data = [];
		this.currentDir = dir;

		try {
			files = fs.readdirSync(dir);
		} catch(e) {
			console.log(e);
		}

		files.forEach((file) => {
			try {
				let isFolder = fs.statSync(path.join(dir, file)).isDirectory();

				if(isFolder)
					data.push({ 'name': file, 'dir': path.join(dir, file) });
			} catch(e) {
				console.log(e);
			}
		});

		this.showFolders(data);
	}

	showFolders(folders) {
		this.content.innerHTML = '';

		folders.forEach((folder) => {
			let text = document.createTextNode(folder.name);
			let li = document.createElement('li');
			let fa = document.createElement('i');
			let space = document.createTextNode(' ');

			li.setAttribute('href', folder.dir);
			fa.setAttribute('class', 'fa fa-folder');
			li.classList.add('folder');

			li.addEventListener('click', (e) => {
				let dir = e.target.getAttribute('href');
				this.findFolders(dir);
			});

			li.appendChild(fa);
			li.appendChild(space);
			li.appendChild(text);
			this.content.appendChild(li);
		});
	}
}

let fe = new FileExplorer();

window.addEventListener('load', () => {
	fe.init();
});