define([
	'backbone', 
	'app/models/day'
], function(Backbone, DayModel) {
	'use strict'; 

	var DaysCollection = Backbone.Collection.extend({
		model: DayModel, 
		url: 'http://api.wunderground.com/api/ed615089e274c957/forecast/q/IT/Magenta.json',
		sync: function(method, model, options){
			options.timeout = 8000; 
			options.dataType = "jsonp";
			return Backbone.sync(method, model, options);
		}, 
		parse: function(response) {
			// returns an array of each of the days that we want to instantiate as day models 
			return response.forecast.simpleforecast.forecastday;
		}
	});

	return DaysCollection; 
});