define([
	'jquery',
	'underscore', 
	'backbone', 
	'app/views/counter'
], function ($, _, Backbone, CounterView){
	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view', 

		html: [
			'<div class="navbar">', 
				'<a class="navbar-brand" href="#">Weather Watcher</a>', 
				'<ul class="nav navbar-nav">', 
					'<li id="nav-dash"><a href="#">Dashboard</a></li>', 
					'<li id="nav-about"><a href="#">About</a></li>', 
				'</ul>', 
			'</div>', 
			'<div id="content"></div>'
		].join(''), 

		
		// Way to refer to the children of the main view
		views: {}, 
		initialize: function() {
			this.views['counter'] = new CounterView({
				id: 'counter-widget', 
				className: 'counter-widget'
			});

			this.$el.append(this.html);
		}, 
		events: {
			'click #nav-dash': 'onNavDash', 
			'click #nav-about': 'onNavAbout'
		}, 

		render: function(){
			this.$('#content').append(this.views['counter'].render().el);
			return this;
		},

		onNavDash: function(e) {
			alert('Dash button clicked');
		}
	});
	return AppView;
});