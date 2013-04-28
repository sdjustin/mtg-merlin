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
			this.$previous = $('#previous');
			this.$card = $('#card');
			this.$next = $('#next');
			this.$count = $('#card-count');
			this.$timer = $('#timer');
			this.$match = $('#match');
			this.$done = $('#done');
		},
		initPlugins : function(){
		
		},
		bindEvents : function() {
			this.$previous.on( 'click', this.previousClick );
			this.$next.on( 'click', this.nextClick );
			this.$match.on( 'click', this.matchClick );
			this.$done.on( 'click', this.doneClick );
		},
		previousClick : function(){
			//App.$someElement;
			var $current = $('.current');
			$current.removeClass('current').hide();
			if($current.prev().size() !== 0){
				$current.prev().addClass('current').show();
			}else{
				$('#card-bg-2').addClass('current').show();
			}
		},
		nextClick : function(){
			//App.$someElement;
			var $current = $('.current');
			$current.removeClass('current').hide();
			if($current.next().size() !== 0){
				$current.next().addClass('current').show();
			}else{
				$('#card-bg-1').addClass('current').show();
			}	
		},
		matchClick : function(){
			//App.$someElement;
		},
		doneClick : function(){
			//App.$someElement;
		}
	};

	window.mtgMerlinApp = App.init();
});
