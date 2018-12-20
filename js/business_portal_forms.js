"use strict";
(function(_d, _w, _t, $){
	var bizforms = {
		scrollTo : function(target){
			$('html,body').stop().animate({scrollTop:$(target).offset().top}, 500);
		},
		skipLink : function(){
			$('#skip-link a:first')
				.prop('href', '#main')
				.text("Skip to main content")
				.on('click', function(e){ e.preventDefault(); _t.scrollTo(this.hash); });
		},
		ready : function(){
			_t.skipLink(); 
		}
	};
	_t = bizforms; 
	$(_d).ready(function(){_t.ready()});
})(document, window, {}, jQuery);