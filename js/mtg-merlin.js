jQuery(function($) {"use strict";

	var Utils = {
		// https://gist.github.com/1308368
		uuid : function(a, b) {
			for( b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');
			return b
		},
	};
	
	var someGlobal = [];

	var App = {
		// ************* Initialization ************* //
		init : function() {
			this.cacheElements();
			this.initPlugins();
			this.bindEvents();
		},
		cacheElements : function() {			
			//this.$someElement = $('');
			
		},
		initPlugins : function(){
		
		},
		bindEvents : function() {
			//this.$componentElement.on( 'click', this.onClick );
			
		},
		someFunction : function(){
			//App.$someElement;
		}
	};

	window.mtgMerlinApp = App.init();
});
