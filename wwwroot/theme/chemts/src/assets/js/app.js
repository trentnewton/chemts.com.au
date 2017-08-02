import $ from 'jquery';
// var moment = require('moment');
// import whatInput from 'what-input';
// import './lib/directory-index';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

// function to set the height on fly

function autoHeight() {
	$('#main').css('min-height', 0);
	$('#main').css('min-height', (
		$(document).height()
		- $('#header').height()
		- $('#footer').height()
	));
}

// onDocumentReady function bind
$(document).ready(function() {
	autoHeight();
});

// onResize bind of the function
$(window).resize(function() {
	autoHeight();
});
