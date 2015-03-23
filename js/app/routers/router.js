define([
	'jquery', 
	'underscore', 
	'backbone'
], function ($, _, Backbone) {
	'use strict'; 
	// define all our routes
	var Router = Backbone.Router.extend({
		// these are methods
		routes: {
			'': 'goToDash', 
			'dash': 'goToDash', 
			'about': 'goToAbout'
		}, 

		initialize: function(view) {
			this.appView = view; 
		}, 

		goToDash: function () {
			this.appView.setPage('dash');
		}, 

		goToAbout: function() {
			this.appView.setPage('about');
		}

	});

	return Router; 

});