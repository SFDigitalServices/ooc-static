"use strict";
(function(_d, _w, _t, $){
	_t = {
		scrollTo : function(target){
			$('html,body').stop().animate({scrollTop:$(target).offset().top}, 500);
		},
		skipLink : function(){
			$('#skip-link a:first')
				.prop('href', '#main')
				.text("Skip to main content")
				.on('click', function(e){ e.preventDefault(); _t.scrollTo(this.hash); });
		},
		removeLink : function(target){
			$(target).removeAttr('href');
		},
		ready : function(){
			_t.skipLink(); 
			_t.removeLink('header #site-name a');
		}
	};
	$(_d).ready(function(){_t.ready()});
})(document, window, {}, jQuery);
