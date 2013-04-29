jQuery(function($) {"use strict";

	var Utils = {
		// https://gist.github.com/1308368
		uuid : function(a, b) {
			for( b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');
			return b
		},
	};
	
	var cardIndex = {"en": [
						       { "eddition": "m13",
						         	"cards": [2,3,4]},
						       { "eddition": "m12",
						       		"cards": [2,3]}
					]};

	var App = {
		// ************* Initialization ************* //
		init : function() {
			this.cacheGlobalElements();
			this.initPlugins();
			this.bindGlobalEvents();
		},
		cacheGlobalElements : function() {			
			this.$screen = $('#screen');
			this.$templateHome = $('#home-template');
			this.$templatePlay = $('#play-template');
			this.$templateHowTo = $('#howTo-template');
			this.$templateProfile = $('#profile-template');
			this.$templateRankings = $('#rankings-template');
			this.$templatePlayAction = $('#play-action-template');
			this.$homeView = $('#homeView');
			this.$playView = $('#playView');
			this.$howToView = $('#howToView');
			this.$profileView = $('#profileView');
			this.$rankingsView = $('#rankingsView');
			this.$navCollapse = $('.nav-collapse');
		},
		cacheHomeElements : function() {
			
		},
		cachePlayElements : function() {
			App.$play = $('#play');
		},
		cacheHowToElements : function() {
			
		},
		cacheProfileElements : function() {
			
		},
		cacheRankingsElements : function() {
			
		},
		cachePlayActionElements : function() {
			if(typeof App.$previous == 'undefined'){ // no need to redefine
				App.$previous = $('#previous');
				App.$card = $('#card');
				App.$cardArt = $('#card-art');
				App.$cardBg1 = $('#card-bg-1');
				App.$cardBg2 = $('#card-bg-2');
				App.$cardBg3 = $('#card-bg-3');
				App.$cardBg4 = $('#card-bg-4');
				App.$cardBg5 = $('#card-bg-5');
				App.$next = $('#next');
				App.$count = $('#card-count');
				App.$timer = $('#timer');
				App.$match = $('#match');
				App.$done = $('#done');
			}
		},
		bindGlobalEvents : function() {
			App.$homeView.on( 'click', function(){
				App.showView(App.$templateHome.html(), null, App.cacheHomeElements, App.bindHomeEvents)
			});
			App.$playView.on( 'click', function(){
				App.showView(App.$templatePlay.html(), null, App.cachePlayElements, App.bindPlayEvents);
			});
			App.$howToView.on( 'click', function(){
				App.showView(App.$templateHowTo.html(), null, App.cacheHowToElements, App.bindHowToEvents);
			});
			App.$profileView.on( 'click', function(){
				App.showView(App.$templateProfile.html(), null, App.cacheProfileElements, App.bindProfileEvents);
			});
			App.$rankingsView.on( 'click', function(){
				App.showView(App.$templateRankings.html(), null, App.cacheRankingElements, App.bindRankingsEvents);
			});
		},
		bindHomeEvents : function() {
			
		},
		bindProfileEvents : function() {
			
		},
		bindRankingsEvents : function() {
			
		},
		bindPlayEvents : function() {
			App.$play.on( 'click', App.setup);
		},
		bindHowToEvents : function() {
			
		},
		bindPlayActionEvents : function(){
			App.$previous.on( 'click', App.previousClick );
			App.$next.on( 'click', App.nextClick );
			App.$match.on( 'click', App.matchClick );
			App.$done.on( 'click', App.doneClick );
		},
		initPlugins : function(){
			App.$navCollapse.collapse({
				toggle: false
			})
		},
		showView : function(viewTemplate, context, cacheElementFunction, bindEventFunction){
			App.$navCollapse.collapse('hide');
			var template = Handlebars.compile(viewTemplate);
			App.$screen.html(template(context));
			cacheElementFunction.call();
			bindEventFunction.call();
		},
		setup : function(){
			App.showView(App.$templatePlayAction.html(), null, App.cachePlayActionElements, App.bindPlayActionEvents);
			App.$cardArt.css('background',"url(https://s3.amazonaws.com/mtg-merlin-us/en/m12/en-m12-2-art.jpg)");
			App.$cardBg1.css('background',"url(https://s3.amazonaws.com/mtg-merlin-us/en/m13/en-m13-2-bg.jpg)");
			App.$cardBg2.css('background',"url(https://s3.amazonaws.com/mtg-merlin-us/en/m13/en-m13-3-bg.jpg)");
			App.$cardBg3.css('background',"url(https://s3.amazonaws.com/mtg-merlin-us/en/m12/en-m12-2-bg.jpg)");
			App.$cardBg4.css('background',"url(https://s3.amazonaws.com/mtg-merlin-us/en/m12/en-m12-3-bg.jpg)");
			App.$cardBg5.css('background',"url(https://s3.amazonaws.com/mtg-merlin-us/en/m13/en-m13-4-bg.jpg)");
		},
		previousClick : function(){
			var $current = $('.current');
			$current.removeClass('current').hide();
			if($current.prev().size() !== 0){
				$current.prev().addClass('current').show();
			}else{
				$('#card-bg-5').addClass('current').show();
			}
		},
		nextClick : function(){
			var $current = $('.current');
			$current.removeClass('current').hide();
			if($current.next().size() !== 0){
				$current.next().addClass('current').show();
			}else{
				$('#card-bg-1').addClass('current').show();
			}	
		},
		matchClick : function(){
			
		},
		doneClick : function(){
			
		}
	};

	window.mtgMerlinApp = App.init();
	App.showView(App.$templateHome.html(), null, App.cacheHomeElements, App.bindHomeEvents);
});
