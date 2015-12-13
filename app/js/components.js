'use strict';

function height() {
	let content = document.querySelector('.content');
	let header = document.querySelector('.header');
	let fileExplorer = document.querySelector('#file-explorer');
	let height = fileExplorer.offsetHeight - header.offsetHeight + 'px';
	content.setAttribute('style', 'height: ' + height);
}

function init() {
	window.addEventListener('resize', function () {
		height();
	});

	window.addEventListener('load', function () {
		height();
	});
}

init();