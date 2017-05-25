hljs.initHighlightingOnLoad();

var noAction = function (e) {
	
	if(!e.target.className.match(/\bbtn-download\b/))
	e.preventDefault();
	else {
		// e.preventDefault();
		e.target.addEventListener('animationend', function() {
			window.location.href = e.target.href;
		});
	}
}

var noActionButtons = document.getElementsByClassName('btn');


for (var i = 0; i < noActionButtons.length; i++) {
	noActionButtons[i].addEventListener('click', noAction, true);
}