/*!
 * Ripple.js v1.0 (http://www.idevia.in)
 * Copyright 2016-2017 iDevia.
 * Licensed under MIT (https://github.com/idevia/ripplejs/blob/master/license.txt)*/
'use strict';
var ripplejs = {};
ripplejs.ripple = function(e){
	
	var target = e.target;
	var ripple;
	var rippleClass;
	var yOffset = target.offsetTop + ( target.offsetParent ? target.offsetParent.offsetTop : 0 );
	
	var rect = target.getBoundingClientRect();

	if (target.className.match(/\bripple-dark\b/)) {

		ripple = target.querySelector('.ripple-dark-effect');
		rippleClass = 'ripple-dark-effect';
 
	} else if (target.className.match(/\bripple-light\b/)){

		ripple = target.querySelector('.ripple-light-effect');
		rippleClass = 'ripple-light-effect';
		
	} else {
		return false;
	}

	if(!ripple) {
		ripple = document.createElement('span');
		ripple.className = rippleClass;
		ripple.style.height = ripple.style.width = 2*(Math.max(rect.width, rect.height)) + 'px';
		target.appendChild(ripple);
	}
	ripple.classList.remove('show');
	
	var top = (e.pageY - yOffset) - ripple.offsetHeight / 2 ;
	var left = (e.pageX - rect.left) - ripple.offsetWidth / 2 ;
	ripple.style.top = top + 'px';
	ripple.style.left = left + 'px';

	ripple.classList.add('show');

	setTimeout(function(){
		ripple.remove();
	}, 650);	

	return false;
}

ripplejs.buttons = document.getElementsByClassName('ripple');

for(var i = 0; i < ripplejs.buttons.length; i++) {
	ripplejs.buttons[i].addEventListener('click', ripplejs.ripple, false);
}