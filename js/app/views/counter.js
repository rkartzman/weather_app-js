define([
	'jquery', 
	'underscore', 
	'backbone'
], function($, _, Backbone) {
	'use strict';

	var CounterView = Backbone.View.extend({
		count: 0, 

		initialize: function(){

		}, 

		events: {
			'click span': 'addToCounter'
		}, 

		render: function(){
			var html = '<h3> U <span> Clicked </span>' + this.count + ' Times</h3>';
			this.$el.html(html);
			return this; 			
		}, 
		addToCounter: function (){
			this.count ++; 
			this.render();
		}

	});

	return CounterView; 
});