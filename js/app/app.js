define([
	'jquery', 
	'bootstrap'

], function ($, bootstrap) {
	'use strict';

	var id = 'content'

	var getId = function () {
		return id; 
	};

	var initialize = function() {
			$('body').append('<div id="'+id+'"></div>')
	};

	var getTimeString = function(){
		var date = new Date;
		return [date.getHours(), ':', date.getMinutes()].join('')

	};

	var displayTime = function (){
		var html = [
			'<div class="alert">', 
			'<button type="button" class="close" data-dismiss="alert">&times;</button>', 
			'<h1>The Time Is: </h1>', 
			'<h1>'+getTimeString()+'</h1>',
			'</div>'

		].join('');
		$('#'+ id).html(html);

	};
	
	return{
		initialize: initialize,
		displayTime: displayTime,
		getId: getId

	}
});